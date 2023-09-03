import "../global.css";
// import "bootswatch/dist/cosmo/bootstrap.min.css";

function RootLayout({ children }) {
  return (
    <html>
      <body className="dark:bg-zinc-900">{children}</body>
    </html>
  );
}

export default RootLayout;
