import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import { HeaderContainer } from "./header.styles";
import { CartModal } from "../modal/cart-modal";
import { NavLink } from "react-router-dom";
import logo from "../../assets/central-perk-logo.png"

export function Header() {
    const { orderAmount } = useContext(CartContext)

    const [isCartOpen, setIsCartOpen] = useState(false)

    const handleCartModal = () => {
        setIsCartOpen(state => !state)
        if(isCartOpen){
            document.body.style.overflow = ''
            
        } else {
            document.body.style.overflow = 'hidden'
        }
    }

    return (
        <HeaderContainer>
            <section>
                <NavLink to="/">
                    <img src={logo} alt="Central Perk" />
                </NavLink>
                <div className="actions">
                    <div className="location">
                        <MapPin size={22} weight="fill" />
                        João Pessoa, PB
                    </div>
                    <button
                        onClick={handleCartModal}
                        className="cartButton"
                    >
                        {orderAmount > 0 && (
                            <span className="orderAmount">{orderAmount}</span>
                        )}
                        <span className="cartIcon">
                            <ShoppingCart size={22} weight="fill" />
                        </span>
                    </button>
                </div>
                <CartModal
                    isCartOpen={isCartOpen}
                    handleCartModal={handleCartModal}
                />
            </section>
        </HeaderContainer >
    )
}
