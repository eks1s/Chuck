import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">Chuck</Link>
            </header>
            <Outlet />
            <footer></footer>
        </>
    );
};
