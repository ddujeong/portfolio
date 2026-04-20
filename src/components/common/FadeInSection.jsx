import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, className = "" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const target = ref.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`fade-section ${visible ? "show" : ""} ${className}`}
        >
            {children}
        </div>
    );
}