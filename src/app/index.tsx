import Footer from "../components/footer"
import Navigation from "../components/nav"
import Home from "./home"

const App:React.FC = () => {
    return(
        <div className="app">
            <Navigation />
            <Home />
            <Footer />


        </div>
    )

}
export default App