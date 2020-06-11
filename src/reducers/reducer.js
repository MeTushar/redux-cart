import { CLEAR_CART, REMOVE_ITEM, TOGGLE_ITEM_QUANTITY, UPDATE_PRICE_AND_QUANTITY } from '../constants/constant';// items
import cartItems from "../cart-items";

const initialState = {
    cart: cartItems,
    amount: 0,
    total: 0
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case CLEAR_CART:
            return {...state, cart: []};
        case REMOVE_ITEM:   
            return {
                ...state,
                cart: state.cart.filter(cartItem => {
                    return cartItem.id !== action.payload.id
                })
            }
        case TOGGLE_ITEM_QUANTITY:
            let newItems = [];
            if (action.payload.toggle === 'inc') {
                newItems = state.cart.map(cartItem => {
                    if(cartItem.id === action.payload.id) {
                        cartItem.amount = cartItem.amount + 1;
                    }
                    return cartItem;
                })
            } else {
                newItems = state.cart.map(cartItem => {
                    if(cartItem.id === action.payload.id) {
                        cartItem.amount = cartItem.amount - 1;
                    }
                    return cartItem;
                })
            }
            return {
                ...state,
                cart: newItems
            }
        case UPDATE_PRICE_AND_QUANTITY:
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                cartTotal.amount += amount;
                cartTotal.total += price*amount;
                return cartTotal;
            },
            {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2));
            return {
                ...state,
                total,
                amount
            }
        default:
            return state;
    }
}

export default reducer;