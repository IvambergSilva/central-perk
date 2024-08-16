import { CheckoutProps, CoffeeOrder } from "../context/cart-context";
import { Action, AddCoffeeToCartPayload, HandleCheckoutPayload, RemoveCoffeeFromCartPayload, UpdateCoffeeFromCartPayload } from "./cartReducer";

export enum ActionTypes {
    ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
    REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART",
    UPDATE_COFFEE_FROM_CART = "UPDATE_COFFEE_FROM_CART",
    HANDLE_CHECKOUT = "HANDLE_CHECKOUT"
}

export function addCoffeeToCartAction(coffeeDetails: CoffeeOrder): Action<ActionTypes.ADD_COFFEE_TO_CART, AddCoffeeToCartPayload> {
    return {
        type: ActionTypes.ADD_COFFEE_TO_CART,
        payload: {
            coffeeDetails
        }
    }
}

export function removeCoffeeFromCartAction(coffeeId: string): Action<ActionTypes.REMOVE_COFFEE_FROM_CART, RemoveCoffeeFromCartPayload> {
    return {
        type: ActionTypes.REMOVE_COFFEE_FROM_CART,
        payload: {
            coffeeId
        }
    }
}

export function updateCoffeeFromCartAction(amountCoffee: number, coffeeId: string): Action<ActionTypes.UPDATE_COFFEE_FROM_CART, UpdateCoffeeFromCartPayload> {
    return {
        type: ActionTypes.UPDATE_COFFEE_FROM_CART,
        payload: {
            coffeeId,
            amountCoffee
        }
    }
}

export function handleCheckoutAction(checkout: CheckoutProps): Action<ActionTypes.HANDLE_CHECKOUT, HandleCheckoutPayload> {
    return {
        type: ActionTypes.HANDLE_CHECKOUT,
        payload: {
            checkout
        }
    }
}