import styled from "styled-components";

export const CoffeeContainer = styled.div` 
    position: relative;
    border-radius: 0.6rem 3.6rem;
    background: ${props => props.theme['base-card']};
    display: flex;
    max-width: 25.6rem;
    min-height: 100%;
    flex-direction: column;
    padding: 9.6rem 2.4rem 2rem;

    .coffeeImage {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translate(-50%);
    }

    .tagsList {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
     
        .tag {
            background: ${props => props.theme['yellow-light']};
            color: ${props => props.theme['yellow-dark']};
            font-size: 1rem;
            font-weight: 700;
            padding: 0.4rem 0.8rem;
            width: fit-content;
            border-radius: 2rem;
            text-transform: uppercase;
        }
    }

    .coffeeName {
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 0.8rem;
    }

    .description {
        color: ${props => props.theme['base-label']};
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 3.3rem;
    }
    
    .buy {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: ${props => props.theme['base-text']};
            font-size: 1.4rem;
            
            span {
                font-family: "Baloo 2", sans-serif;
                font-size: 2.4rem;
                font-weight: 800;
            }
        }

        .addToCart {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;

            .amountCoffee {
                height: 3.8rem;
            }

            .cart {
                background: ${props => props.theme['purple-dark']};
                color: ${props => props.theme['base-card']};
                border: none;
                border-radius: 0.6rem;
                cursor: pointer;
                padding: 0.8rem;
                height: 3.8rem;
                display: flex;
                align-items: center;
                justify-content: center;
                
                &:active {
                    position: relative;
                    top: 1px;
                }
            }
        }
    }
`