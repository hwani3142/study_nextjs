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
- 커스텀 데이터 소스
  - **(주의) 외부 API 가 아닌, 사용자 정의 데이터소스를 사용할 땐 중복 요청을 제거하는 기능은 없음**
    - `import { cache } from "react";` 자체적인 react cache 기능으로 반환 데이터를 캐싱할 수 있음. (단일 요청 주기 이내)
      - `export const data = cache(funciton aa() {});`

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
- 커스텀 데이터 소스
  - `import { unstable_cache } from "next/cache";`
    - 인자1: 감쌀 함수
    - 인자2: 캐시 이름
    - 인자3: tag 및 기타 캐시 설정
  - nextJs 방식의 cache. return Promise
  - 무효화: `revalidatePath("");`, `revalidateTag("")`

## Full Route cache

- 빌드 시점에서 미리 렌더링 할 수 있는 페이지를 렌더링.
- 그래서 빌드 후 프로덕션 모드일 때 대부분 캐싱되어 다시 렌더링되거나 업데이트되지 않는 문제가 발생할 수 있음

1. `dynamic=force-dynamic` 설정으로 해결 -> 빌드 시 static 페이지가 아닌 dynamic 페이지로 해당 페이지가 표기가 됨

- `○  (Static)   prerendered as static content`
- `λ  (Dynamic)  server-rendered on demand using Node.js`

2. `revalidatePath();`

## revalidatePath

- revalidatePath 는 필요할 때 특정 부분을 재검증. 그 전 방식들은 시간 제한 방식이니, revalidate 로 좀 더 효율적으로 관리할 수 있음
  - 별도 명시가 업으면 중첩된 경로는 재검증하지 않을 수 있음을 주의. 두번째 인자 `layout` 설정으로, 중첩까지 재검증

## revalidateTag

- fetch 로 부터 데이터를 가져올 때 태그를 설정하고, 이를 revalidateTag 인자로 설정. 해당 tag 가 설정되어있으면 캐시를 폐기하고 재검증
- `next: {tags: ['msg']}`
