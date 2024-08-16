import { AmountCoffee } from "../amount-coffee/amount-coffee";
import { CoffeeContainer } from "./coffee.styles";
import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from "react";
import { CartContext, CoffeeOrder } from "../../context/cart-context";
import { CoffeeProps } from "../../helps/coffees-list";
import { formatCurrency } from "../../helps/format-currency";

interface CoffeeDetails {
    coffee: CoffeeProps
}[]

export function Coffee({ coffee }: CoffeeDetails) {
    const { addCoffeeToCart } = useContext(CartContext)

    const [amountCoffee, setAmountCoffee] = useState(1)

    const handleAddCoffeeToCart = (coffeeDetails: CoffeeProps) => {
        const newCoffeeOrder: CoffeeOrder = {
            ...coffeeDetails,
            amount: amountCoffee
        }

        addCoffeeToCart(newCoffeeOrder)
    }

    const getAmountCoffee = (amountCoffee: number) => {
        setAmountCoffee(amountCoffee)
    }

    return (
        <CoffeeContainer>
            <div className="coffeeImage">
                <img src={coffee.image} alt={coffee.name} />
            </div>
            <div className="tagsList">
                {coffee.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                ))}
            </div>
            <h2 className="coffeeName">{coffee.name}</h2>
            <p className="description">O tradicional café feito com água quente e grãos moídos</p>
            <div className="buy">
                <p>
                    R$
                    <span> {formatCurrency(coffee.price).slice(2)}</span>
                </p>
                <div className="addToCart">
                    <div className="amountCoffee">
                        <AmountCoffee
                            getAmountCoffee={getAmountCoffee}
                        />
                    </div>
                    <button className="cart" onClick={() => handleAddCoffeeToCart(coffee)}>
                        <ShoppingCartSimple size={22} weight="fill" />
                    </button>
                </div>
            </div>
        </CoffeeContainer>
    )
}
