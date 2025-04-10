import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const Layout = ({ children, hasFooter = true }) => {
    return (
        <div className="min-h-screen dark:bg-black">
            <Header /> 
            <main>{children}</main>
            { hasFooter ? <Footer /> : null }
        </div>
    );
};

export default Layout;