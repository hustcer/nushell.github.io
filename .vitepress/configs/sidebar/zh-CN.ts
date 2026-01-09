import type { DefaultTheme } from 'vitepress';
import { commandCategories } from './command_categories';

export const sidebarZhCN: DefaultTheme.Sidebar = {
  '/zh-CN/book/': [
    {
      text: '简介',
      link: '/zh-CN/book/',
    },
    {
      text: '安装',
      link: '/zh-CN/book/installation',
      items: [{ text: '设为默认 Shell', link: '/zh-CN/book/default_shell' }],
    },
    {
      text: '快速入门',
      link: '/zh-CN/book/getting_started',
      items: [
        { text: '快速导览', link: '/zh-CN/book/quick_tour' },
        { text: '四处移动', link: '/zh-CN/book/moving_around' },
        { text: '用 Nu 思考', link: '/zh-CN/book/thinking_in_nu' },
        { text: '速查表', link: '/zh-CN/book/cheat_sheet' },
      ],
    },
    {
      text: 'Nu 基础篇',
      link: '/zh-CN/book/nu_fundamentals',
      items: [
        { text: '数据类型', link: '/zh-CN/book/types_of_data' },
        { text: '加载数据', link: '/zh-CN/book/loading_data' },
        { text: '管道', link: '/zh-CN/book/pipelines' },
        { text: '处理字符串', link: '/zh-CN/book/working_with_strings' },
        { text: '处理列表', link: '/zh-CN/book/working_with_lists' },
        { text: '处理记录', link: '/zh-CN/book/working_with_records' },
        { text: '处理表格', link: '/zh-CN/book/working_with_tables' },
        {
          text: '浏览结构化数据',
          link: '/zh-CN/book/navigating_structured_data',
        },
        { text: '特殊变量', link: '/zh-CN/book/special_variables' },
      ],
    },
    {
      text: 'Nushell 编程',
      link: '/zh-CN/book/programming_in_nu',
      items: [
        { text: '自定义命令', link: '/zh-CN/book/custom_commands' },
        { text: '别名', link: '/zh-CN/book/aliases' },
        { text: '运算符', link: '/zh-CN/book/operators' },
        { text: '变量', link: '/zh-CN/book/variables' },
        { text: '控制流', link: '/zh-CN/book/control_flow' },
        { text: '脚本', link: '/zh-CN/book/scripts' },
        {
          text: '模块',
          link: '/zh-CN/book/modules',
          items: [
            { text: '使用模块', link: '/zh-CN/book/modules/using_modules' },
            { text: '创建模块', link: '/zh-CN/book/modules/creating_modules' },
          ],
        },
        { text: 'Overlays', link: '/zh-CN/book/overlays' },
        { text: '排序', link: '/zh-CN/book/sorting' },
        { text: '测试', link: '/zh-CN/book/testing' },
        { text: '风格指南', link: '/zh-CN/book/style_guide' },
      ],
    },
    {
      text: 'Nu 作为 Shell 使用',
      link: '/zh-CN/book/nu_as_a_shell',
      items: [
        { text: '配置', link: '/zh-CN/book/configuration' },
        { text: '环境', link: '/zh-CN/book/environment' },
        {
          text: '标准输出、标准错误和退出码',
          link: '/zh-CN/book/stdout_stderr_exit_codes',
        },
        { text: '运行外部命令', link: '/zh-CN/book/running_externals' },
        { text: '第三方提示符', link: '/zh-CN/book/3rdpartyprompts' },
        { text: '目录栈', link: '/zh-CN/book/directory_stack' },
        { text: '行编辑器', link: '/zh-CN/book/line_editor' },
        { text: '自定义补全', link: '/zh-CN/book/custom_completions' },
        { text: 'Externs', link: '/zh-CN/book/externs' },
        { text: '着色与主题', link: '/zh-CN/book/coloring_and_theming' },
        { text: 'Hooks', link: '/zh-CN/book/hooks' },
        { text: '后台作业', link: '/zh-CN/book/background_jobs' },
      ],
    },
    {
      text: '迁移到 Nu',
      link: '/zh-CN/book/coming_to_nu',
      items: [
        { text: '从 Bash 迁移', link: '/zh-CN/book/coming_from_bash' },
        { text: '从 CMD 迁移', link: '/zh-CN/book/coming_from_cmd' },
        { text: 'Nushell 映射', link: '/zh-CN/book/nushell_map' },
        {
          text: 'Nushell 映射 - 命令式',
          link: '/zh-CN/book/nushell_map_imperative',
        },
        {
          text: 'Nushell 映射 - 函数式',
          link: '/zh-CN/book/nushell_map_functional',
        },
        {
          text: 'Nushell 运算符映射',
          link: '/zh-CN/book/nushell_operator_map',
        },
      ],
    },
    {
      text: '设计说明',
      link: '/zh-CN/book/design_notes',
      items: [
        {
          text: 'Nushell 代码如何运行',
          link: '/zh-CN/book/how_nushell_code_gets_run',
        },
      ],
    },
    {
      text: '（不怎么）高级篇',
      link: '/zh-CN/book/advanced',
      items: [
        { text: '标准库', link: '/zh-CN/book/standard_library' },
        { text: 'Dataframes', link: '/zh-CN/book/dataframes' },
        { text: '元数据', link: '/zh-CN/book/metadata' },
        { text: '创建错误', link: '/zh-CN/book/creating_errors' },
        { text: '并行', link: '/zh-CN/book/parallelism' },
        { text: '插件', link: '/zh-CN/book/plugins' },
        { text: 'Explore', link: '/zh-CN/book/explore' },
      ],
    },
  ],
  '/commands/': [
    {
      text: '命令分类',
      items: commandCategories.map((c) => ({
        text: c.replace('/commands/categories/', '').replace('.md', ''),
        link: c.replace('.md', ''),
      })),
    },
  ],
  '/zh-CN/contributor-book/': [
    {
      text: '贡献者指南',
      link: '/zh-CN/contributor-book/',
      items: [
        { text: '理念', link: '/zh-CN/contributor-book/philosophy' },
        { text: '理念 0.80', link: '/zh-CN/contributor-book/philosophy_0_80' },
        { text: '命令', link: '/zh-CN/contributor-book/commands' },
        { text: '插件', link: '/zh-CN/contributor-book/plugins' },
        {
          text: '插件协议参考',
          link: '/zh-CN/contributor-book/plugin_protocol_reference',
        },
      ],
    },
  ],
  '/zh-CN/cookbook/': [
    {
      text: '实战指南',
      items: [
        { text: '介绍', link: '/zh-CN/cookbook/' },
        { text: '设置', link: '/zh-CN/cookbook/setup' },
        { text: '帮助', link: '/zh-CN/cookbook/help' },
        { text: '系统', link: '/zh-CN/cookbook/system' },
        { text: '解析', link: '/zh-CN/cookbook/parsing' },
        {
          text: '外部 Shell 脚本',
          link: '/zh-CN/cookbook/foreign_shell_scripts',
        },
        { text: '模式匹配', link: '/zh-CN/cookbook/pattern_matching' },
        { text: '自定义补全器', link: '/zh-CN/cookbook/custom_completers' },
        { text: '外部补全器', link: '/zh-CN/cookbook/external_completers' },
        { text: '模块', link: '/zh-CN/cookbook/modules' },
        { text: '文件', link: '/zh-CN/cookbook/files' },
        { text: 'Git', link: '/zh-CN/cookbook/git' },
        { text: '解析 Git 日志', link: '/zh-CN/cookbook/parsing_git_log' },
        { text: '输入监听按键', link: '/zh-CN/cookbook/input_listen_keys' },
        { text: 'HTTP', link: '/zh-CN/cookbook/http' },
        { text: 'Direnv', link: '/zh-CN/cookbook/direnv' },
        { text: 'SSH Agent', link: '/zh-CN/cookbook/ssh_agent' },
        { text: '表格', link: '/zh-CN/cookbook/tables' },
        {
          text: 'Polars vs Pandas vs Nushell',
          link: '/zh-CN/cookbook/polars_v_pandas_v_nushell',
        },
        { text: 'JQ vs Nushell', link: '/zh-CN/cookbook/jq_v_nushell' },
      ],
    },
  ],
};
