# Section9. Authentication

- Logging Users In & Out
  - user signup
  - user login
  - protecting routes

## form

- useFormState 로 서버액션을 분리하고 에러를 state 로 반환. 에러 시 노출시킴
- password 는 역을 수행할 수 없는 hash 함수를 적용하고, 로그인 시 해시 비교를 수행

## Authentication

- Steps

  1. User Login
     - verifies credentials
     - create user auth session (sends back cookie with sessionID)
  2. Authorized access
     - request contains session cookie
     - verifies session cookie validity (sends back requested resource or 'not auth')

- Auth libraries
  - `lucia`
    - `npm install lucia @lucia-auth/adapter-sqlite`
  - `NextAuth.js`

## lucia

- user, session 테이블을 설정해주면, 사용자 세션과 세션쿠키를 검증할 수 있도록 도움
- BetterSqlite3 와 결합하는 adapter 를 제공해줌
