import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata = {
  title: "Web Dev"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white">
          <Header />
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
