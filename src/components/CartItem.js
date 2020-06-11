import React from "react";
import { removeItem, toggleItemQuantity } from '../actions/action';

import { connect } from 'react-redux';

const CartItem = ({ img, title, price, amount, removeItem, toggleItemQuantity }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => {removeItem()}}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => {toggleItemQuantity('inc')}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => {
            if(amount === 1) {
              removeItem()
            } else {
              toggleItemQuantity('dec')
            }
            }
          }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    removeItem: () => {
      dispatch(removeItem({id}))
    },
    toggleItemQuantity: (toggle) => {
      dispatch(toggleItemQuantity({id, amount, toggle}));
    }
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
