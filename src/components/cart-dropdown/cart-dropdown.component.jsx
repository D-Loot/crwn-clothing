import { useContext } from 'react'; //Added
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context'; //Added

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'; //Added

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext); //Added
  const navigate = useNavigate(); //Added

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };//Added

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}{/*Added*/}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;