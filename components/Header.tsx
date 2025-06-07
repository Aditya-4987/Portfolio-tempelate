interface HeaderProps {
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Header({
  onProjectsClick,
  onAboutClick,
  onContactClick,
}: HeaderProps) {
  return (
    <header
      className="card primary-bg flex items-center justify-between px-6 py-8 interactive-card"
      style={{
        width: "1392px",
        height: "101px",
        left: "24px",
        top: "24px",
      }}
    >
      <div className="logo">
        <h1 className="text-2xl font-medium uppercase tracking-wide">
          JULIA HUANG
        </h1>
      </div>

      <nav className="flex gap-8">
        <button
          onClick={onProjectsClick}
          className="nav-link text-base font-light uppercase tracking-wide transition-all duration-300 relative cursor-pointer"
        >
          PROJECTS
        </button>
        <button
          onClick={onAboutClick}
          className="nav-link text-base font-light uppercase tracking-wide transition-all duration-300 relative cursor-pointer"
        >
          ABOUT
        </button>
        <button
          onClick={onContactClick}
          className="nav-link text-base font-light uppercase tracking-wide transition-all duration-300 relative cursor-pointer"
        >
          CONTACT
        </button>
      </nav>
    </header>
  );
}
