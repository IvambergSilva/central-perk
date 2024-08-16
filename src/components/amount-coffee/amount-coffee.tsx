import { useEffect, useState } from "react"
import { AmountCoffeeContainer } from "./amount-coffee.styles"
import { Minus, Plus } from "phosphor-react"

interface AmountCoffeeProps {
    value?: number;
    getAmountCoffee: (amountCoffee: number) => void;
}

export function AmountCoffee({ getAmountCoffee, value = 1 }: AmountCoffeeProps) {
    const [amountCoffee, setAmountCoffee] = useState(value)

    useEffect(() => {
        setAmountCoffee(value)
    }, [value])

    const handleDecreaseAmountCoffee = () => {
        if (amountCoffee > 1) {
            setAmountCoffee(state => {
                const newAmount = state - 1
                getAmountCoffee(newAmount)
                return newAmount
            })
        }
    }

    const handleIncreaseAmountCoffee = () => {
        setAmountCoffee(state => {
            const newAmount = state + 1
            getAmountCoffee(newAmount)
            return newAmount
        })
    }

    return (
        <AmountCoffeeContainer>
            <button onClick={handleDecreaseAmountCoffee}>
                <Minus size={14} />
            </button>
            <span>{amountCoffee}</span>
            <button onClick={handleIncreaseAmountCoffee}>
                <Plus size={14} />
            </button>
        </AmountCoffeeContainer>
    )
}
