# Section16. API routes

- REST API 용 endpoint 를 제공하는 기능
- request 는 **서버사이드** 에서만 처리함

## 정의

- pages/api 이하에 js 파일명 정의
- 해당 경로와 동일하게 endpoint 생성 (/api/{js-file})
- `export default function handler(req, res) { res.status(200).json({ message: 'This works!' }); }`
  - `req.method` 에 따라 HTTP method 를 나눠 정의
  - `req.body`

## 동적 API 라우트

- 마찬가지로 `/api/{path}/[id].js` 형식으로 정의
  - 동적 파라미터 접근: `req.query.id`

## catch-all

- `/api/{path}/[...id].js`
