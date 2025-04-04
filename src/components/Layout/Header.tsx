import styles from "./Layout.module.scss";

export default function Header() {
    return (
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-serif text-amaranto">Pan di20</h1>
          <nav className="space-x-4 text-grafite font-sans text-sm">
            <a href="#recipes" className="hover:text-amaranto">Ricette</a>
            <a href="#storia" className="hover:text-amaranto">Chi siamo</a>
            <a href="#contatti" className="hover:text-amaranto">Contatti</a>
          </nav>
        </div>
      </header>
    );
  }
  