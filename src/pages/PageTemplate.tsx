import { Link } from "react-router-dom";

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-gray-900">
          SkyElite
        </Link>
        <Link
          to="/"
          className="text-gray-900 hover:text-gray-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-16">
        <h1
          className="text-4xl md:text-5xl font-normal tracking-tighter mb-6"
          style={{ color: "#202A36" }}
        >
          {title}
        </h1>
        <div className="text-lg text-gray-600 leading-relaxed">
          {children}
        </div>
      </main>
    </div>
  );
}