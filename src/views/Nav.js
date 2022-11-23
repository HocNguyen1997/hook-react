import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" activeclassname="active" end={true}>
        Home
      </NavLink>
      <NavLink to="/timer" activeclassname="active">
        Timer Apps
      </NavLink>
      <NavLink to="/todo" activeclassname="active">
        Todo Apps
      </NavLink>
      <NavLink to="/blog" activeclassname="active">
        Blog Apps
      </NavLink>
      <NavLink to="/youtube-search" activeclassname="active">
        Secret
      </NavLink>
    </div>
  );
};

export default Nav;
