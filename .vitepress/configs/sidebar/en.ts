import type { DefaultTheme } from 'vitepress';
import { commandCategories } from './command_categories';

export const sidebarEn: DefaultTheme.Sidebar = {
  '/book/': [
    {
      text: 'Introduction',
      link: '/book/',
    },
    {
      text: 'Installation',
      link: '/book/installation',
      items: [
        { text: 'Setting as Default Shell', link: '/book/default_shell' },
      ],
    },
    {
      text: 'Getting Started',
      link: '/book/getting_started',
      items: [
        { text: 'Quick Tour', link: '/book/quick_tour' },
        { text: 'Moving Around', link: '/book/moving_around' },
        { text: 'Thinking in Nu', link: '/book/thinking_in_nu' },
        { text: 'Cheat Sheet', link: '/book/cheat_sheet' },
      ],
    },
    {
      text: 'Nu Fundamentals',
      link: '/book/nu_fundamentals',
      items: [
        { text: 'Types of Data', link: '/book/types_of_data' },
        { text: 'Loading Data', link: '/book/loading_data' },
        { text: 'Pipelines', link: '/book/pipelines' },
        { text: 'Working with Strings', link: '/book/working_with_strings' },
        { text: 'Working with Lists', link: '/book/working_with_lists' },
        { text: 'Working with Records', link: '/book/working_with_records' },
        { text: 'Working with Tables', link: '/book/working_with_tables' },
        {
          text: 'Navigating Structured Data',
          link: '/book/navigating_structured_data',
        },
        { text: 'Special Variables', link: '/book/special_variables' },
      ],
    },
    {
      text: 'Programming in Nu',
      link: '/book/programming_in_nu',
      items: [
        { text: 'Custom Commands', link: '/book/custom_commands' },
        { text: 'Aliases', link: '/book/aliases' },
        { text: 'Operators', link: '/book/operators' },
        { text: 'Variables', link: '/book/variables' },
        { text: 'Control Flow', link: '/book/control_flow' },
        { text: 'Scripts', link: '/book/scripts' },
        {
          text: 'Modules',
          link: '/book/modules',
          items: [
            { text: 'Using Modules', link: '/book/modules/using_modules' },
            {
              text: 'Creating Modules',
              link: '/book/modules/creating_modules',
            },
          ],
        },
        { text: 'Overlays', link: '/book/overlays' },
        { text: 'Sorting', link: '/book/sorting' },
        { text: 'Testing', link: '/book/testing' },
        { text: 'Style Guide', link: '/book/style_guide' },
      ],
    },
    {
      text: 'Nu as a Shell',
      link: '/book/nu_as_a_shell',
      items: [
        { text: 'Configuration', link: '/book/configuration' },
        { text: 'Environment', link: '/book/environment' },
        {
          text: 'Stdout, Stderr, and Exit Codes',
          link: '/book/stdout_stderr_exit_codes',
        },
        { text: 'Running Externals', link: '/book/running_externals' },
        { text: '3rd Party Prompts', link: '/book/3rdpartyprompts' },
        { text: 'Directory Stack', link: '/book/directory_stack' },
        { text: 'Line Editor', link: '/book/line_editor' },
        { text: 'Custom Completions', link: '/book/custom_completions' },
        { text: 'Externs', link: '/book/externs' },
        { text: 'Coloring and Theming', link: '/book/coloring_and_theming' },
        { text: 'Hooks', link: '/book/hooks' },
        { text: 'Background Jobs', link: '/book/background_jobs' },
      ],
    },
    {
      text: 'Coming to Nu',
      link: '/book/coming_to_nu',
      items: [
        { text: 'Coming from Bash', link: '/book/coming_from_bash' },
        { text: 'Coming from CMD', link: '/book/coming_from_cmd' },
        {
          text: 'Coming from PowerShell',
          link: '/book/coming_from_powershell',
        },
        { text: 'Nushell Map', link: '/book/nushell_map' },
        {
          text: 'Nushell Map - Imperative',
          link: '/book/nushell_map_imperative',
        },
        {
          text: 'Nushell Map - Functional',
          link: '/book/nushell_map_functional',
        },
        { text: 'Nushell Operator Map', link: '/book/nushell_operator_map' },
      ],
    },
    {
      text: 'Design Notes',
      link: '/book/design_notes',
      items: [
        {
          text: 'How Nushell Code Gets Run',
          link: '/book/how_nushell_code_gets_run',
        },
      ],
    },
    {
      text: '(Not So) Advanced',
      link: '/book/advanced',
      items: [
        { text: 'Standard Library', link: '/book/standard_library' },
        { text: 'Dataframes', link: '/book/dataframes' },
        { text: 'Metadata', link: '/book/metadata' },
        { text: 'Creating Errors', link: '/book/creating_errors' },
        { text: 'Parallelism', link: '/book/parallelism' },
        { text: 'Plugins', link: '/book/plugins' },
        { text: 'Explore', link: '/book/explore' },
      ],
    },
  ],
  '/commands/': [
    {
      text: 'Categories',
      items: commandCategories.map((c) => ({
        text: c.replace('/commands/categories/', '').replace('.md', ''),
        link: c.replace('.md', ''),
      })),
    },
  ],
  '/contributor-book/': [
    {
      text: 'Contributor Book',
      link: '/contributor-book/',
      items: [
        { text: 'Philosophy', link: '/contributor-book/philosophy' },
        { text: 'Philosophy 0.80', link: '/contributor-book/philosophy_0_80' },
        { text: 'Commands', link: '/contributor-book/commands' },
        { text: 'Plugins', link: '/contributor-book/plugins' },
        {
          text: 'Plugin Protocol Reference',
          link: '/contributor-book/plugin_protocol_reference',
        },
      ],
    },
  ],
  '/cookbook/': [
    {
      text: 'Cookbook',
      items: [
        { text: 'Introduction', link: '/cookbook/' },
        { text: 'Setup', link: '/cookbook/setup' },
        { text: 'Help', link: '/cookbook/help' },
        { text: 'System', link: '/cookbook/system' },
        { text: 'Parsing', link: '/cookbook/parsing' },
        {
          text: 'Foreign Shell Scripts',
          link: '/cookbook/foreign_shell_scripts',
        },
        { text: 'Pattern Matching', link: '/cookbook/pattern_matching' },
        { text: 'Custom Completers', link: '/cookbook/custom_completers' },
        { text: 'External Completers', link: '/cookbook/external_completers' },
        { text: 'Modules', link: '/cookbook/modules' },
        { text: 'Files', link: '/cookbook/files' },
        { text: 'Git', link: '/cookbook/git' },
        { text: 'Parsing Git Log', link: '/cookbook/parsing_git_log' },
        { text: 'Input Listen Keys', link: '/cookbook/input_listen_keys' },
        { text: 'HTTP', link: '/cookbook/http' },
        { text: 'Direnv', link: '/cookbook/direnv' },
        { text: 'SSH Agent', link: '/cookbook/ssh_agent' },
        { text: 'Tables', link: '/cookbook/tables' },
        {
          text: 'Polars vs Pandas vs Nushell',
          link: '/cookbook/polars_v_pandas_v_nushell',
        },
        { text: 'JQ vs Nushell', link: '/cookbook/jq_v_nushell' },
      ],
    },
  ],
  '/lang-guide/': [
    {
      text: 'Language Reference Guide',
      link: '/lang-guide/',
      items: [
        {
          text: 'Types in the Nu Language',
          link: '/lang-guide/chapters/types/00_types_overview',
          collapsed: true,
          items: [
            {
              text: 'Basic Types',
              link: '/lang-guide/chapters/types/basic_types/00_basic_types',
              collapsed: true,
              items: [
                {
                  text: 'Any',
                  link: '/lang-guide/chapters/types/basic_types/any',
                },
                {
                  text: 'Bool',
                  link: '/lang-guide/chapters/types/basic_types/bool',
                },
                {
                  text: 'Int',
                  link: '/lang-guide/chapters/types/basic_types/int',
                },
                {
                  text: 'Float',
                  link: '/lang-guide/chapters/types/basic_types/float',
                },
                {
                  text: 'Filesize',
                  link: '/lang-guide/chapters/types/basic_types/filesize',
                },
                {
                  text: 'Duration',
                  link: '/lang-guide/chapters/types/basic_types/duration',
                },
                {
                  text: 'Datetime',
                  link: '/lang-guide/chapters/types/basic_types/datetime',
                },
                {
                  text: 'Range',
                  link: '/lang-guide/chapters/types/basic_types/range',
                },
                {
                  text: 'String',
                  link: '/lang-guide/chapters/types/basic_types/string',
                },
                {
                  text: 'Record',
                  link: '/lang-guide/chapters/types/basic_types/record',
                },
                {
                  text: 'List',
                  link: '/lang-guide/chapters/types/basic_types/list',
                },
                {
                  text: 'Table',
                  link: '/lang-guide/chapters/types/basic_types/table',
                },
                {
                  text: 'Closure',
                  link: '/lang-guide/chapters/types/basic_types/closure',
                },
                {
                  text: 'Nothing',
                  link: '/lang-guide/chapters/types/basic_types/nothing',
                },
                {
                  text: 'Binary',
                  link: '/lang-guide/chapters/types/basic_types/binary',
                },
                {
                  text: 'Glob',
                  link: '/lang-guide/chapters/types/basic_types/glob',
                },
                {
                  text: 'Cell Path',
                  link: '/lang-guide/chapters/types/basic_types/cellpath',
                },
              ],
            },
            {
              text: 'Other Data Types',
              collapsed: true,
              items: [
                {
                  text: 'Types that cannot be used to declare variables',
                  link: '/lang-guide/chapters/types/other_types/00_not_assignable',
                  items: [
                    {
                      text: 'Path',
                      link: '/lang-guide/chapters/types/other_types/path',
                    },
                  ],
                },
                {
                  text: 'Types which are not declarable',
                  link: '/lang-guide/chapters/types/other_types/01_not_declarable',
                  items: [
                    {
                      text: 'Error',
                      link: '/lang-guide/chapters/types/other_types/error',
                    },
                    {
                      text: 'Custom Value',
                      link: '/lang-guide/chapters/types/other_types/custom_value',
                    },
                    {
                      text: 'Block',
                      link: '/lang-guide/chapters/types/other_types/block',
                    },
                  ],
                },
              ],
            },
            {
              text: 'Type Signatures',
              link: '/lang-guide/chapters/types/type_signatures',
            },
            {
              text: 'Related Commands',
              link: '/lang-guide/chapters/types/related_commands',
            },
          ],
        },
        { text: 'Operators', link: '/lang-guide/chapters/operators' },
        {
          text: 'Flow control',
          link: '/lang-guide/chapters/flow_control/00_flow_control_overview',
          collapsed: true,
          items: [
            {
              text: 'If-Else',
              link: '/lang-guide/chapters/flow_control/if-else',
            },
            { text: 'Loop', link: '/lang-guide/chapters/flow_control/loop' },
            { text: 'While', link: '/lang-guide/chapters/flow_control/while' },
            { text: 'Match', link: '/lang-guide/chapters/flow_control/match' },
            {
              text: 'Try-Catch',
              link: '/lang-guide/chapters/flow_control/try-catch',
            },
            { text: 'Break', link: '/lang-guide/chapters/flow_control/break' },
            {
              text: 'Return',
              link: '/lang-guide/chapters/flow_control/return',
            },
            {
              text: 'Continue',
              link: '/lang-guide/chapters/flow_control/continue',
            },
          ],
        },
        {
          text: 'Filters',
          link: '/lang-guide/chapters/filters/00_filters_overview',
          collapsed: true,
          items: [
            {
              text: 'Each / Par-Each',
              link: '/lang-guide/chapters/filters/each-par-each',
            },
            {
              text: 'Selecting Data',
              link: '/lang-guide/chapters/filters/selecting_data',
            },
            {
              text: 'Where / Filter',
              link: '/lang-guide/chapters/filters/where-filter',
            },
            {
              text: 'Select / Get',
              link: '/lang-guide/chapters/filters/select-get',
            },
          ],
        },
        {
          text: 'Custom Commands',
          link: '/lang-guide/chapters/custom_commands',
        },
        { text: 'Declarations', link: '/lang-guide/chapters/declarations' },
        { text: 'Variable Scope', link: '/lang-guide/chapters/variable_scope' },
        {
          text: 'Strings and Text',
          link: '/lang-guide/chapters/strings_and_text',
        },
        {
          text: 'Helpers and Debugging',
          link: '/lang-guide/chapters/helpers_and_debugging',
        },
        { text: 'Pipelines', link: '/lang-guide/chapters/pipelines' },
        { text: 'MIME Types', link: '/lang-guide/chapters/mime_types' },
      ],
    },
  ],
};
