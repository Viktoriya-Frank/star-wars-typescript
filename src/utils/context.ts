import {createContext} from "react";
import {SWContextValue} from "./types.d.tsx";
import {defaultHero} from "./constants.ts";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero)
});