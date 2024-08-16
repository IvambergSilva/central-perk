import { CartProps, CheckoutProps, CoffeeOrder } from "../context/cart-context";
import { ActionTypes } from "./action";

export interface Action<Type, Payload> {
    type: Type;
    payload: Payload;
}

export type AddCoffeeToCartPayload = { coffeeDetails: CoffeeOrder }
export type RemoveCoffeeFromCartPayload = { coffeeId: string }
export type UpdateCoffeeFromCartPayload = { amountCoffee: number, coffeeId: string }
export type HandleCheckoutPayload = { checkout: CheckoutProps }

type ActionProps =
    | Action<ActionTypes.ADD_COFFEE_TO_CART, AddCoffeeToCartPayload>
    | Action<ActionTypes.REMOVE_COFFEE_FROM_CART, RemoveCoffeeFromCartPayload>
    | Action<ActionTypes.UPDATE_COFFEE_FROM_CART, UpdateCoffeeFromCartPayload>
    | Action<ActionTypes.HANDLE_CHECKOUT, HandleCheckoutPayload>

export function CartReducer(state: CartProps, action: ActionProps) {
    switch (action.type) {
        case ActionTypes.ADD_COFFEE_TO_CART: {
            const existingCoffee = state.coffeeList.find(coffee => coffee.id === action.payload.coffeeDetails.id)
            let updateCoffeeList: CoffeeOrder[];
            let orderAmount = state.orderAmount;

            if (existingCoffee) {
                updateCoffeeList = state.coffeeList.map((coffee) => {
                    if (coffee.id === action.payload.coffeeDetails.id) {
                        return {
                            ...coffee,
                            amount: coffee.amount + 1
                        }
                    }
                    return coffee
                })
            } else {
                updateCoffeeList = [...state.coffeeList, action.payload.coffeeDetails]
                orderAmount++;
            }

            const cartValueSummary = calculateCartValueSummary(updateCoffeeList)

            return {
                ...state,
                coffeeList: updateCoffeeList,
                cartValueSummary,
                orderAmount
            }
        }

        case ActionTypes.REMOVE_COFFEE_FROM_CART: {
            const updateCoffeeList = state.coffeeList.filter(coffee => coffee.id !== action.payload.coffeeId)

            const cartValueSummary = calculateCartValueSummary(updateCoffeeList)

            let orderAmount = state.orderAmount - 1;

            return {
                ...state,
                coffeeList: updateCoffeeList,
                cartValueSummary,
                orderAmount
            }
        }

        case ActionTypes.UPDATE_COFFEE_FROM_CART: {
            const coffeeExists = state.coffeeList.find(coffee => coffee.id === action.payload.coffeeId)

            let updateCoffeeList: CoffeeOrder[]

            if (coffeeExists) {
                updateCoffeeList = state.coffeeList.map(coffee => {
                    if (coffee.id === action.payload.coffeeId) {
                        return {
                            ...coffee,
                            amount: action.payload.amountCoffee
                        }
                    }
                    return coffee
                })
            } else {
                updateCoffeeList = state.coffeeList
            }

            const cartValueSummary = calculateCartValueSummary(updateCoffeeList)

            return {
                ...state,
                coffeeList: updateCoffeeList,
                cartValueSummary
            }
        }

        case ActionTypes.HANDLE_CHECKOUT: {
            return {
                ...state,
                coffeeList: [],
                orderAmount: 0,
                checkout: action.payload.checkout
            }
        }

        default:
            return state;
    }
}

function calculateCartValueSummary(coffeeList: CoffeeOrder[]) {
    const subTotal = coffeeList.reduce((sum, coffee) => sum + coffee.price * coffee.amount, 0)

    let deliveryFee = subTotal * 0.1
    if (deliveryFee < 5) deliveryFee = 5

    const totalAmount = subTotal + deliveryFee

    const cartValueSummary = {
        subTotal,
        deliveryFee,
        totalAmount
    }

    return cartValueSummary
}