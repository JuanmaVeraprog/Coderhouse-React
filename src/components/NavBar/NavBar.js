import CardWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <p>UNETE A NOSOTROS</p>
      <h1>NIKE STORE</h1>
      <nav>
        <ul className="navList">
          <a href="#News">
            <li>New & Featured</li>
          </a>
          <a href="#Men">
            <li>Men</li>
          </a>
          <a href="#Women">
            <li>Women</li>
          </a>
          <a href="#Kids">
            <li>Kids</li>
          </a>
          <a href="#Shoes">
            <li>Shoes</li>
          </a>
          <a href="#Clothing">
            <li>Clothing</li>
          </a>
          <a href="#Accessories">
            <li>Accessories</li>
          </a>
          <a href="#Sale">
            <li>Sale</li>
          </a>
        </ul>
      </nav>
      <CardWidget/>
    </header>
  );
};

export default NavBar;
