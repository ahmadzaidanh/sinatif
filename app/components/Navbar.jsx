export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sinatif</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
