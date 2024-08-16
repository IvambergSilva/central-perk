import styled from "styled-components";

export const AmountCoffeeContainer = styled.div`
    background: ${props => props.theme['base-button']};
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    height: 100%;
    
    button {
        background: transparent;
        border: none;
        color: ${props => props.theme['purple']};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        
        &:first-child {
            padding: 0 0.4rem 0 0.8rem;
        }
        &:last-child {
            padding: 0 0.8rem 0 0.4rem;
        }
    
        &:hover {
            color: ${props => props.theme['purple-dark']};
        }
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        color: ${props => props.theme['base-title']};
        min-width: 2.2rem;
    }
`