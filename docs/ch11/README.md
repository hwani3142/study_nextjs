# Sesion11. Page & File based Routing

- Understanding File-based Routing
- Static & Dynamic Routes
- Navigating Between Pages

## file-based routing

- `/pages` 이하에 파일 형태로 라우팅
  - `index.js` = `/`
  - `about.js` = `/about`
- dynamic path -> `[slug].js`
  - `useRouter().query` 를 통해 dynamic path 값 추출
- Nested dynamic path
  - `[]/[].js`
  - router.query 를 찍어보면 중첩된 경로에 해당하는 동적 라우트 값이 모두 포함되어 있음
- Catch-All routes
  - 하위에 해당하는 모든 라우팅을 커버하는 방식
  - 얼마나 많은 세그먼트가 있냐는 안 중요함. 다 커버할꺼니까
  - `[...slug].js`
  - 배열 형태로 동적인 값들을 모두 캐치함
- 404 페이지
  - `404.js`
