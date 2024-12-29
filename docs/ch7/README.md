# Secion7. Caching

- Understanding NextJS Caching

## aggressive caching

- https://nextjs.org/docs/app/building-your-application/caching
- Request Memoization : 중복 데이터 요청으로부터 데이터 fetch 를 중복제외시키기 위함
- Data Cache: 데이터가 변경되지 않는 한 요청 자체를 피하는 방식
- Full Route Cache: HTML, RSC 렌더링을 저장. 다시 렌더링되지 않도록.
- Router Cache: 유일한 클라이언트사이드 캐시. 브라우저 메모리에 RSC 를 저장

## Request Memoization

- 구성이 정확하게 일치하는 요청일 경우 fetch 요청이 불필요한 요청을 없애기 위해 중복을 제거하고 결과를 재사용함
- `React extends the fetch API to automatically memoize requests that have the same URL and options. This means you can call a fetch function for the same data in multiple places in a React component tree while only executing it once.`

## Data Cache

- 백엔드에서 데이터를 가져오는 fetch 함수를 사용할 때 응답 데이터를 내부적으로 관리하는, 서버측에 캐시를 저장하고 계속해서 재사용
- -> 더이상 재사용하지말라고 할 때까지
  - `revalidatePath();`
- fetch function
  - fetch cache
    - `force-cache`: default value
    - `no-store`
  - `next: {revalidate: N}`
    - N seconds 동안 요청을 다시보내지 않고 캐시된 데이터를 사용
- `export const revalidate = 5;`
  - 예약어 전역 변수
  - 범위: 파일 전체
- `export const dynamic = "force-dynamic";`
  - 파일 전체 내에서 no-store 와 같은 역할
- `import { unstable_noStore } from "next/cache";`
  - force-dynamic 보다 권장되는 방식
