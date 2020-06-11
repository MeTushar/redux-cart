import { CLEAR_CART, REMOVE_ITEM, TOGGLE_ITEM_QUANTITY, UPDATE_PRICE_AND_QUANTITY } from '../constants/constant';

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export function toggleItemQuantity(itemInfo) {
    return {
        type: TOGGLE_ITEM_QUANTITY,
        payload: itemInfo
    }
}

export function updatePriceAndQuantity() {
    return {
        type: UPDATE_PRICE_AND_QUANTITY
    }
}