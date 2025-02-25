import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {

    return (

        <nav>

            {/* {props.linksProp.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.url}>
                            {link.text}
                        </NavLink>
                    </li>
                ))} */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item"><NavLink className="nav-link" to="/contacts">Lista dei post</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/about">Chi siamo</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/about">Crea post</NavLink></li>
                </ul>
            </nav>

        </nav>

    )
}