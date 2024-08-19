// Define the type for each facility item
interface TypographyProps {
  content: string;
}

export default function TypographyCard({ content }: TypographyProps) {
  return (
    <section className="relative bg-blue-brand/10">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="bg-white px-8 py-12 dark:bg-gray-900">
          <article
            className="prose prose-slate max-w-full text-gray-900 lg:prose-lg dark:text-white dark:prose-headings:text-white dark:prose-lead:text-white"
            data-aos="fade-up"
            data-aos-delay="100"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
}
