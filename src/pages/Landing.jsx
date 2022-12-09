import Footer from "../components/Footer"
import Header from "../components/Header"
import "../style/Landing.css"

const Landing = () => {
    return (
        <div className="Landing">
            <Header currentPage="Landing" />
            <div className="LandingInnerWrap">
                <h1>LANDING PAGE</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Landing
