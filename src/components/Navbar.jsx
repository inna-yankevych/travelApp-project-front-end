import { NavLink } from "react-router-dom";

export function Navbar(){
    return <nav>
        <NavLink to={"/"}>Home</NavLink>
        {" | "}
        <NavLink to={"/countries"}>Countries</NavLink>
        {" | "}
        <NavLink to={"/cities"}>Cities</NavLink>
        {" | "}
        <NavLink to={"/wishlist"}>My WishList</NavLink>
    </nav>
}