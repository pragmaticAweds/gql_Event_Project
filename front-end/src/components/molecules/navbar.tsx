import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    link: "/auth/login",
    navTitle: "login",
  },
  {
    id: 2,
    link: "/auth/signup",
    navTitle: "signup",
  },
  {
    id: 3,
    link: "/events",
    navTitle: "events",
  },
  {
    id: 4,
    link: "/bookings",
    navTitle: "bookings",
  },
];

const NavBar = () => {
  return (
    <header className="bg-[#01d1d1] w-full h-14 flex items-center py-0 px-4">
      <div>
        <h1 className="text-2xl font-bold">EasyEvent</h1>
      </div>
      <nav className="ml-6 space-x-4">
        {navLinks.map(({ link, navTitle, id }) => (
          <NavLink
            to={link}
            key={id}
            style={({ isActive }) => {
              return { color: isActive ? "#f8e264" : "black" };
            }}
          >
            {navTitle}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
