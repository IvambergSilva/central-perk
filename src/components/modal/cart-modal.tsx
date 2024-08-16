import { X } from "phosphor-react";
import { CloseButton, ModalBody, ModalContainer, ModalHeader, Overlay } from "./cart-modal.styles";
import { Cart } from "../cart/cart";

interface CartModalProps {
    isCartOpen: boolean;
    handleCartModal: () => void;
}

export function CartModal({ isCartOpen, handleCartModal }: CartModalProps) {
    const handleCartModalClose = () => {
        handleCartModal()
    }

    return (
        <>
            <Overlay
                $visible={isCartOpen}
                onClick={handleCartModal}
            />
            <ModalContainer $visible={isCartOpen}>
                <ModalHeader>
                    <span>Carrinho</span>
                    <CloseButton onClick={handleCartModal} >
                        <X size={24} />
                    </CloseButton>
                </ModalHeader>
                <ModalBody>
                    <Cart
                        handleCartModalClose={handleCartModalClose}
                    />
                </ModalBody>
            </ModalContainer >
        </>
    );
};