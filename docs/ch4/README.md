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

## 인터셉터 라우트

- intercepts internal navigation requests
- 대체 라우트. 페이지 내부 링크를 통한 탐색 여부에 따라 활성화
- 단일 페이지 어플리케이션 내에서 움직이든지, 외부 링크를 통해 접근하는지, 직접 URL 을 입력하여 접근하는지, 페이지를 새로고침하던지에 따라 표시하는 페이지가 달라짐
- 라우팅 방식 - `(.)image`
  - `(.)` - 인터셉트할 부모 경로
  - `image` - 인터셉트할 경로

## 라우트 그룹

- 라우트 그룹을 통해 전용 레이아웃을 설정할 수 있음
- 그룹에 포함되는 라우트만 레이아웃을 적용
- 사용 방식 - `(content)`
  - 실제로 content 라는 라우팅이 생기는 것이 아님
  - 관련해서 라우팅 그룹만 생성되고, 하위에 폴더 구조가 라우팅 구조를 유지하는 대신 레이아웃을 그룹화하여 동일하게 사용함

## 라우트 핸들러

- 화면에 렌더링되는 페이지를 반환하지 않는 라우트를 설정함
  - 보통 JSON 을 수락하고 JSON 을 응답함 (API)
- `route.js` 정의
- http 메서드 명 함수 정의
  - GET, POST, DELETE, PUT, 등

## middleware

- 수신하는 요청을 살펴보고 변경하거나 차단해서 인증을 구현.
- 모든 요청에 대해 실행
- `middleware.js` - `function middleware()`
