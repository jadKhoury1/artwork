import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen dark:bg-black">
            <Header /> 
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;