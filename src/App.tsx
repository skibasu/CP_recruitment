import React from "react";
import ContextStore from "./ContextStore/ContextStore";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
    return (
        <ContextStore>
            <div className="App">
                <Header />
                <Body />
                <Footer />
            </div>
        </ContextStore>
    );
};

export default App;
