import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
`;

interface OverlayProps {
    $visible: boolean;
}

export const Overlay = styled.div<OverlayProps>`
    position: fixed;
    inset: 0;
    background: #00000080;
    display: ${props => props.$visible ? 'block' : 'none'};
    z-index: 6;
    transition: opacity 0.3s ease;
`;

export const ModalContainer = styled.div<OverlayProps>`
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    background: ${props => props.theme['white']};
    transform: translateX(100%);
    animation: ${props => props.$visible ? slideIn : slideOut} 0.3s ease forwards;
    z-index: 6;

    @media screen and (max-width:1280px) {
        width: 50%;
    }

    @media screen and (max-width:768px) {
        width: 65%;
    }

    @media screen and (max-width:480px) {
        width: 90%;
    }
`;

export const ModalHeader = styled.div`
    padding: 1.6rem;
    border-bottom: 1px solid ${props => props.theme['base-input']};
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 2rem;
        font-weight: 600;
    }
`;

export const CloseButton = styled.button`
    background: transparent;
    border: transparent;
    cursor: pointer;
`;

export const ModalBody = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 6rem);
    
    .coffeeList {
        overflow-y: auto;
        flex: 1;

        &::-webkit-scrollbar {
            width: 0px;
        }
    }
`;
