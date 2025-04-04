import styles from "./Layout.module.scss";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-serif text-amaranto">Pan di20</h1>
        <nav className="space-x-4 text-grafite">
          <a href="#recipes" className="hover:text-amaranto">Ricette</a>
          <a href="#contact" className="hover:text-amaranto">Contatti</a>
        </nav>
      </div>
    </header>
  );
}
