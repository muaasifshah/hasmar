export default function NotFoundPage() {
  // return 404 page markup using tailwind css to style
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600">Page Not Found</p>
      </div>
    </div>
  );
}
