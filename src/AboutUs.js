import Footer from "./Footer";
import Header from "./Header";

export default function AboutUs() {
    return (
        <div>
            <Header></Header>
            <div style={{ marginTop: "85px", padding: "25px" }}>
                <h1 class="customheader" style={{
                    textAlign: "center",
                    backgroundColor: "#017aa7",
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "10px",
                    marginTop: "10px",
                    borderRadius: "5px",
                }}>Standard Chartered Bank, India</h1>
                <div style={{ textAlign: 'left' }}>
                    <h3 style={{ color: "#017aa7" }}>
                        We’ve been in India for over 160 years
                    </h3>
                    <p>Standard Chartered Bank has been operating in India for over 160 years making it one of the oldest foreign Bank. The Bank has a network of 100 branches across 42 cities. Key business segments include Corporate, Commercial and Institutional Banking as well as Consumer, Private and Business Banking. For more information, visit <a href="http://localhost:3000/home" style={{ color: "#017aa7" }}>website</a></p>
                    <p>In addition to a full-service universal bank, the group has a Non-Banking Finance lending entity to complement the Bank’s presence in specific geographies and segments, a Retail securities broking business and is the first foreign Bank to have commenced banking activities in India’s International Financial Services Centre (in GIFT City, Gujarat).</p>
                    <p>Globally, we are a leading international banking group, with a presence in 59 of the world’s most dynamic markets and serving clients in a further 85. Our purpose is to drive commerce and prosperity through our unique diversity, and our heritage and values are expressed in our brand promise, here for good.</p>
                    <p>Standard Chartered PLC is listed on the London and Hong Kong Stock Exchanges.</p>

                    <h3 style={{ color: "#017aa7" }}>
                        Our Clients Come First
                    </h3>
                    <p>We use our global capabilities and deep local knowledge in India to provide a wide range of products and services to meet the needs of our individual and business clients. We build our products and services around our clients and have a commitment to help ensure that our clients have the best possible experience with us.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}