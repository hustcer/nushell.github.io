import type { DefaultTheme } from 'vitepress';

export const sidebarJa: DefaultTheme.Sidebar = {
  '/ja/book/': [
    {
      text: 'はじめに',
      link: '/ja/book/',
    },
    {
      text: 'Getting Started',
      link: '/ja/book/getting_started',
      items: [
        { text: 'インストール', link: '/ja/book/installation' },
        { text: 'デフォルトシェル', link: '/book/default_shell' },
        { text: 'クイックツアー', link: '/ja/book/quick_tour' },
        { text: '移動', link: '/ja/book/moving_around' },
        { text: 'Nu的思考', link: '/book/thinking_in_nu' },
        { text: 'チートシート', link: '/book/cheat_sheet' },
      ],
    },
    {
      text: 'Nu 基礎編',
      link: '/ja/book/nu_fundamentals',
      items: [
        { text: 'データ型', link: '/ja/book/types_of_data' },
        { text: 'データの読み込み', link: '/ja/book/loading_data' },
        { text: 'パイプライン', link: '/ja/book/pipeline' },
        { text: '文字列の操作', link: '/book/working_with_strings' },
        { text: 'リストの操作', link: '/book/working_with_lists' },
        { text: 'テーブルの操作', link: '/ja/book/working_with_tables' },
      ],
    },
    {
      text: 'Programming in Nu',
      link: '/ja/book/programming_in_nu',
      items: [
        { text: 'カスタムコマンド', link: '/book/custom_commands' },
        { text: 'エイリアス', link: '/ja/book/aliases' },
        { text: '演算子', link: '/book/operators' },
        { text: '変数とサブ式', link: '/book/variables_and_subexpressions' },
        { text: 'スクリプト', link: '/book/scripts' },
        { text: 'モジュール', link: '/book/modules' },
        { text: 'オーバーレイ', link: '/book/overlays' },
        { text: 'コマンドシグネチャ', link: '/book/command_signature' },
        { text: 'テスト', link: '/book/testing' },
        { text: 'スタイルガイド', link: '/book/style_guide' },
      ],
    },
    {
      text: 'シェルとしての Nu',
      link: '/ja/book/nu_as_a_shell',
      items: [
        { text: '設定', link: '/ja/book/configuration' },
        { text: '環境', link: '/ja/book/environment' },
        {
          text: '標準出力/標準エラー/終了コード',
          link: '/book/stdout_stderr_exit_codes',
        },
        { text: 'エスケープ', link: '/ja/book/escaping' },
        { text: 'サードパーティプロンプト', link: '/book/3rdpartyprompts' },
        { text: 'シェル in シェル', link: '/ja/book/shells_in_shells' },
        { text: 'ラインエディタ', link: '/book/line_editor' },
        { text: 'Externs', link: '/book/externs' },
        { text: 'カスタム補完', link: '/book/custom_completions' },
        { text: '色とテーマ', link: '/book/coloring_and_theming' },
        { text: 'フック', link: '/book/hooks' },
        { text: 'バックグラウンドタスク', link: '/book/background_task' },
      ],
    },
    {
      text: 'Nu への移行',
      link: '/ja/book/coming_to_nu',
      items: [
        { text: 'Bashから', link: '/ja/book/coming_from_bash' },
        { text: 'CMDから', link: '/book/coming_from_cmd' },
        { text: 'Nushellマップ', link: '/ja/book/nushell_map' },
        {
          text: 'Nushellマップ(命令型)',
          link: '/ja/book/nushell_map_imperative',
        },
        {
          text: 'Nushellマップ(関数型)',
          link: '/ja/book/nushell_map_functional',
        },
        { text: 'Nushell演算子マップ', link: '/ja/book/nushell_operator_map' },
      ],
    },
    {
      text: 'Design Notes',
      link: '/ja/book/design_notes',
      items: [
        {
          text: 'Nushellコードの実行方法',
          link: '/book/how_nushell_code_gets_run',
        },
      ],
    },
    {
      text: '(Not So) Advanced',
      link: '/ja/book/advanced',
      items: [
        { text: '標準ライブラリ', link: '/book/standard_library' },
        { text: 'データフレーム', link: '/book/dataframes' },
        { text: 'メタデータ', link: '/ja/book/metadata' },
        { text: 'エラーの作成', link: '/book/creating_errors' },
        { text: '並列処理', link: '/book/parallelism' },
        { text: 'プラグイン', link: '/ja/book/plugins' },
        { text: 'Explore', link: '/book/explore' },
      ],
    },
  ],
};
