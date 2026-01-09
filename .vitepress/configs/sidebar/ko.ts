import type { DefaultTheme } from 'vitepress';

export const sidebarKo: DefaultTheme.Sidebar = {
  '/ko/book/': [
    {
      text: '소개',
      link: '/ko/book/',
    },
    {
      text: '설치하기',
      link: '/ko/book/installation',
      items: [{ text: '기본 셸로 설정', link: '/ko/book/default_shell' }],
    },
    {
      text: '시작하기',
      link: '/ko/book/getting_started',
      items: [
        { text: '빠른 둘러보기', link: '/ko/book/quick_tour' },
        { text: '이동하기', link: '/ko/book/moving_around' },
        { text: 'Nu로 생각하기', link: '/ko/book/thinking_in_nu' },
        { text: '치트 시트', link: '/ko/book/cheat_sheet' },
      ],
    },
    {
      text: 'Nu 기본',
      link: '/ko/book/nu_fundamentals',
      items: [
        { text: '데이터 타입', link: '/ko/book/types_of_data' },
        { text: '데이터 불러오기', link: '/ko/book/loading_data' },
        { text: '파이프라인', link: '/ko/book/pipelines' },
        { text: '문자열 다루기', link: '/ko/book/working_with_strings' },
        { text: '리스트 다루기', link: '/ko/book/working_with_lists' },
        { text: '레코드 다루기', link: '/ko/book/working_with_records' },
        { text: '테이블 다루기', link: '/ko/book/working_with_tables' },
        {
          text: '구조화된 데이터 탐색',
          link: '/ko/book/navigating_structured_data',
        },
        { text: '특수 변수', link: '/ko/book/special_variables' },
      ],
    },
    {
      text: 'Nu에서 프로그래밍하기',
      link: '/ko/book/programming_in_nu',
      items: [
        { text: '사용자 정의 명령', link: '/ko/book/custom_commands' },
        { text: '별칭', link: '/ko/book/aliases' },
        { text: '연산자', link: '/ko/book/operators' },
        { text: '변수', link: '/ko/book/variables' },
        { text: '제어 흐름', link: '/ko/book/control_flow' },
        { text: '스크립트', link: '/ko/book/scripts' },
        {
          text: '모듈',
          link: '/ko/book/modules',
          items: [
            { text: '모듈 사용하기', link: '/ko/book/modules/using_modules' },
            { text: '모듈 만들기', link: '/ko/book/modules/creating_modules' },
          ],
        },
        { text: '오버레이', link: '/ko/book/overlays' },
        { text: '정렬', link: '/ko/book/sorting' },
        { text: '테스트', link: '/ko/book/testing' },
        { text: '스타일 가이드', link: '/ko/book/style_guide' },
      ],
    },
    {
      text: '셸로서의 Nu',
      link: '/ko/book/nu_as_a_shell',
      items: [
        { text: '설정', link: '/ko/book/configuration' },
        { text: '환경', link: '/ko/book/environment' },
        {
          text: '표준 출력/오류/종료 코드',
          link: '/ko/book/stdout_stderr_exit_codes',
        },
        { text: '외부 명령 실행', link: '/ko/book/running_externals' },
        { text: '서드파티 프롬프트', link: '/ko/book/3rdpartyprompts' },
        { text: '디렉토리 스택', link: '/ko/book/directory_stack' },
        { text: '라인 에디터', link: '/ko/book/line_editor' },
        { text: '사용자 정의 완성', link: '/ko/book/custom_completions' },
        { text: 'Externs', link: '/ko/book/externs' },
        { text: '색상 및 테마', link: '/ko/book/coloring_and_theming' },
        { text: '훅', link: '/ko/book/hooks' },
        { text: '백그라운드 작업', link: '/ko/book/background_jobs' },
      ],
    },
    {
      text: 'Nu로 전환하기',
      link: '/ko/book/coming_to_nu',
      items: [
        { text: 'Bash에서 전환', link: '/ko/book/coming_from_bash' },
        { text: 'CMD에서 전환', link: '/ko/book/coming_from_cmd' },
        { text: 'Nushell 맵', link: '/ko/book/nushell_map' },
        {
          text: 'Nushell 맵 (명령형)',
          link: '/ko/book/nushell_map_imperative',
        },
        {
          text: 'Nushell 맵 (함수형)',
          link: '/ko/book/nushell_map_functional',
        },
        { text: 'Nushell 연산자 맵', link: '/ko/book/nushell_operator_map' },
      ],
    },
    {
      text: '디자인 노트',
      link: '/ko/book/design_notes',
      items: [
        {
          text: 'Nushell 코드 실행 방법',
          link: '/ko/book/how_nushell_code_gets_run',
        },
      ],
    },
    {
      text: '(약간)고급 사용법',
      link: '/ko/book/advanced',
      items: [
        { text: '표준 라이브러리', link: '/ko/book/standard_library' },
        { text: '데이터프레임', link: '/ko/book/dataframes' },
        { text: '메타데이터', link: '/ko/book/metadata' },
        { text: '에러 생성', link: '/ko/book/creating_errors' },
        { text: '병렬 처리', link: '/ko/book/parallelism' },
        { text: '플러그인', link: '/ko/book/plugins' },
        { text: 'Explore', link: '/ko/book/explore' },
      ],
    },
  ],
};
