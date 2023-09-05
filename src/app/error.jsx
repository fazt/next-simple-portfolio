"use client"; // Error components must be Client Components

function ErrorPage() {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-12rem)] flex-col dark:text-white">
      <h1 className="text-7xl font-bold">Error</h1>
      <p>Something went wrong. Please try again later</p>
    </section>
  );
}
export default ErrorPage;
