import FadeInSection from "../components/common/FadeInSection";

const strengths = [
    {
        title: "AI → Service 연결",
        desc: "모델 결과를 단순 출력으로 끝내지 않고 설명, 추천, UI 흐름까지 연결합니다.",
    },
    {
        title: "설명 가능한 AI",
        desc: "Grad-CAM 기반 시각화로 모델 판단 근거를 사용자에게 전달하는 구조를 구현했습니다.",
    },
    {
        title: "추천 시스템 구현",
        desc: "Feature vector와 cosine similarity를 활용한 유사도 추천 경험이 있습니다.",
    },
    {
        title: "운영 안정성 고려",
        desc: "백엔드 구조, 인증, 데이터 정규화, 배포 이슈까지 포함해 서비스 관점으로 설계합니다.",
    },
];

export default function StrengthSection() {
    return (
        <section className="section-block">
            <FadeInSection>
                <div className="section-header">
                    <div className="section-label">Strength</div>
                    <h2>핵심 역량</h2>
                    <p>모델 구현과 서비스 구현 사이를 잇는 개발 역량에 집중하고 있습니다.</p>
                </div>

                <div className="strength-grid">
                    {strengths.map((item, index) => (
                        <div className="strength-card" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
}