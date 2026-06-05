# 포항 청년 잔심부름 센터

포항 지역 잔심부름 신청 웹사이트입니다.

## 기능

- 홈페이지 (소개, 서비스, 요금, FAQ, 신청)
- 신청 폼 → DB 저장 → 텔레그램 알림
- 관리자 페이지 (`/admin`)

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000

## 환경변수

`.env.local` 파일 참고 (`.env.example` 복사)

## Railway 배포 + 도메인

자세한 단계별 가이드: **[DEPLOY.md](./DEPLOY.md)**

1. GitHub에 코드 push
2. Railway → New Project → GitHub Repository 연결
3. PostgreSQL 플러그인 추가
4. 환경변수 설정 (`.env.example` 참고)
5. 도메인 구매 후 Railway Custom Domain 연결
