# Section3. NextJS Essentials

- Routing, Pages & Components
- Fetching & Sending data
- Styling, Imaages & Metadata

## app

### file convensions

https://nextjs.org/docs/app/api-reference/file-conventions

- `page.js` - define page content
  - 리액트 서버 컴포넌트를 생성 -> 서버에서 렌더하여 클라이언트에게 보여지게 됨
- `layout.js` - define wrapper around pages
  - 하나 또는 그 이상의 페이지를 감싸는 역할
  - 최소한 app root 에 하나의 layout.js 가 정의되어있어야하고, 폴더 당 중첩을 허용. 즉 root 도 적용하고 폴더도 적용하는 디자인이 완성되는 것
    - 중첩 레이아웃 + page -> 이후 root 레이아웃 적용 순서
  - 즉 뼈대를 잡는 방식으로, 포장지에 가깝다
  - `metadata` - title, description 등 head 와 관련된 공통 메타데이터 관리
  - `children` - 현재 활성화된 `page.js` 의 내용
- `globals.css`
  - layout 에서 임포트하는 공통적인 스타일
- `icon.png` - favicon 예약어
- `not-found.js` - define "Not Found" fallback page
- `error.js` - define "Error" fallback page
- `route.js` - API 경로 생성

### Skills

- SPA 방식을 혼용하기
  - 페이지 첫 접속은 서버렌더링 후 클라이언트가 html 을 그려낸다
  - 하지만 페이지간 이동이 반드시 필요한 것은 아니며, 서버렌더링 후 클라이언트에서 JS 코드로 UI 만 업데이트한다(SPA)
- component 는 가급적 app 이외의 디렉토리에 두는 것을 고려. import 에서 root 접근 시, `@` 을 사용함
- dynamic route
  - 대괄호를 사용한 문법

### Server vs. Client Components

- `useEffect()` 사용 시 client component 에서만 사용할 수 있다는 문제가 발생함
- React Server Components
  - 오직 서버에서만 렌더링되는 컴포넌트.
  - 기본적으로 **모든 리액트 컴포넌트**
  - SPA 환경에서 페이지 전환이 일어난대도 결국 렌더링 주체는 서버가 된다는 것. 클라이언트사이드는 이렇게 완성된 HTML 를 그려냄
- Client Components
  - 잠재적으로 클라이언트에서 렌더링할 수 있다
  - 무조건 클라이언트에서 렌더링되어야할 기능. useState, useEffect, eventHandler(onClick), ...
  - 클라이언트 컴포넌트로 만들고싶다면 -> `use client`
- ~~강의105 이미지 슬라이드쇼 미동작~~
- 서버 컴포넌트의 이점을 살리기 위해 컴포넌트 트리 중 가급적 하위에 있는 케이스만 클라이언트 변경을 고려한다

### sqlite

- `npm install better-sqlite3`
- `node initdb.js`
- 사용자에 의해 저장될 이미지는 asset 이 아닌 public 폴더에 저장하고, 그 경로를 sqlite 에 저장함
- methods
  - all : 결과 row 2개 이상 조회
  - get : 결과 row 1개 조회
  - run : 업데이트

### error

- `error.js` 로 처리
- 클라이언트 사이드에서 처리되도록 강제되었기 때문에 `"use client";` 선언이 필수

### not-found

- `not-found.js` 로 처리
- 서버사이드에서 처리
- `notFound()` 함수를 이용해서, 현재 위치에서 가장 가까운 위치의 not-found 정의를 네비게이팅 할 수 있음
