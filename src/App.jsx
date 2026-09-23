import BackToTop from "./components/backToTop";
import Footer from "./components/footer";
import Header from "./components/header";

import Home from "./pages/home";

const App = () => {
    return (
        <>
            <Header />

            <Home />

            <Footer />

            <BackToTop />
        </>
    );
};

export default App;
