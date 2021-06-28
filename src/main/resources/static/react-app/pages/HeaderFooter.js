import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const HeaderFooter = ({ children }) => {
    return (
        <>
     <Header />
     { children }
     <Footer />

</>
    )
}

export default HeaderFooter;