import "./CartWidget.css";
import shoppingBagLogo from '../../img/shopping-bag.png';



const CardWidget = () => {
  return (
    <nav>
      <ul>
        <a href="#CART">
          <li>
            <img src={shoppingBagLogo} alt="Shopping Bag Logo" className="shoppingBagLogo"/>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default CardWidget;
