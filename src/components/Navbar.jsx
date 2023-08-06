const Navbar = ({ onToggleTheme }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <h1>
            Weather <span>App</span>
          </h1>
        </div>

        <button onClick={onToggleTheme} className="btn">
          toggle
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
