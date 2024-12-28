# Section6. Data Mutation

- Data Mutation Options
- Working with Server Actions

## Server Action for forms

- React 에 내장되어있는 기능이지만, nextjs 에 의해(단지 옵션 중 하나) 활성화될 수 있는 기능
- `<form action={}>`
  - 기존 action = URL 임
  - react 버전을 사용할 경우 action 으로 함수를 받아들이고, 브라우저가 URL 로 요청하지않고 함수를 작동 시킴
  - react 에만 국한된게 아니라 **표준으로 제공되는 기능**임
  - 함수 안에서 `"use server"` 를 선언 + async function 으로 전환. server action 임을 알림.
- `formData`
  - name attribute 로 전달된 값들을 파라미터로 전달받아 처리 가능함
