import {characters, starWarsInfo} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    let {heroId} = useParams();
    const {changeHero} = useContext(SWContext);
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
        return <ErrorPage/>;
    }

    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;
