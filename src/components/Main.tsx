import Home from "./Home.tsx";
import {navItems} from "../utils/constants.ts";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import StarWars from "./StarWars.tsx";
import {useContext} from "react";
import {StarWarsContext} from "../utils/context.tsx";

const Main = () => {
    const {page} = useContext(StarWarsContext);

    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }

};

export default Main;