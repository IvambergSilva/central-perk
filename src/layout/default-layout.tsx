import { Header } from "../components/header/header";
import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./default-layout.styles";

export function DefaultLayout() {
    return (
        <DefaultLayoutContainer>
            <Header />
            <Outlet />
        </DefaultLayoutContainer>
    )
}
