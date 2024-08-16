import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        img {
            max-width: 6.4rem;
            margin-right: 2rem;
        }
        
        .orderDetails {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            gap: 0.8rem;
            
            h3 {
                font-size: 1.6rem;
                color: ${props => props.theme['base-subtitle']};
                font-weight: 400;

                @media screen and (max-width:768px) {
                    font-size: 1.4rem;
                }
            }
            
            .footerDetails {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 0.8rem;
                
                .amountCoffee {
                    height: 3.2rem;
                }

                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: ${props => props.theme['base-button']};
                    border: none;
                    border-radius: 0.6rem;
                    color: ${props => props.theme['purple']};
                    padding: 0.8rem;
                    gap: 0.4rem;
                    cursor: pointer;
                    
                    .iconRemove {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                    }
                    
                    .textRemove { 
                        color: ${props => props.theme['base-text']};
                        text-transform: uppercase;
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
    
    .coffeePrice {
        display: flex;
        align-items: baseline;
        
        p {
            font-size: 1.6rem;
            color: ${props => props.theme['base-text']};
            font-weight: 700;
        }
    }

    @media screen and (max-width:768px) {
        .textRemove {
            display: none;
        }
    }
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: ${props => props.theme['base-button']};
    margin: 2rem 0;
`

export const SummaryCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    padding-top: 2rem;
    margin-top: auto;

    div {
        color: ${props => props.theme['base-text']};
        font-size: 1.4rem;
        display: flex;
        justify-content: space-between;
    }

    .totalValue {
        color: ${props => props.theme['base-subtitle']};
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    button {
        text-transform: uppercase;
        background: ${props => props.theme['yellow']};
        color: ${props => props.theme['white']};
        font-weight: 700;
        font-size: 1.4rem;
        border: none;
        border-radius: 0.6rem;
        width: 100%;
        padding: 1.2rem 0.8rem;
        cursor: pointer;

        &:disabled {
            background: ${props => props.theme['yellow']};
            cursor: not-allowed;
            opacity: 0.7;
        }
    }
`

export const EmptyCart = styled.span`
    font-size: 1.6rem;
`;