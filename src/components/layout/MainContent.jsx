import { useState } from "react";
import { featuredProjects, otherProjects } from "../../data/projects";
import ProjectModal from "../project/ProjectModal";

export default function MainContent() {
    const [selectedProject, setSelectedProject] = useState(null);

    const main = featuredProjects[0];
    const subFeatured = featuredProjects.slice(1);

    if (!main) return null;

    const handleKeyOpen = (e, project) => {
        if (e.key === "Enter" || e.key === " ") {
            setSelectedProject(project);
        }
    };

    return (
        <main className="content">
            <section className="section">
                <h3 className="label">Featured</h3>

                <div
                    className="featured"
                    onClick={() => setSelectedProject(main)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyOpen(e, main)}
                >
                    {/* <img src={main.image} alt={`${main.title} 프로젝트 대표 이미지`} /> */}

                    <div className="featured-text">
                        <span className="project-category">{main.category}</span>
                        <h2>{main.title}</h2>
                        <p>{main.summary}</p>

                        <div className="tech">
                            {main.tech.map((t) => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="featured-sub">
                    {subFeatured.map((project) => (
                        <div
                            className="project-item clickable"
                            key={project.title}
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => handleKeyOpen(e, project)}
                        >
                            <span className="project-category">{project.category}</span>
                            <h4>{project.title}</h4>
                            <p>{project.summary}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <h3 className="label">Projects</h3>

                <div className="project-list">
                    {otherProjects.map((project) => (
                        <div
                            className="project-item clickable"
                            key={project.title}
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => handleKeyOpen(e, project)}
                        >
                            <span className="project-category">{project.category}</span>
                            <h4>{project.title}</h4>
                            <p>{project.summary}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </main>
    );
}