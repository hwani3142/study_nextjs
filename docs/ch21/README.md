# Section21. User Authentication

## NextAuth

- `npm install next-auth`
- next 에서 인증 절차를 쉽게 하도록 도와주는 라이브러리
  - 서버/클라이언트 사이드에서 인증 여부를 확인할 수 있게 함
  - 인증 후 credential 을 만들어서 쿠키 설정하고, 만료를 갱신할 수 있도록 자동화

### v3->v4 업그레이드

- https://next-auth.js.org/getting-started/upgrade-v4#providers

### 주요

```js
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
```

- useSession := session 에 대한 정보와 상태를 조회할때 사용. 다만 is loading 이 true 로 유지되는 문제가 있어, getSession 과 useState 조합으로 대체하여 사용함
- getSession := 현재 session 정보를 가져옴
- signIn := 로그인할 때 인증 절차를 NextAuth 로 태우기 위해 호출
- signOut := 로그아웃할 때 인증 절차를 NextAuth 로 태우기 위해 호출
- SessionProvider := 컴포넌트를 감싸는 래퍼. 불필요한 session 인증이 일어나지 않도록 함. getServerSideProps 에서 가져온 세션이 있다면 useSession 의 추가적인 세션 유효성 검사를 건너 뜀
- NextAuth, CredentialsProvider := 인증이 통과된 사용자에게 접근을 허용해주며 credential 을 생성하여 부여하기 위해 사용

## 인증 실패 redirect TIP

- 세션 정보를 클라이언트 사이드에서 검사 후 실패 시 리다이렉션하게되면 화면이 깜빡이게 된다
- 이를 막기위해선 getServerSideProps 를 통해 서버사이드에서 처리하여 렌더링 시점에 바로 리다이렉션되도록 유도한다

## \_app.js

- 두번째 인자 pageProps 를 통해 getStaticProps 나 getServerSideProps 를 가져올 수 있음

## API route

- API 를 정의하고 내부에서 getSession 을 통해 인증 여부를 검증하도록 처리
