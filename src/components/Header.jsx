function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">A</div>

        <div>
          <h1>Adaptive Ads</h1>
          <span>Layout Engine</span>
        </div>
      </div>

      <div className="header-status">
        <span className="status-dot"></span>
        Engine Active
      </div>
    </header>
  );
}

export default Header;