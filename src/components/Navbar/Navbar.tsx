import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Friends } from "../Friends/FriendItem/Friends";

export const Navbar = (props) => {
  const state = props.store.getState().sideBar;
  let links = [
    {
      to: "/profile",
      name: "Profile"
    },
    {
      to: "/dialogues",
      name: "Messages"
    },
    {
      to: "/news",
      name: "News"
    },
    {
      to: "/music",
      name: "Music"
    },
    {
      to: "/settings",
      name: "Settings"
    },
    {
      to: "/friends",
      name: "Friends"
    }
  ];
  return (
    <nav className="nav">
      {links.map((link) => (
        <div className="nav__item">
          <NavLink to={link.to}>{link.name}</NavLink>
        </div>
      ))}
      <div className="friends__container">
        {state.map((friend) => {
          if (friend.id <= "3") {
            return <Friends name={friend.name} img={friend.avatar} />;
          } else return "";
        })}
      </div>
    </nav>
  );
};
