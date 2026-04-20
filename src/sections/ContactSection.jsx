import { profile } from "../data/profile";
import FadeInSection from "../components/common/FadeInSection";

export default function ContactSection() {
    return (
        <section id="contact" className="section-block">
            <FadeInSection>
                <div className="contact-box">
                    <div className="section-label">Contact</div>
                    <h2>Links</h2>
                    <p>
                        프로젝트 상세 내용은 GitHub와 Notion에서 확인할 수 있습니다.
                        협업이나 포지션 제안 관련 연락도 가능합니다.
                    </p>

                    <div className="contact-links">
                        <a
                            className="btn btn-primary"
                            href={profile.links.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            className="btn btn-secondary"
                            href={profile.links.notion}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Notion
                        </a>
                        <a className="btn btn-secondary" href={profile.links.email}>
                            Email
                        </a>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
}