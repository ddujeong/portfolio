export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <p className="modal-summary">{project.summary}</p>
                </div>

                <div className="modal-meta">
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                </div>

                <div className="modal-tech">
                    {project.tech.map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                </div>

                <div className="modal-section">
                    <h3>주요 구현</h3>
                    <ul>
                        {project.details.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                </div>

                {project.troubleshooting && project.troubleshooting.length > 0 && (
                    <div className="modal-section">
                        <h3>Trouble Shooting</h3>

                        <div className="trouble-list">
                            {project.troubleshooting.map((item, index) => (
                                <div className="trouble-item" key={index}>
                                    <h4>{item.title}</h4>
                                    <p>
                                        <strong>문제</strong> {item.problem}
                                    </p>
                                    <p>
                                        <strong>해결</strong> {item.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="modal-links">
                    <a
                        className="modal-link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub →
                    </a>

                    {project.notion && (
                        <a
                            className="modal-link secondary"
                            href={project.notion}
                            target="_blank"
                            rel="noreferrer"
                        >
                            상세보기(Notion) →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}