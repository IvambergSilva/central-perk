import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/cart-context";
import { DefaultTheme } from "./styles/theme-default";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global-styles";

export function App() {
    return (
        <>
            <ThemeProvider theme={DefaultTheme}>
                <BrowserRouter>
                    <CartContextProvider>
                        <Router />
                    </CartContextProvider>
                </BrowserRouter>
                <GlobalStyles />
            </ThemeProvider>
        </>
    )
}