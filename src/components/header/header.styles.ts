import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    background: ${props => props.theme['purple']};
    
    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 16rem;

        img {
            height: 7rem;
        }

        .actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.2rem;
            
            .location {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 0.4rem;
                background: ${props => props.theme['purple-light']};
                color: ${props => props.theme['purple']};
                border-radius: 0.6rem;
                padding: 0.8rem;
                font-size: 1.4rem;
                
            }
            
            .cartButton {
                background: ${props => props.theme['yellow-light']};
                border-radius: 0.6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                padding: 0.8rem;
                cursor: pointer;
                border: none;
                
                .orderAmount {
                    position: absolute;
                    right: calc(0% - 8px);
                    top: calc(0% - 8px);
                    font-weight: 700;
                    font-size: 1.2rem;
                    color: ${props => props.theme['white']};
                    background: ${props => props.theme['yellow-dark']};
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                
                .cartIcon {
                    height: 2.2rem;
                    background: transparent;
                    border: none;
                    color: ${props => props.theme['yellow-dark']};
                }
            }
        }
    }
        
    @media screen and (max-width:768px) {
        section {
            max-width: 80%;
            margin: auto;
            padding: 1.5rem 0;

            td {
                &:not(:first-child) {
                    font-size: 1rem;
                }
            }
        }
    }
`