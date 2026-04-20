import { profile } from "../../data/profile";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <h1>{profile.name}</h1>
                <h2>{profile.title}</h2>

                <p>{profile.intro}</p>

                <div className="links">
                    <a href={profile.links.github} target="_blank">GitHub</a>
                    <a href={profile.links.notion} target="_blank">Notion</a>
                    <a href={profile.links.email}>Email</a>
                </div>
            </div>
        </aside>
    );
}