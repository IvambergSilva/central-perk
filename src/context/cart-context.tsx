import { createContext, ReactNode, useReducer } from "react";
import { addCoffeeToCartAction, handleCheckoutAction, removeCoffeeFromCartAction, updateCoffeeFromCartAction } from "../reducers/action";
import { CartReducer } from "../reducers/cartReducer";

interface CartContextProps {
    coffeeList: CoffeeOrder[];
    orderAmount: number
    cartValueSummary: CartValueSummaryProps;
    checkout: CheckoutProps;
    addCoffeeToCart: (coffeeDetails: CoffeeOrder) => void;
    removeCoffeeFromCart: (coffeeId: string) => void;
    updateCoffeeFromCart: (amountCoffee: number, coffeeId: string) => void;
    handleCheckout: (checkout: CheckoutProps) => void;
}

export interface CoffeeOrder {
    id: string;
    name: string;
    price: number;
    amount: number;
    image: string
}

export interface CartValueSummaryProps {
    subTotal: number;
    deliveryFee: number;
    totalAmount: number;
}

export enum PaymentType {
    CREDIT_CARD = "CREDIT_CARD",
    DEBIT_CARD = "DEBIT_CARD",
    MONEY = "MONEY",
}

export interface CheckoutProps {
    paymentSelected: PaymentType | null;
    streat: string;
    houseNumber: number | string;
    stateCode: string;
    city: string;
    neighborhood: string;
    zipCode: string;
    completed: boolean;
}

export interface CartProps {
    coffeeList: CoffeeOrder[];
    cartValueSummary: CartValueSummaryProps;
    orderAmount: number;
    checkout: CheckoutProps;
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, dispatch] = useReducer(CartReducer, {
        coffeeList: [],
        cartValueSummary: {
            subTotal: 0,
            deliveryFee: 0,
            totalAmount: 0
        },
        orderAmount: 0,
        checkout: {
            paymentSelected: null,
            streat: '',
            houseNumber: '',
            stateCode: '',
            city: '',
            neighborhood: '',
            zipCode: '',
            completed: false
        }
    })

    function addCoffeeToCart(coffeeDetails: CoffeeOrder) {
        dispatch(addCoffeeToCartAction(coffeeDetails))
    }

    function removeCoffeeFromCart(coffeeId: string) {
        dispatch(removeCoffeeFromCartAction(coffeeId))
    }

    function updateCoffeeFromCart(amountCoffee: number, coffeeId: string) {
        dispatch(updateCoffeeFromCartAction(amountCoffee, coffeeId))
    }

    function handleCheckout(checkout: CheckoutProps) {
        dispatch(handleCheckoutAction(checkout))
    }

    const { cartValueSummary, coffeeList, orderAmount, checkout }: CartProps = cart

    return (
        <CartContext.Provider value={{
            orderAmount,
            coffeeList,
            checkout,
            cartValueSummary,
            addCoffeeToCart,
            removeCoffeeFromCart,
            updateCoffeeFromCart,
            handleCheckout,
        }}>
            {children}
        </CartContext.Provider>
    )
}