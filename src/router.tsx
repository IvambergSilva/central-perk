import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/default-layout";
import { Home } from "./pages/home/home";
import { Checkout } from "./pages/checkout/checkout";
import { ProtectedRouter } from "./pages/protected-router/protected-router";
import { Success } from "./pages/success/success";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout"
                    element={
                        <ProtectedRouter>
                            <Checkout />
                        </ProtectedRouter>
                    }
                />
                <Route path="/success"
                    element={
                        <ProtectedRouter>
                            <Success />
                        </ProtectedRouter>
                    }
                />
            </Route>
        </Routes>
    )
}
