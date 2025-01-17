export interface SectionProps {
    className?: string;
}

export default function Section({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={`relative ${className}`}>
            <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
                {children}
            </div>
        </section>
    );
}