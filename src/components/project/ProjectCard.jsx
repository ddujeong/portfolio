export default function ProjectCard({
    title,
    summary,
    image,
    category = "Project",
    onClick,
    variant = "sub",
}) {
    return (
        <article className={`card card-${variant}`} onClick={onClick}>
            {image && <img className="card-bg" src={image} alt={title} />}

            <div className="card-overlay" />

            <div className="card-content">
                <span className="card-category">{category}</span>
                <h3>{title}</h3>
                <p>{summary}</p>
            </div>
        </article>
    );
}