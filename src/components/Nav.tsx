import "./Nav.css";
function Nav() {
  return (
    <nav className="nav-con">
      <div className="nav-wrapper">
        <h1 className="logo">Logo</h1>
        <ul className="list">
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">SKILLS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <button className="btn-contact">Get in Touch</button>
      </div>
    </nav>
  );
}

export default Nav;
