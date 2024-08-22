// Define the type for each form field
interface AuthCardProps {
  data: { title: string; subtitle: string; image: string };
  children: React.ReactNode;
}

export default function AuthCard({ data, children }: AuthCardProps) {
  return (
    <div className="relative bg-blue-brand/10">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border-2 border-gray-900 bg-white text-gray-900 dark:border-white/20 dark:bg-gray-900 dark:text-white lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-8 text-center sm:px-20 sm:py-24">
            <div className="mb-10">
              <h2 className="text-4xl font-bold">{data.title}</h2>
              <p className="mt-2 opacity-90">{data.subtitle}</p>
            </div>
            {children}
          </div>
          <div className="flex items-center justify-center bg-blue-brand px-6 py-8 text-center sm:px-20 sm:py-24">
            <div className="flex-1 rounded-2xl bg-white/20">
              <img
                src={data.image}
                alt="Sign up illustration"
                width={450}
                height={560}
                className="m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
