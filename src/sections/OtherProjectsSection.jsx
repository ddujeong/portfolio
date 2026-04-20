import { useState } from "react";
import { otherProjects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";
import ProjectModal from "../components/project/ProjectModal";
import FadeInSection from "../components/common/FadeInSection";

export default function OtherProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="section-block">
            <FadeInSection>
                <div className="section-header">
                    <div className="section-label">Projects</div>
                    <h2>Service / Backend Projects</h2>
                    <p>실제 사용자 흐름, 인증, 데이터 구조, 운영 환경을 고려한 서비스 프로젝트입니다.</p>
                </div>

                <div className="grid">
                    {otherProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </FadeInSection>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}