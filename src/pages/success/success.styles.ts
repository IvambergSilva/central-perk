import styled from "styled-components";

export const SuccessContainer = styled.div`
    padding: 0 16rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
        color: ${props => props.theme['yellow-dark']};
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: 3.2rem;
    }

    p {
        color: ${props => props.theme['base-subtitle']};
        font-size: 2rem;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem 10rem;
        width: 100%;
    }
    
    .card {
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
        gap: 3.2rem;
        border: 2px solid transparent;
        border-image: linear-gradient(45deg, #DBAC2C, #8047F8) 1;
        border-radius: 10px;
        padding: 4rem;
        min-width: 50%;
        width: 100%;

        position: relative;
        border-radius: 0.6rem 3.6rem;
        background-origin: border-box;
        background-image: linear-gradient(white, white),linear-gradient(45deg, #DBAC2C, #8047F8);
        background-clip: padding-box, border-box;

        > div {
            display: flex;
            gap: 1.2rem;

            > span {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.8rem;
                border-radius: 50%;
                color: ${props => props.theme['background']};
                height: fit-content;
                
                &.location {
                    background: ${props => props.theme['purple']};
                }
                
                &.timer {
                    background: ${props => props.theme['yellow']};
                }
                
                &.paymentSelected {
                    background: ${props => props.theme['yellow-dark']};
                }
            }

            div {
                display: flex;
                flex-direction: column;
                font-size: 1.6rem;
                color: ${props => props.theme['base-text']};
                
                span {
                    &::before {
                        content: " ";
                    }

                    font-weight: 700;
                }
            }
        }
    }

    img {
        max-width: 49rem;
        width: 100%;
    }
    
    @media screen and (max-width:1024px) {
        padding: 0 8rem;
        
        section {
            flex-direction: column;
            width: 80%;
            margin: auto;
        }
    }
    
    @media screen and (max-width:768px) {
        padding: 0 5rem;

        section {
            flex-direction: column;
            width: 100%;
        }
    }
`