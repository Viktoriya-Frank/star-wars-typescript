import {createContext} from "react";

import {navItems} from "./constants.ts";
import {SWContextValue} from "./types.d.tsx";


export const StarWarsContext = createContext<SWContextValue>({
    page: navItems[0],
    changePage: (page: string) => console.log(page)
});





