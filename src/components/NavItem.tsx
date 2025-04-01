import {useContext} from 'react';
import {StarWarsContext} from "../utils/context.tsx";

interface Props {
    itemTitle: string
}

const NavItem = ({itemTitle}: Props) => {
    const { changePage } = useContext(StarWarsContext);
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;