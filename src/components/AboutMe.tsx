import {characters, period_month} from "../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {HeroInfo} from "../utils/types.d.tsx";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo | null>(null);
    let {heroId} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (!heroId || !characters[heroId]) {
            setHero(null);
            return;
        }

        changeHero(heroId);
        const heroData = JSON.parse(localStorage.getItem(heroId)!);

        if (heroData && ((Date.now() - heroData.timestamp) < period_month)) {
            setHero(heroData.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    };
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
                .catch(() => setHero(null));
        }
    }, [heroId]);

    if (!hero) {
        return <ErrorPage/>;
    }

    return (
        <div className='fs-2 lh-lg text-justify ms-5'>
            {Object.keys(hero).map(key => (
                <p key={key}>
                    <span className={'display-3'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                </p>
            ))}
        </div>
    );
};

export default AboutMe;
