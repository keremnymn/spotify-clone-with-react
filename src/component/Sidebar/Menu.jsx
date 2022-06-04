import { Icon } from "icons";
import { NavLink } from "react-router-dom";

function Menu() {
    const navButtonStyle = "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
    const activeClassStyle = navButtonStyle + " bg-active text-white"
    const isNavActive = (e) => {
        return e.isActive ? activeClassStyle : navButtonStyle
    }

    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} className={isNavActive}>
                        <span>
                            <Icon name="home" />
                        </span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={isNavActive}>
                        <span>
                            <Icon name="search" />
                        </span>
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} className={isNavActive}>
                        <span>
                            <Icon name="collection" />
                        </span>
                        Your Library
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu