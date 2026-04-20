import { profile } from "../data/profile";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-bg" />
            <div className="hero-inner">
                <span className="eyebrow">AI Backend Developer</span>

                <h1>
                    AI를 <span className="hero-highlight">서비스로</span>
                    <br />
                    연결하는 개발자
                </h1>

                <p>{profile.intro}</p>

                <div className="hero-buttons">
                    <a className="btn btn-primary" href="#featured-projects">
                        프로젝트 보기
                    </a>
                    <a
                        className="btn btn-secondary"
                        href={profile.links.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}