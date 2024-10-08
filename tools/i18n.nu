
cd ($env.CURRENT_FILE | path dirname | path dirname)
let META_FILE = 'tools/i18n-meta.json'
if ($META_FILE | path exists) == false {
    echo '[]' | save -r $META_FILE
}
let meta = (open $META_FILE)

# Check if a git repo has the specified ref: could be a branch or tag, etc.
def 'has-ref' [
  ref: string   # The git ref to check
] {
  let parse = (git rev-parse --verify -q $ref)
  if ($parse | is-empty) { false } else { true }
}

# Update issue contents for https://github.com/nushell/nushell.github.io/issues/261
def update-i18n-status [] {

    print "The following table holds the overview of the Nushell docs’ writing and translation status. We welcome translations and translation updates. When making changes please keep the `i18n-meta.json` file up-to-date."
    print $'(char nl)---(char nl)'

    let status = (
        ls -s book/*.md
            | where type == file
            | select name
            | upsert en {|elt| get-cell $elt.name en }
            | upsert zh-CN {|elt| get-cell $elt.name zh-CN }
            | upsert de {|elt| get-cell $elt.name de }
            | upsert tr {|elt| get-cell $elt.name tr }
            | upsert ja {|elt| get-cell $elt.name ja }
            | upsert es {|elt| get-cell $elt.name es }
            | upsert pt-BR {|elt| get-cell $elt.name pt-BR }
            | upsert ru {|elt| get-cell $elt.name ru }
            | to md --pretty
    )
    print $status

    print $'(char nl)Possible status values: `-`,`Completed`,`In Progress`,`translated by @ABC`,`commit_id@author`,`commit_id`.(char nl)'
}

def get-cell [
    name: string
    lng: string
] {
    let match = ($meta | where name == $name)
    let cellDefault = if ($lng == 'en') { 'In progress' } else { '-' }
    # For newly added docs
    if ($match | length) == 0 {
        $cellDefault

    } else {    # For existing docs
        let val = ($match | get $lng | get 0)
        if ($val | is-empty) {
            $cellDefault
        # Handle data like: "c13a71d11@hustcer"
        } else if ($val | str contains '@') {
            let commit = ($val | split row '@')
            let id = ($commit | get 0)
            if ($commit | length) > 1 and (has-ref $id) {
                $'($id)@($commit | get 1)'
            } else {
                $val
            }
        } else if (has-ref $val) {
            $'Translate to ($val)'
        } else {
            $val
        }
    }
}

# Generate or update meta data for docs' translation status
def gen-i18n-meta [] {
    ls -s book/*.md
        | where type == file
        | select name
        | upsert en {|elt| get-cell $elt.name en }
        | upsert zh-CN {|elt| get-cell $elt.name zh-CN }
        | upsert de {|elt| get-cell $elt.name de }
        | upsert tr {|elt| get-cell $elt.name tr }
        | upsert ja {|elt| get-cell $elt.name ja }
        | upsert es {|elt| get-cell $elt.name es }
        | upsert pt-BR {|elt| get-cell $elt.name pt-BR }
        | upsert ru {|elt| get-cell $elt.name ru }
        | to json -i 2
        | save -rf $META_FILE
}

def has-change [
    name: string,       # The doc file name to check
    commit: string,     # The ending commit id
] {
    let diff = (git diff $commit $'book/($name)' | str trim)
    if ($diff | is-empty) { $'(ansi g)No(ansi reset)' } else { $'(ansi r)Yes(ansi reset)' }
}

def check-outdated-translation [
    lng: string     # The locale to check outdated
] {
    let columns = { 'zh-cn': 'zh-CN', 'pt-br': 'pt-BR' }
    let locale = if ($lng in $columns) { $columns | get $lng } else { $lng }
    open $META_FILE | select name $locale | insert outdated { |row|
        let val = ($row | get $locale)
        if ($val | is-empty) or $val == '-' {
            '-'
        # Handle data like: "c13a71d11@hustcer"
        } else if ($val | str contains '@') {
            let commit = ($val | split row '@')
            let id = ($commit | get 0)
            if ($commit | length) > 1 and (has-ref $id) {
                has-change $row.name $id
            } else {
                'N/A'
            }
        } else if (has-ref $val) {
            has-change $row.name $val
        } else {
            'N/A'
        }
    } | sort-by outdated name
}

# Use `nu ./i18n.nu outdated zh-CN` to check outdated translations for zh-CN
# Some helper commands for i18n related tasks
def main [
    task: string    # Available task: `gen`, `update`, `outdated`
    lng?: string    # The locale to check outdated: zh-CN, de, etc.
] {
    let locales = ['zh-cn', 'de', 'tr', 'ja', 'es', 'pt-br', 'ru']
    match $task {
        'gen' => { gen-i18n-meta },
        'update' => { update-i18n-status },
        'outdated' => {
            if ($lng | is-empty) {
                print $'(ansi r)A locale code required, available locales: ($locales), Please try again!(ansi reset)(char nl)'
                exit
            }
            let available = ($lng | str downcase) in $locales
            if (not $available) {
                print $'(ansi r)Unsupported locale, available locales: ($locales), Please try again!(ansi reset)(char nl)'
                exit
            }
            check-outdated-translation $lng
        }
    }
}

