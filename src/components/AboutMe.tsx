
import {useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {HeroInfo} from "../utils/types.d.tsx";
import {useParams} from "react-router";


const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    const [header, setHeader] = useState<string>("");
    let {heroId } = useParams();

    const currentHeroId = heroId && characters[heroId] ? heroId : defaultHero;


    useEffect(() => {
        setHeader(characters[currentHeroId].name);
        const storedHero = JSON.parse(localStorage.getItem("currentHero")!);
        //
        // if(!characters[heroId]) {
        //     heroId = defaultHero;
        // }
        // const hero = JSON.parse(localStorage.getItem(heroId)!);
        if(storedHero && ((Date.now() - storedHero.timestamp) < period_month)) {
            setHero(storedHero.payload);
        } else {
            fetch(characters[currentHeroId].url)
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
                    }
                    setHero(info);
                    localStorage.setItem(currentHeroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [currentHeroId]);

    const heroAttributes = hero ? Object.entries(hero) : [];

    // return (
    //     hero && (
    //         <div className='fs-2 lh-lg text-justify ms-5'>
    //             {heroAttributes.map(([key, value]) => (
    //                 <p key={key}>
    //                     <span className='display-3'>{key.replace("_", " ")}:</span> {value}
    //                 </p>
    //             ))}
    //         </div>
    //     )
    // );

    return (
        <div>
            <h1 className="text-center display-2">{header}</h1>
            <div className="fs-2 lh-lg text-justify ms-5">
                {heroAttributes.map(([key, value]) => (
                    <p key={key}>
                        <span className="display-3">{key.replace("_", " ")}:</span> {value}
                    </p>
                ))}
            </div>
        </div>
    );

};

export default AboutMe;