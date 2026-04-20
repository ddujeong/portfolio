import { useState } from "react";
import { featuredProjects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";
import ProjectModal from "../components/project/ProjectModal";
import FadeInSection from "../components/common/FadeInSection";

export default function FeaturedProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    const main = featuredProjects[0];     // Dog-nostic
    const subs = featuredProjects.slice(1);

    return (
        <section id="featured-projects" className="section-block">
            <FadeInSection>
                <div className="section-header">
                    <div className="section-label">Featured</div>
                    <h2>AI Projects</h2>
                    <p>모델의 예측 결과를 설명 가능성과 서비스 기능으로 확장한 프로젝트들입니다.</p>
                </div>

                <div className="grid">

                    {/* 🔥 메인 카드 */}
                    <ProjectCard
                        {...main}
                        onClick={() => setSelectedProject(main)}
                        variant="main"
                    />

                    {/* 🔹 나머지 카드 */}
                    {subs.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            onClick={() => setSelectedProject(project)}
                            variant="sub"
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