export const featuredProjects = [
    {
        title: "Dog-nostic",
        category: "AI Project",
        summary:
            "이미지 기반 견종 분류를 Grad-CAM 설명, 유사도 추천, RAG 챗봇으로 확장한 반려견 AI 서비스",
        tech: [
            "TensorFlow",
            "EfficientNetB0",
            "Grad-CAM",
            "Streamlit",
            "Scikit-learn",
            "SentenceTransformer",
            "Ollama",
        ],
        github: "https://github.com/ddujeong/dog_project_260406",
        notion: "https://hansujeong.notion.site/Dog-nostic-348a6c1b2690800a96e0db61557bf5a9",
        image: "/images/projects/dog.png",
        period: "2026.04",
        role: "개인 프로젝트",
        details: [
            "EfficientNetB0 기반 120종 견종 이미지 분류 모델 구현",
            "Grad-CAM을 활용한 모델 판단 근거 시각화",
            "embedding vector 기반 cosine similarity 유사도 추천",
            "AIHub 데이터 기반 체형 분석 모델 확장",
            "TF-IDF retrieval + semantic reranking 기반 RAG 챗봇 구현",
        ],
        troubleshooting: [
            {
                title: "Grad-CAM 구현 시 모델 구조 문제",
                problem:
                    "Sequential 구조에서는 중간 layer output에 직접 접근하기 어려워 Grad-CAM 적용이 불가능했다.",
                solution:
                    "Functional API 기반으로 모델을 재구성하고 EfficientNet의 top_conv를 기준으로 gradient를 계산하도록 수정했다.",
            },
            {
                title: "유사도 계산 결과 왜곡",
                problem:
                    "특징 벡터 정규화가 일관되지 않아 실제 시각적 유사도와 다른 추천 결과가 발생했다.",
                solution:
                    "사용자 벡터와 비교 대상 벡터 모두 동일하게 정규화한 뒤 cosine similarity를 계산하도록 수정했다.",
            },
        ],
    },

    {
        title: "카페 폐업 예측",
        category: "ML Project",
        summary:
            "공공데이터를 통합 분석해 상권 리스크를 예측하고 시각화한 ML 서비스",
        tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
        github: "https://github.com/ddujeong/survival_project",
        notion: "https://hansujeong.notion.site/348a6c1b269080dd97e0dd445ae14206",
        image: "/images/projects/cafe.png",
        period: "2026.04",
        role: "개인 프로젝트",
        details: [
            "서울시 공공데이터 5종 수집 및 Waterfall 방식 데이터 통합",
            "Pearson 상관계수 기반 변수 선택 및 다중공선성 제거",
            "RandomForestRegressor + GridSearchCV 기반 모델 설계",
            "Streamlit + Folium 기반 위치 시각화",
        ],
        troubleshooting: [
            {
                title: "행정동 데이터 매칭 문제",
                problem:
                    "데이터 소스별 행정동 명칭 불일치로 데이터 손실이 크게 발생했다.",
                solution:
                    "정규표현식 기반 3단계 Waterfall Merge 전략으로 데이터 정합성을 확보했다.",
            },
            {
                title: "데이터 누출 문제",
                problem:
                    "Target과 강하게 연결된 feature가 포함되어 성능이 비정상적으로 높게 측정됐다.",
                solution:
                    "누출 변수를 제거하고 유동인구·밀도 중심으로 feature를 다시 설계했다.",
            },
        ],
    },
];

export const otherProjects = [
    {
        title: "오늘 냉장고",
        category: "Service",
        summary:
            "보유 식재료 기반 레시피 추천과 재료 정규화를 구현한 웹 서비스",
        tech: ["Flask", "Jinja2", "MySQL"],
        github: "https://github.com/ddujeong/todays_refrigerator_260323",
        notion: "https://hansujeong.notion.site/348a6c1b2690805a882fe4062f1c8ecf",
        image: "/images/projects/fridge.png",
        period: "2026.03",
        role: "팀 프로젝트",
        details: [
            "식재료 관리용 RDB 설계 및 데이터 정규화",
            "재료 매칭을 위한 2단계 정규화 로직 구현",
            "Flask 기반 서버 및 세션/CSRF 보안 적용",
            "Jinja2 기반 동적 UI 구현",
        ],
        troubleshooting: [
            {
                title: "재료 명칭 불일치",
                problem:
                    "API와 사용자 입력의 재료명이 달라 추천 정확도가 떨어졌다.",
                solution:
                    "Standard_Ingredient 테이블을 설계하고 표준 ID 기반 매핑 구조를 적용했다.",
            },
            {
                title: "CSRF 인증 오류",
                problem:
                    "배포 환경에서 비동기 요청 시 403 Forbidden이 발생했다.",
                solution:
                    "Flask-WTF를 적용하고 요청마다 CSRF 토큰을 포함하도록 수정했다.",
            },
        ],
    },

    {
        title: "누리대학 학사행정",
        category: "Backend",
        summary:
            "학사행정 시스템을 리팩토링하고 WebRTC 화상상담을 구축한 프로젝트",
        tech: ["Spring Boot", "React", "JWT", "WebRTC"],
        github: "https://github.com/ddujeong/university_backend_20251201",
        notion: "https://hansujeong.notion.site/348a6c1b269080a4b9aec88126eb87f0",
        image: "/images/projects/univ.png",
        period: "2025.12",
        role: "팀 프로젝트",
        details: [
            "Spring Security + JWT 기반 인증/인가 설계",
            "학사 도메인 모델링 및 비즈니스 로직 구현",
            "WebRTC 화상 상담 인프라 구축",
            "프론트 구조 리팩토링",
        ],
        troubleshooting: [
            {
                title: "JPA 순환 참조 문제",
                problem:
                    "양방향 연관관계로 인해 JSON 직렬화 시 무한 루프가 발생했다.",
                solution:
                    "DTO를 분리하고 수동 매핑 방식으로 API 응답 구조를 정리했다.",
            },
            {
                title: "WebRTC 연결 실패",
                problem:
                    "HTTPS 및 NAT 환경에서 피어 연결이 안정적으로 성립하지 않았다.",
                solution:
                    "Caddy TLS와 TURN 서버(Coturn)를 구축해 연결 문제를 해결했다.",
            },
        ],
    },

    {
        title: "MindMate",
        category: "LLM Service",
        summary:
            "프롬프트 제어로 감정 분석 결과의 일관성을 높인 감정 기록 서비스",
        tech: ["Spring Boot", "React", "Gemini API"],
        github: "https://github.com/ddujeong/mind_mate_backend",
        notion: "https://hansujeong.notion.site/MindMate-348a6c1b2690803db025e89ac6bfb444",
        image: "/images/projects/mindmate.png",
        period: "2025.11",
        role: "팀 프로젝트",
        details: [
            "Gemini API 기반 감정 분석 기능 구현",
            "프롬프트 제어 기반 결과 구조 설계",
            "프론트 UI/UX 구현",
        ],
        troubleshooting: [
            {
                title: "감정 분석 결과 불안정",
                problem:
                    "LLM 출력 형식과 감정 해석 기준이 일관되지 않아 사용자 신뢰도가 떨어졌다.",
                solution:
                    "요약 → 단어 → predefined 감정 단계로 출력을 제한해 결과를 통제했다.",
            },
            {
                title: "인증 흐름 단절",
                problem:
                    "인증 처리와 도메인 기능이 분리되어 사용자 흐름 단위 테스트가 어려웠다.",
                solution:
                    "User 기준으로 인증 흐름과 주요 기능을 연결해 테스트 가능 구조로 정리했다.",
            },
        ],
    },
];