export interface SectionProps {
    className?: string;
    children: React.ReactNode;
}
// make className prop optional in below component
export default function Section({ children, className }: SectionProps) {
    return (
        <section className={`relative ${className || ''}`}>
            <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
                {children}
            </div>
        </section>
    );
}