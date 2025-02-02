# Section 15. Optimizations

## head

- from `next/head`
- <Head> 태그 내 메타데이터 정의
  - <meta>
  - <title>

## Image

- webp 형식 불러오기, 이미지 사이즈의 최적화

## \_app.js

- 앱 내 공통적인 레이아웃, 메타데이터 등 정의
- 가장 최신의 메타데이터가 override 되는 형식

## \_document.js

- html 파일을 포괄하는 전체 document 를 정의
- ```js
  class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head />
          <body>
            <Main />
            ...
          </body>
        </Html>
      );
    }
  }
  ```
