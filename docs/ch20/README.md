# Section 20. Deployment

## Options

### 1. Standard Build

- `next build`
- optimized production bundle 과 server-side 앱을 생성함
- NodeJS 서버 필요
  - 페이지는 pre-rendering 되지만, API 라우트나 server-side page 및 page revalidation 을 위해
- 코드의 변경이 있거나 revalidation 정책 변경 및 page update 필요 시 재배포

### 2. Full Static Build

- `next export`
- 100% static app 으로 구성
- node 서버 불필요
  - API 라우트나 page revalidation 이 미동작
- 코드의 모든 변경은 재배포가 필요

## 배포 단계

1. page metadata 추가, code optimization, 불필요 디펜던시 제거
2. 환경 변수 설정 (접속 정보 등)
3. test build 후 local 배포 테스트
4. 배포

## 파일 사이즈 줄이기

- npm run build 에 나오는 파일 크기는 클라이언트 사이드 파일 크기이므로, 서버사이드에 대해는 무시해도 괜찮음
-
