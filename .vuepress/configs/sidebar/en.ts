import type { SidebarConfig } from '@vuepress/theme-default';

export const sidebarEn: SidebarConfig = {
  '/book/': [
    {
      text: 'Introduction',
      link: '/book/README.md',
      collapsible: false,
    },
    {
      text: 'Getting Started',
      link: '/book/getting_started.md',
      collapsible: false,
      children: [
        '/book/installation.md',
        '/book/quick_tour.md',
        '/book/moving_around.md',
        '/book/thinking_in_nu.md',
      ],
    },
    {
      text: 'Nu Fundamentals',
      link: '/book/nu_fundamentals.md',
      collapsible: false,
      children: [
        '/book/types_of_data.md',
        '/book/loading_data.md',
        '/book/pipelines.md',
        '/book/working_with_strings.md',
        '/book/working_with_lists.md',
        '/book/working_with_tables.md',
        '/book/command_reference.md',
      ],
    },
    {
      text: 'Programming in Nu',
      link: '/book/programming_in_nu.md',
      collapsible: false,
      children: [
        '/book/custom_commands.md',
        '/book/aliases.md',
        '/book/operators.md',
        '/book/variables_and_subexpressions.md',
        '/book/scripts.md',
        '/book/modules.md',
        '/book/overlays.md',
      ],
    },
    {
      text: 'Nu as a Shell',
      link: '/book/nu_as_a_shell.md',
      collapsible: false,
      children: [
        '/book/configuration.md',
        '/book/environment.md',
        '/book/stdout_stderr_exit_codes.md',
        '/book/escaping.md',
        '/book/3rdpartyprompts.md',
        '/book/shells_in_shells.md',
        '/book/line_editor.md',
        '/book/externs.md',
        '/book/custom_completions.md',
        '/book/coloring_and_theming.md',
        '/book/hooks.md',
      ],
    },
    {
      text: 'Coming to Nu',
      link: '/book/coming_to_nu.md',
      collapsible: false,
      children: [
        '/book/coming_from_bash.md',
        '/book/coming_from_cmd.md',
        '/book/nushell_map.md',
        '/book/nushell_map_imperative.md',
        '/book/nushell_map_functional.md',
        '/book/nushell_operator_map.md',
      ],
    },
    {
      text: '(Not So) Advanced',
      link: '/book/advanced.md',
      collapsible: false,
      children: [
        '/book/dataframes.md',
        '/book/metadata.md',
        '/book/creating_errors.md',
        '/book/parallelism.md',
        '/book/plugins.md',
      ],
    },
  ],
  '/book/v0.68.x/': [
    {
      text: 'Introduction',
      link: '/book/v0.68.x/README.md',
      collapsible: false,
    },
    {
      text: 'Getting Started',
      link: '/book/v0.68.x/getting_started.md',
      collapsible: false,
      children: [
        '/book/v0.68.x/installation.md',
        '/book/v0.68.x/quick_tour.md',
        '/book/v0.68.x/moving_around.md',
        '/book/v0.68.x/thinking_in_nu.md',
      ],
    },
    {
      text: 'Nu Fundamentals',
      link: '/book/v0.68.x/nu_fundamentals.md',
      collapsible: false,
      children: [
        '/book/v0.68.x/types_of_data.md',
        '/book/v0.68.x/loading_data.md',
        '/book/v0.68.x/pipelines.md',
        '/book/v0.68.x/working_with_strings.md',
        '/book/v0.68.x/working_with_lists.md',
        '/book/v0.68.x/working_with_tables.md',
        '/book/v0.68.x/command_reference.md',
      ],
    },
    {
      text: 'Programming in Nu',
      link: '/book/v0.68.x/programming_in_nu.md',
      collapsible: false,
      children: [
        '/book/v0.68.x/custom_commands.md',
        '/book/v0.68.x/aliases.md',
        '/book/v0.68.x/operators.md',
        '/book/v0.68.x/variables_and_subexpressions.md',
        '/book/v0.68.x/scripts.md',
        '/book/v0.68.x/modules.md',
        '/book/v0.68.x/overlays.md',
      ],
    },
    {
      text: 'Nu as a Shell',
      link: '/book/v0.68.x/nu_as_a_shell.md',
      collapsible: false,
      children: [
        '/book/v0.68.x/configuration.md',
        '/book/v0.68.x/environment.md',
        '/book/v0.68.x/stdout_stderr_exit_codes.md',
        '/book/v0.68.x/escaping.md',
        '/book/v0.68.x/3rdpartyprompts.md',
        '/book/v0.68.x/shells_in_shells.md',
        '/book/v0.68.x/line_editor.md',
        '/book/v0.68.x/externs.md',
        '/book/v0.68.x/custom_completions.md',
        '/book/v0.68.x/coloring_and_theming.md',
        '/book/v0.68.x/hooks.md',
      ],
    },
    {
      text: 'Coming to Nu',
      link: '/book/v0.68.x/coming_to_nu.md',
      collapsible: false,
      children: [
        '/book/v0.68.x/coming_from_bash.md',
        '/book/v0.68.x/coming_from_cmd.md',
        '/book/v0.68.x/nushell_map.md',
        '/book/v0.68.x/nushell_map_imperative.md',
        '/book/v0.68.x/nushell_map_functional.md',
        '/book/v0.68.x/nushell_operator_map.md',
      ],
    },
    {
      text: '(Not So) Advanced',
      link: '/book/v0.68.x/advanced.md',
      collapsible: false,
      children: [
        '/book/v0.68.x/dataframes.md',
        '/book/v0.68.x/metadata.md',
        '/book/v0.68.x/creating_errors.md',
        '/book/v0.68.x/parallelism.md',
        '/book/v0.68.x/plugins.md',
      ],
    },
  ],
  // "/contributor-book/": [
  //   {
  //     text: "Contributor Book",
  //     collapsible: false,
  //     children: [
  //       "",
  //       "philosophy",
  //       "values",
  //       "commands",
  //       "streams",
  //       "metadata",
  //       "plugins",
  //       "shells",
  //     ],
  //   },
  // ],
  '/cookbook/': [
    {
      text: 'Cookbook',
      collapsible: false,
      children: [
        'README.md',
        'setup',
        'help',
        'system',
        'parsing',
        'native_shell_programs',
        'files',
        'git',
        'parsing_git_log',
        'http',
        'direnv',
        'misc',
        'tables',
      ],
    },
  ],
};