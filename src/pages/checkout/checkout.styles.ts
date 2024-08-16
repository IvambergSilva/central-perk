import styled from "styled-components";

export const CheckoutContainer = styled.div`
    padding: 0 4rem 5rem;
    display: flex;
    justify-content: center;
    gap: 3.2rem;

    aside {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        
        h2 {
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: ${props => props.theme['base-subtitle']};
        }

        section {
            background: ${props => props.theme['base-card']};
            padding: 4rem;
            display: flex;
            flex-direction: column;
            gap: 3.2rem;
            border-radius: 0.6rem;
            
            .header {
                display: flex;
                gap: 0.8rem;
                
                div {
                    gap: 0.2rem;
                    
                    h3 {
                        font-family: 1.6rem;
                        color: ${props => props.theme['base-subtitle']};
                    }
                    
                    p {
                        font-family: 1.4rem;
                        color: ${props => props.theme['base-text']};
                    }
                }
            }

            .payments {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.2rem;
            }

            .inputs {
                display: flex;
                flex-direction: column;
                gap: 1.6rem;

                div {
                    display: flex;
                    gap: 1.2rem;
                }
                
                input[name="zipCode"],
                input[name="neighborhood"], 
                input[name="houseNumber"] {
                    max-width: 33%;
                }
                
                input[name="stateCode"]{
                    width: 25%;
                }

                input[type="number"] {
                    &::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                    }
                }
                
                .addressComplement {
                    background-color: aliceblue;
                    position: relative;
                    width: 100%;
                    
                    span {
                        background: ${props => props.theme['base-input']};
                        position: absolute;
                        right: 1.2rem;
                        top: 50%;
                        transform: translateY(-50%);
                        color: ${props => props.theme['base-label']};
                        font-style: italic;
                        font-size: 1.2rem;
                    }
                }
            }
        }
        
        .cart {
            background: ${props => props.theme['base-card']};
            padding: 4rem;
            border-radius: 0.6rem 4.4rem;
        }
    }
    
    @media screen and (max-width:768px) {
        flex-direction: column;
        
        .payments {
            flex-wrap: wrap;
        }
    }
`

interface PaymentsButtonProps {
    $paymentSelected: boolean;
}

export const PaymentsButton = styled.button<PaymentsButtonProps>`
    display: flex;
    align-items: center;
    background: ${props => props.$paymentSelected ? props.theme['purple-light'] : props.theme['base-button']};
    border: 1px solid ${props => props.$paymentSelected ? props.theme['purple'] : 'transparent'};
    color: ${props => props.theme['base-text']};
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1.6rem;
    border-radius: 0.6rem;
    gap: 1.2rem;
    width: 100%;
    cursor: pointer;

    &:active {
        position: relative;
        top: 1px;
    }

    &:hover {
        background: ${props => props.theme['base-hover']};
        transition: 0.2s;
        border: 1px solid transparent;
    }
`

export const Input = styled.input`
    width: 100%;
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    padding: 1.2rem;
    border-radius: 0.4rem;
    outline: none;
    color: ${props => props.theme['base-text']};
    font-size: 1.4rem;
    
    &::placeholder {
        color: ${props => props.theme['base-label']};
    }

    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};

        &::placeholder {
            color: transparent;
        }
    }
`