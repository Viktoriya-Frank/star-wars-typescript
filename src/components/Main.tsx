import Home from "./Home.tsx";
import {navItems} from "../utils/constants.ts";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import StarWars from "./StarWars.tsx";

import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {
    // const {page} = useContext(StarWarsContext);
    //
    // switch (page) {
    //     case navItems[1]:
    //         return <AboutMe/>;
    //     case navItems[2]:
    //         return <StarWars/>;
    //     case navItems[3]:
    //         return <Contact/>;
    //     default:
    //         return <Home/>;
    // }
    return (
        <Routes>
            {['/', navItems[0].path].map(path =>
                <Route key={path} path={path} element={<Home />}/>)}
            {[navItems[1].path, `${navItems[1].path}/:heroId`].map(path => <Route key = {path} path={path} element={<AboutMe/>}/>)}
            <Route path={navItems[0].path} element={<Home/>}/>
            < Route path={navItems[1].path} element={<AboutMe/>}/>
            < Route path={navItems[2].path} element={<StarWars/>}/>
            <Route path={navItems[3].path} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>} />
        </Routes>
    )
};

export default Main;