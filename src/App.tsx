import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {StarWarsContext} from "./utils/context.tsx";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'container-fluid'}>
            <StarWarsContext value={{
                page, changePage: setPage
            }}>
                <Header/>
                <Main/>
            </StarWarsContext>
            <Footer/>
        </div>
    )
}

export default App
