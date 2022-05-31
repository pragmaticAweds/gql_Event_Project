import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/auth-context";
import "./navbar.scss";

interface iNavs {
  id: number;
  link: string;
  navTitle: string;
}

const navLinks: Array<iNavs> = [
  {
    id: 1,
    link: "/events",
    navTitle: "Events",
  },
  {
    id: 2,
    link: "/auth/login",
    navTitle: "Login",
  },
  {
    id: 3,
    link: "/bookings",
    navTitle: "Bookings",
  },
];

const NavBar = () => {
  return (
    <AuthContext.Consumer>
      {({ token, logout }) => (
        <header className="header">
          <div className="logo">
            <h1>EasyEvent</h1>
          </div>
          <nav>
            <div className="links">
              {navLinks.map((pageLink, i) => {
                return (
                  <NavLink
                    to={pageLink.link}
                    className={`
                  ${
                    token && i === 1
                      ? "hidden"
                      : !token && i === 2
                      ? "hidden"
                      : ""
                  }
                  `}
                    key={pageLink.id}
                  >
                    {pageLink.navTitle}
                  </NavLink>
                );
              })}
              {token && <button onClick={logout}>Log out</button>}
            </div>
          </nav>
        </header>
      )}
    </AuthContext.Consumer>
  );
};

export default NavBar;
