# Section1. 시작하기

- React 도 라이브러리이지만 nextjs 를 사용하는 이유

  - 현재 SPA 방식보다 fullstack 프레임워크를 이용한 앱 구현 방식이 트랜드
  - React 도 서버 사이드 기능이 업데이트되고 있는 추세
  - Full stack
    - Data fetching, form submission, authentication 등
  - File-based routing
  - Server-side rendering
    - finished HTML page
    - SEO

- `npx create-next-app@latest`
- app 구축 방식
  - `Pages Router`
    - 사용한지 오래되었지만 안정적인 방식
    - 리액트와 합쳐져 풀스택앱을 만드는 방식
  - `App Router`
    - 새로운 방식이지만 어느정도 안정화됨. 물론 버그도 있음.
    - 좀 더 최신화된 Next & React 기능을 사용할 수 있음.
    - NextJs 에서 추구하는 방식
- nextjs = server-side + client-side
- `app` 디렉토리 이하에 `folder` + `page.js` 형식이 file-based routing 역할을 해준다
  - page.js 내 react 함수 이름은 자유형식이다
