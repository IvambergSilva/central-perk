import { ReactNode, useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { Navigate } from "react-router-dom"

interface ProtectedRouterProps {
    children: ReactNode
}
export function ProtectedRouter({ children }: ProtectedRouterProps) {
    const { coffeeList, checkout } = useContext(CartContext)

    if (coffeeList.length > 0 || checkout.completed) {
        return children
    } else {
        return <Navigate to="/" />
    }
}
