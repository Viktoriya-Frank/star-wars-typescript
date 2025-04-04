import {characters, navItems} from "../utils/constants.ts";
import {NavLink} from "react-router";

interface Props {
    friend: string,
    position: number
}

const Friend = ({friend, position}: Props) => {
    let styles = "w-100";

    if (position === 7) {
        styles += " bottomLeft"
    }

    if (position === 9) {
        styles += " bottomRight";
    }
    return (
        <NavLink className={'col-sm-4 p-1'} to={`/${navItems[0].path}/${friend}`}>
        <img className={styles} src={characters[friend].img} alt="Friend"/>
        </NavLink>
    );
};

export default Friend;