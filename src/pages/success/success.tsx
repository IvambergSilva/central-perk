import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { SuccessContainer } from "./success.styles";
import illustration from '../../assets/illustration-delivery.svg'
import { useContext } from "react";
import { CartContext, PaymentType } from "../../context/cart-context";

export function Success() {
    const { checkout } = useContext(CartContext)

    const paymentSelected = (payment: PaymentType | null) => {
        switch (payment) {
            case PaymentType.CREDIT_CARD:
                return "Cartão de Crédito";
            case PaymentType.DEBIT_CARD:
                return "Cartão de Débito";
            case PaymentType.MONEY:
                return "Dinheiro";
            default:
                return "Método de pagamento não selecionado";
        }
    }

    return (
        <SuccessContainer>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
            <section>
                <div className="card">
                    <div>
                        <span className="location">
                            <MapPin weight="fill" size={16} />
                        </span>
                        <div>
                            <p>Entrega em
                                <span>
                                    {checkout.streat}, {checkout.houseNumber}
                                </span></p>
                            <p>{checkout.neighborhood} - {checkout.city}, {checkout.stateCode}</p>
                        </div>
                    </div>
                    <div>
                        <span className="timer">
                            <Timer weight="fill" size={16} />
                        </span>
                        <div>
                            <p>Preisão de entrega</p>
                            <span>20 min - 30 min</span>
                        </div>
                    </div>
                    <div>
                        <span className="paymentSelected">
                            <CurrencyDollar size={16} />
                        </span>
                        <div>
                            <p>Pagamento na entrega</p>
                            <span>{paymentSelected(checkout.paymentSelected)}</span>
                        </div>
                    </div>
                </div>
                <img src={illustration} />
            </section>
        </SuccessContainer>
    )
}
