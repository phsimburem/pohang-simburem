# 포항 청년 잔심부름 센터 — 배포 가이드

## 1. GitHub에 코드 올리기

```powershell
cd C:\Users\user\pohang-simburem
git init
git add .
git commit -m "Initial commit: 포항 청년 잔심부름 센터"
```

1. https://github.com/new 에서 새 저장소 생성 (이름 예: `pohang-simburem`)
2. **Private** 권장 (환경변수 예시 파일만 포함, 실제 비밀키는 제외됨)
3. 아래 명령 실행 (본인 GitHub 아이디로 변경):

```powershell
git remote add origin https://github.com/본인아이디/pohang-simburem.git
git branch -M main
git push -u origin main
```

---

## 2. Railway 배포

1. https://railway.app 가입 (GitHub 연동)
2. **New Project** → **Deploy from GitHub repo** → `pohang-simburem` 선택
3. **Add Plugin** → **PostgreSQL** 추가
4. 웹 서비스 **Variables** 탭에 아래 환경변수 입력:

| 변수 | 값 |
|------|-----|
| `DATABASE_URL` | PostgreSQL 플러그인의 `DATABASE_URL` 참조 `${{Postgres.DATABASE_URL}}` |
| `TELEGRAM_BOT_TOKEN` | 텔레그램 봇 토큰 |
| `TELEGRAM_CHAT_ID` | 텔레그램 채팅 ID |
| `ADMIN_PASSWORD` | 관리자 페이지 비밀번호 |
| `ADMIN_SESSION_SECRET` | 랜덤 긴 문자열 |
| `NEXT_PUBLIC_SITE_URL` | 배포 URL (도메인 연결 전: `https://xxx.up.railway.app`) |

5. **Settings** → **Networking** → **Generate Domain** 으로 임시 URL 발급
6. 배포 완료 후 `https://발급된주소/admin` 에서 관리자 로그인 확인

---

## 3. 도메인 구매 (추천)

### 국내 사업용 (.kr)
- **가비아** https://www.gabia.com
- 추천 도메인 예시:
  - `포항잔심부름.kr`
  - `pohangjansim.kr`
  - `pohang-simburem.kr`

### 해외 (.com)
- **Cloudflare Registrar** https://www.cloudflare.com/products/registrar/
- `pohangjansim.com` 등

> `.kr` 도메인은 사업자등록증 또는 개인 인증이 필요할 수 있습니다.

---

## 4. 도메인 → Railway 연결

### A. Railway에서
1. 웹 서비스 → **Settings** → **Networking** → **Custom Domain**
2. 구매한 도메인 입력 (예: `pohangjansim.kr`)
3. Railway가 안내하는 **CNAME** 값 복사

### B. 도메인 업체(가비아 등) DNS 설정
| 타입 | 호스트 | 값 |
|------|--------|-----|
| CNAME | `www` | Railway가 준 주소 |
| A 또는 CNAME | `@` (루트) | Railway 안내에 따름 |

### C. 환경변수 업데이트
Railway Variables에서:
```
NEXT_PUBLIC_SITE_URL=https://pohangjansim.kr
```
변경 후 **Redeploy**

---

## 5. 배포 후 확인 체크리스트

- [ ] 메인 페이지 정상 표시
- [ ] 심부름 문의 폼 제출 → DB 저장
- [ ] 텔레그램 알림 수신
- [ ] `/admin` 관리자 로그인
- [ ] 도메인 HTTPS 적용 (Railway 자동)

---

## 로컬 개발 참고

배포용 DB는 PostgreSQL입니다. 로컬에서도 개발하려면:
- Railway PostgreSQL의 `DATABASE_URL`을 `.env.local`에 넣거나
- Neon(https://neon.tech) 무료 PostgreSQL 사용

`.env.local`의 `DATABASE_URL`을 PostgreSQL 주소로 바꾼 뒤:
```powershell
npx prisma db push
npm run dev
```
