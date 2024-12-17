# Section4. Routing & Page Rendering

- Understanding Routing in NextJS Applications
- File Name Conventions & project Structure
- Server Components & Client Components

## 병렬 라우트

- 정의: 라우트 두개의 컨텐츠를 단일 페이지로 라우팅하는 기능
- 방식
  - @로 시작하는 폴더를 2개이상 생성한다
  - 그 상위에 있는 layout 은 children 으로써 각 라우팅 page 정보를 인자로 전달 받게된다
  - 그럼 각 page 를 성격에 맞게 하나의 페이지에서 배치하여 사용한다
- 병렬 라우트를 구성할 때, 하위의 구성을 서로 일치시켜 원하는 경로를 모두 지원해줄 필요가 있다
  - 그렇지 않으려면 `default.js` 를 구성
  - `page.js` 내용과 `default.js` 일치하다면, `page.js` 를 삭제해도 무방하다
- `catch-all` route
  - 특정 경로 이하의 모든 경로를 캐치하도록 라우팅 설정함
  - 디렉토리 `[[...filter]]`
