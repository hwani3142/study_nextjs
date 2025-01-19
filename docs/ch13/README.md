# Section13. Page pre-rendering & Data fetching

- blending server-side and client-side code

## Page pre-rendering

- pre-rendered ==> HTML 로 미리 생성한 문서로, js 에만 의존하지 않음
- hydrate with react code once loaded
  - Page / App is interactive
  - 한번 load 된 이후 기존 SPA 로 돌아감
- Two forms of pre-rendering
  - static generation
    - generate all during build-time
  - server-side rendering
    - 요청이 오는 시점에서 페이지 생성
- nextjs 는 기본적으로 동적 데이터를 포함하지 않는 한 사전렌더링하도록 설계됨

## Static generation (lecture.267)

- pre-generate a page during build time
- `export async function getStaticProps(context) {}`
  - 어떤 페이지를 사전에 생성할 지 nextjs 에게 알려주는 역할
  - `page 폴더의 component 파일 내부`에 위치
  - 모든 페이지 파일에 추가할 수 있고 export 해야함
  - nextjs 는 가장 먼저 해당 함수를 인식하고, props 를 가져다 사용하는 default 함수를 읽어낸다
  - 클라이언트 사이드에서 실행되지 않음
- context
  - nextjs 에 의해 실행될 때 들고있는 부가적인 정보
  - 구체적인 매개변 값을 구할 수 있음 (동적 세그먼트 등)
  - useRouter 를 이용한 방식은 클라이언트에서 수행되지만, context 로 부터 처리하는건 서버에서 수행됨
- return object 의 부가 옵션
  - `revalidate`
  - data fetch 에 실패할 때
    - `notFound: true`
    - `redirect: { destination: '/no-data' }`
- `export async function getStaticPaths() {}`
  - 어떤 인스턴스를 사전에 생성할 지 nextjs 에게 미리 알려주는 함수
  - 기본 동작으로, 동적페이지는 nextjs 가 미리 생성할 수 없음
  - 즉, [pid] 에 어떤값이 할당될 지 모름. 사전 렌더링되도록 nextjs 에게 요청해야함
  - 빌드 시 static page 로서 html (+json) 파일을 미리 생성함. 그리고 최초 접속 시 미리 fetch 되어, 실제 필요 시점엔 바로 사용하게끔 구조화
  - `fallback`
    - 미리 모든 페이지를 사전 렌더링하면 리소스 낭비
    - 일부 페이지만 사전 렌더링
    - true 로 설정하면,
      - paths 에 잡지 않더라도 렌더링 할 수 있음. 다만 요청이 오는 순간 생성. default function 이 fallback 을 처리할 수 있게끔 수정해줘야 함
      - paths 에 잡은 자주 방문하는 페이지는 사전 렌더링
    - 'blocking' 설정
      - 서버에서 완전히 사전 생성하도록 nextjs 가 자동으로 기다림

## ISR (Incremental Static Generation)

- 자주 바뀌는 데이터를 매번 빌드하고 배포할 순 없음
  1. 페이지를 사전 빌드하지만 서버에서 업데이트된 데이터페칭을 위한 부분은 useEffect 와 같은 형태로 새로 fetching (background)
  2. 페이지를 빌드할때만 정적으로 생성하는게 아니라 배포 후에 재배포 없이 계속 업데이트
- 오래되지않으면 기존걸 서빙, 그게 아니면 신규 페이지 렌더링 후 서빙
- `revalidate` in getStaticProps object

## Server-Side Rendering

- getStaticProps 와 getStaticPaths 는 실제 유입되는 요청에 접근할 방법이 없음
- server-side code 를 실행할 수 있도록 nextjs 가 지원함. server-only code
- 페이지를 사전에 생성해내는 개념이 아니라, 서버 측에서만 일부를 사전 렌더링하는 개념
- `export async function getServerSideProps() {}`
  - getStaticProps 와 동일한 형태의 object 로 리턴함
  - 다만 revalidate 는 유효하지 않음. 전부 유효성 검사를 수행하기 때문에 재검사가 의미 없음
  - **context 로 `req` 와 `res` 객체에 접근할 수 있음**
  - getStaticPaths 를 붙여주지 않아도 됨. 코드 서버에서만 작동하므로 페이지를 사전 생성할 필요가 없기 때문

## Client-side Data fetching

- pre-render 가 필요 없는 케이스
  - 갱신 주기가 잦은 케이스에선 매번 서버에서 렌더링할 수 없음. 이게 오히려 비효율적
  - 사용자 특성화 데이터. ex) 온라인 쇼핑몰
  - partial data. 모든 데이터를 한 번에 다 가져올 필요가 없는 경우

## SWR

- https://swr.vercel.app/ko
- react hooks library for data fetching

## pre-fetch 와 client-side fetch 결합

- 사용자 경험을 향상시키기 위해, getStaticProps 을 통해 1차적으로 사전 렌더링한 값을 갖도록 함
- 그 값을 useState 의 초기값으로 설정함
- 이후 추가적인 변화는 client-side fetch 를 통해 업데이트 될 수 있도록 함
- 페이지 소스에는 사전 렌더링한 값만을 포함함
