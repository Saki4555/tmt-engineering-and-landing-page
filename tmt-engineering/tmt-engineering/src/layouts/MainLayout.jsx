import { Outlet } from "react-router";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {
    return (
        <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
};

export default MainLayout;