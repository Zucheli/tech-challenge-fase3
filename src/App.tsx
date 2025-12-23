import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import Header from "./components/Header";

function Layout() {
    const location = useLocation();

    const hideHeaderRoutes = ["/login"];
    const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

    return (
        <>
            {!shouldHideHeader && <Header />}
            <AppRoutes />
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}
