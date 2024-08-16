import styled from "styled-components";
import background from "../../assets/background.svg"

export const HomeContainer = styled.div`
    margin: auto;
    position: relative;

    .background {
        background: url(${background});
        filter: blur(50px);
        width: 100%;
        height: 100vh;
        position: absolute;
        top: -4rem;
    }
    
    section {
        padding: 0 8rem;
        display: flex;
        gap: 5.6rem;
        align-items: center;
        margin-bottom: 6rem;
        
        > div {
            h1 {
                font-family: "Baloo 2", sans-serif;
                font-weight: 800;
                font-size: 4.8rem;
                margin-bottom: 1.6rem;
                color: ${props => props.theme['base-title']};
                line-height: 130%;
            }

            > p {
                font-size: 2rem;
                color: ${props => props.theme['base-subtitle']};
                margin-bottom: 6.6rem;
            }

            > div {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem 4rem;

                div {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;

                    span {
                        padding: 0.8rem;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: ${props => props.theme['background']};

                        &.shoppingCart {
                            background: ${props => props.theme['yellow-dark']};
                        }

                        &.package {
                            background: ${props => props.theme['base-text']};
                        }

                        &.timer {
                            background: ${props => props.theme['yellow']};
                        }

                        &.coffee {
                            background: ${props => props.theme['purple']};
                        }
                    }

                    p { 
                        color: ${props => props.theme['base-text']};
                        font-size: 1.6rem;
                    }
                }
            }
        }

        img {
            max-width: 100%;
            max-height: 360px;
        }
    }

    main {
        padding: 0 8rem;
        display: flex;
        gap: 5.4rem;
        flex-direction: column;

        h2 {
            font-family: "Baloo 2", sans-serif;
            font-size: 3.2rem;
            font-weight: 800;
        }

        .coffeeList {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 3.2rem;
            min-height: 100%;
        }
    }

    
    @media screen and (max-width:1024px) {
        section {
            flex-direction: column;
        }
        h1, p {
            text-align: center;
        }    
    }

    @media screen and (max-width:768px) {
        section {
            > div {
                > div {
                    grid-template-columns: 1fr;
                }
            }
        }
    }

    @media screen and (max-width:480px) {
        width: 90%;
    }
`