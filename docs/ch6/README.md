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
- `<button formAction={} />`
  - 버튼의 formAciton 프로퍼티로도 받을 수 있음

## server-only

- `use server` 는 서버 액션이 되어야 하는것을 서버에게 말해주는 정도의 역할임
  - 즉, 코드가 서버에서만 실행된다는 것을 의미하거나 보장하지 않음
- 클라이언트 측에서 절대 실행되어서는 안되는 코드가 있다면, `server-only` package 사용
  - `npm install server-only`
  - `import 'server-only'`

## bind

- 바인드는 보통 함수를 특정 컴포넌트에 바인딩시킬때 사용
- 함수 자체를 미리 생성해두고 호출되는 시점에 함수를 전달해줄 수도 있음
  - 이 점을 활용하여, 함수 레퍼런스를 인자로 넘겼을 때 인자를 넘겨줄 방법으로 사용할 수 있음
  - `action={method.bind(null, 호출될때넘겨줄인자1)}`
  - `function method(인자1) {...}`

## optimistic update

- `useOptimistic(대상, (이전상태, 인자값) => {})`
- 업데이트가 성공일거라 믿을 때 미리 상태를 업데이트하고 백그라운드에서 데이터 업데이트를 수행
  - 즉, 클라이언트가 서버에 응답을 받지 않고도 낙관적으로 요청이 성공적으로 끝났다고 가정함

## 이미지 업로드 테스트

- cloudinary 사용해서 이미지를 업로드하고 URL 을 받아 처리
  - `npm install cloudinary`
  - https://cloudinary.com/
