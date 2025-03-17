import Carousal from "./Carousal";
import Cards from "./Cards";
import Faq from "./Faq";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <Carousal></Carousal>
            <Cards></Cards><br/>
            <Faq></Faq><br/><br/>
            <ToastContainer />
            <Footer></Footer>
        </div>
    )
}