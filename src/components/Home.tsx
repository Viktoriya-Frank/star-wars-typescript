
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {characters} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    let { heroId } = useParams();
    const { changeHero } = useContext(SWContext);
    const [isValidHero, setIsValidHero] = useState(true);

    useEffect(() => {
        if (!heroId || !characters[heroId]) {
            setIsValidHero(false);
            return;
        }
        setIsValidHero(true);
        changeHero(heroId);
    }, [heroId]);

    if (!isValidHero) {
        return <ErrorPage />;
    }

    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    );
};

export default Home;