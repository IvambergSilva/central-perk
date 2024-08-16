import { ChangeEvent, useContext, useState } from "react";
import { CheckoutContainer, Input, PaymentsButton } from "./checkout.styles";
import { Money, CreditCard, Bank, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Cart } from "../../components/cart/cart";
import { CartContext, CheckoutProps, PaymentType } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import { SearchDataByZipCode } from "../../helps/search-data-by-zip-code";

interface dataByZipCodeProps {
    bairro: string;
    logradouro: string;
    localidade: string;
    uf: string;
}

export function Checkout() {
    const { handleCheckout, checkout } = useContext(CartContext)

    const [paymentSelected, setPaymentSelected] = useState<PaymentType | null>(checkout.paymentSelected);

    function handlePaymentSelected(paymentType: PaymentType) {
        setPaymentSelected(paymentType)
    }

    const [zipCode, setZipCode] = useState('')

    async function handleZipCode(event: ChangeEvent<HTMLInputElement>) {
        let key = event.target.value.replace(/[^0-9]/g, '');

        if (key.length > 5) {
            key = key.slice(0, 5) + "-" + key.slice(5)
        }

        setZipCode(key)

        if (key.length === 9) {
            const data = await SearchDataByZipCode(key)
            handleDataByZipCode(data)
        }
    }

    function handleDataByZipCode(data: dataByZipCodeProps) {
        setStreat(data.logradouro)
        setNeighborhood(data.bairro)
        setCity(data.localidade)
        setStateCode(data.uf)
    }

    const [streat, setStreat] = useState('')

    function handleStreat(event: ChangeEvent<HTMLInputElement>) {
        let streat = event.target.value
        setStreat(streat)
    }

    const [houseNumber, setHouseNumber] = useState<string>('')

    function handleHouseNumber(event: ChangeEvent<HTMLInputElement>) {
        let houseNumber = event.target.value
        setHouseNumber(houseNumber)
    }

    const [city, setCity] = useState('')

    function handleCity(event: ChangeEvent<HTMLInputElement>) {
        let city = event.target.value
        setCity(city)
    }

    const [neighborhood, setNeighborhood] = useState('')

    function handleNeighborhood(event: ChangeEvent<HTMLInputElement>) {
        let neighborhood = event.target.value
        setNeighborhood(neighborhood)
    }

    const [stateCode, setStateCode] = useState('')

    function handleStateCode(event: ChangeEvent<HTMLInputElement>) {
        let stateCode = event.target.value
        setStateCode(stateCode)
    }

    const navigate = useNavigate();

    function getDataToCheckout() {
        if (isValidCheckout()) {
            const checkout: CheckoutProps = {
                city, houseNumber, neighborhood, paymentSelected, stateCode, streat, zipCode, completed: true
            }

            navigate("/success")
            handleCheckout(checkout)
        }
    }

    const isValidCheckout = (): boolean => {
        if (paymentSelected !== null) {
            return (
                Object.values(PaymentType).includes(paymentSelected) &&
                streat.trim() !== '' &&
                Number(houseNumber) > 0
                && neighborhood.trim() !== '' &&
                city.trim() !== '' &&
                stateCode.trim() !== ''
            )
        } else {
            return false
        }
    }

    return (
        <CheckoutContainer>
            <aside>
                <h2>Complete seu pedido</h2>
                <section>
                    <div className="header">
                        <MapPinLine size={22} />
                        <div>
                            <h3>Endereço de Entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <div className="inputs">
                        <Input
                            placeholder="CEP"
                            name="zipCode"
                            onChange={handleZipCode}
                            value={zipCode}
                            pattern="\d{5}-?\d{3}"
                            maxLength={9}
                        />
                        <Input
                            placeholder="Rua"
                            value={streat}
                            onChange={handleStreat}
                        />
                        <div>
                            <Input
                                placeholder="Número"
                                name="houseNumber"
                                value={houseNumber}
                                onChange={handleHouseNumber}
                                type="number"
                                min={1}
                            />
                            <div className="addressComplement">
                                <Input
                                    placeholder="Complemento"
                                    name="addressComplement"
                                />
                                <span>Opcional</span>
                            </div>
                        </div>
                        <div>
                            <Input
                                placeholder="Bairro"
                                name="neighborhood"
                                value={neighborhood}
                                onChange={handleNeighborhood}
                            />
                            <Input
                                placeholder="Cidade"
                                value={city}
                                onChange={handleCity}
                            />
                            <Input
                                placeholder="UF"
                                name="stateCode"
                                value={stateCode}
                                onChange={handleStateCode}
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="header">
                        <CurrencyDollar size={22} />
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <div className="payments">
                        <PaymentsButton
                            $paymentSelected={paymentSelected === PaymentType.CREDIT_CARD}
                            onClick={() => handlePaymentSelected(PaymentType.CREDIT_CARD)}
                        >
                            <CreditCard size={16} />
                            Cartão de crédito
                        </PaymentsButton>
                        <PaymentsButton
                            $paymentSelected={paymentSelected === PaymentType.DEBIT_CARD}
                            onClick={() => handlePaymentSelected(PaymentType.DEBIT_CARD)}
                        >
                            <Bank size={16} />
                            Cartão de débito
                        </PaymentsButton>
                        <PaymentsButton
                            $paymentSelected={paymentSelected === PaymentType.MONEY}
                            onClick={() => handlePaymentSelected(PaymentType.MONEY)}
                        >
                            <Money size={16} />
                            Dinheiro
                        </PaymentsButton>
                    </div>
                </section>
            </aside>
            <aside>
                <h2>Cafés selecionados</h2>
                <div className="cart">
                    <Cart
                        isCheckout
                        getDataToCheckout={getDataToCheckout}
                        btnDisable={!isValidCheckout()}
                    />
                </div>
            </aside>
        </CheckoutContainer >
    )
}
