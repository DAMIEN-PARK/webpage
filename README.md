# 프랙탈처럼 자라는 나의 데이터 여정

데이터를 사랑하는 개발자의 프랙탈 성장 스토리를 담은 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저에서 확인
```
http://localhost:3000
```

## 🏗️ 프로젝트 구조

```
webpage/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/
│   ├── FractalCard.tsx      # 프랙탈 카드 컴포넌트
│   └── CodeBlock.tsx        # 코드 블록 컴포넌트
├── public/
│   ├── images/              # 이미지 파일들
│   └── videos/              # 비디오 파일들
├── package.json
├── tailwind.config.js       # Tailwind 설정
├── postcss.config.js        # PostCSS 설정
└── next.config.js           # Next.js 설정
```

## 🎨 주요 기능

### 1. 데이터 분석 프로세스
- 5단계의 데이터 분석 과정을 통한 자기소개
- 각 단계별 상세한 설명과 아이콘
- 스크롤 애니메이션 효과

### 2. 미디어 지원
- 각 단계별 이미지/비디오 첨부 가능
- 반응형 미디어 레이아웃
- 캡션 및 설명 텍스트 지원

### 3. API & 코드 예시
- 법제처 OpenAPI 연동 샘플 코드
- n8n 자동화 워크플로우 구조
- 코드 복사 기능

### 4. 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- 다크/라이트 모드 지원
- 부드러운 애니메이션

### 5. 포트폴리오 & 연락처
- GitHub, Notion 링크
- 이메일 연락 기능
- 소셜 미디어 연결

## 🎯 주요 섹션

1. **Intro**: 데이터 분석 5단계 소개
2. **데이터 분석 프로세스**: 각 단계별 개인 스토리
3. **프로세스 개요**: 체계적인 정리
4. **기술적 구현**: API 및 코드 예시
5. **핵심 인사이트**: 데이터 분석을 통해 발견한 가치
6. **Contact & Portfolio**: 연락처 및 포트폴리오

## 📸 미디어 추가 방법

### 이미지 추가
1. `public/images/` 폴더에 이미지 파일 업로드
2. `app/page.tsx`의 해당 단계에서 주석 해제
3. 이미지 경로와 설명 수정

```javascript
media: {
  type: 'image',
  src: '/images/your-image.jpg',
  alt: '이미지 설명',
  caption: '이미지 캡션'
}
```

### 비디오 추가
1. `public/videos/` 폴더에 비디오 파일 업로드
2. `app/page.tsx`의 해당 단계에서 주석 해제
3. 비디오 경로와 설명 수정

```javascript
media: {
  type: 'video',
  src: '/videos/your-video.mp4',
  caption: '비디오 캡션'
}
```

### 지원하는 파일 형식
- **이미지**: JPG, PNG, WebP, SVG
- **비디오**: MP4, WebM, OGV

## 🔧 커스터마이징

### 색상 테마 변경
`tailwind.config.js`에서 fractal, data 색상 팔레트를 수정할 수 있습니다.

### 콘텐츠 수정
`app/page.tsx`의 `dataAnalysisStages` 배열을 수정하여 개인 스토리를 변경할 수 있습니다.

### 애니메이션 조정
Framer Motion의 transition 값을 조정하여 애니메이션 속도를 변경할 수 있습니다.

### 미디어 레이아웃 조정
`components/FractalCard.tsx`에서 미디어 영역의 크기와 스타일을 조정할 수 있습니다.

## 📱 반응형 지원

- **모바일**: 320px 이상
- **태블릿**: 768px 이상  
- **데스크톱**: 1024px 이상

## 🌟 특징

- **접근성**: 시맨틱 HTML과 ARIA 라벨 지원
- **성능**: Next.js 최적화 및 이미지 최적화
- **SEO**: 메타데이터 및 Open Graph 태그
- **사용자 경험**: 부드러운 스크롤 및 애니메이션
- **미디어 지원**: 이미지 및 비디오 통합

## 📄 라이선스

MIT License

---

**데이터의 힘으로 더 나은 세상을 만들어갑니다.** 🚀 