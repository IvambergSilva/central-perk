import { Trash } from 'phosphor-react'
import { EmptyCart, SelectedCoffeeContainer, Separator, SummaryCart } from './cart.styles'
import { AmountCoffee } from '../amount-coffee/amount-coffee'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import { formatCurrency } from '../../helps/format-currency'
import { useNavigate } from 'react-router-dom'

interface CartProps {
    isCheckout?: boolean;
    btnDisable?: boolean;
    handleCartModalClose?: () => void;
    getDataToCheckout?: () => void;
}

export function Cart({ isCheckout, handleCartModalClose, getDataToCheckout, btnDisable }: CartProps) {
    const {
        coffeeList,
        updateCoffeeFromCart,
        removeCoffeeFromCart,
        cartValueSummary
    } = useContext(CartContext)

    const handleRemoveCoffeeFromCart = (coffeeId: string) => {
        removeCoffeeFromCart(coffeeId)
    }

    const handleUpdateCoffeeSelected = (amountCoffee: number, coffeeId: string) => {
        updateCoffeeFromCart(amountCoffee, coffeeId)
    }

    const navigate = useNavigate();

    function handleNavigate() {
        handleCartModalClose && handleCartModalClose()
        if (isCheckout) getDataToCheckout && getDataToCheckout()
        else {
            navigate('/checkout')
        }
    }

    return (
        <>
            {coffeeList.length > 0
                ? (
                    <>
                        <div className='coffeeList'>
                            {
                                coffeeList.map((coffee) => (
                                    <div key={coffee.id}>
                                        <SelectedCoffeeContainer>
                                            <div>
                                                <img src={coffee.image} alt={coffee.name} />
                                                <div className='orderDetails'>
                                                    <h3>{coffee.name}</h3>
                                                    <div className='footerDetails'>
                                                        <div className='amountCoffee'>
                                                            <AmountCoffee
                                                                getAmountCoffee={(amount) => handleUpdateCoffeeSelected(amount, coffee.id)}
                                                                value={coffee.amount}
                                                            />
                                                        </div>
                                                        <button onClick={() => handleRemoveCoffeeFromCart(coffee.id)}>
                                                            <span className='iconRemove'>
                                                                <Trash size={16} />
                                                            </span>
                                                            <span className='textRemove'>Remover</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='coffeePrice'>
                                                <p>{formatCurrency(coffee.price * coffee.amount)}</p>
                                            </div>
                                        </SelectedCoffeeContainer>
                                        <Separator />
                                    </div>
                                ))
                            }
                        </div>
                        <SummaryCart>
                            <div>
                                <p>Subtotal</p>
                                <span>{formatCurrency(cartValueSummary.subTotal)}</span>
                            </div>
                            <div>
                                <p>Entrega</p>
                                <span>{formatCurrency(cartValueSummary.deliveryFee)}</span>
                            </div>
                            <div className="totalValue">
                                <p>Total</p>
                                <span>{formatCurrency(cartValueSummary.totalAmount)}</span>
                            </div>
                            <button
                                onClick={() => handleNavigate()}
                                disabled={btnDisable}
                            >
                                {isCheckout ? "Finalizar pedido" : "Fechar pedido"}
                            </button>
                        </SummaryCart >
                    </>
                )
                : (
                    <EmptyCart>Não há itens no carrinho...</EmptyCart>
                )
            }
        </>
    )
}
