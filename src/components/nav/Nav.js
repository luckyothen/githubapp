import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/github-action";
import defaultImage from "../../assets/images/default.png";
import "./nav.scss";

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.gitHubReducer.user);

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      // let url = "https://api.github.com/users";
      // if (e.target.value && e.target.value !== "") {
      //   url = "https://api.github.com/users/" + e.target.value;
      // }
      // axios.get(url).then((data) => console.log(data));

      dispatch(getUser(e.target.value));
    }
  };

  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <div className="nav__menu">
          <div className="nav__bar"></div>
          <div className="nav__bar"></div>
          <div className="nav__bar"></div>
        </div>
        <div className="nav__search-links">
          <i className="fas fa-times nav__icon-close"></i>
          <div className="nav__search-wrapper">
            <i className="fab fa-github nav__icon-git"></i>
            <input
              type="search"
              name="search"
              id="search"
              className="nav__search"
              placeholder="Search"
              onKeyDown={(e) => searchHandler(e)}
            />
          </div>

          <ul className="nav__links">
            <li className="nav__item">Pull Requests</li>
            <li className="nav__item">Issues</li>
            <li className="nav__item">Market Place</li>
            <li className="nav__item">Explore</li>
          </ul>
        </div>
        <div className="nav__notification-profile">
          <i className="fas fa-bell nav__icon-notification"></i>
          <img
            srcSet={user ? user.avatar_url : defaultImage}
            alt="Profile"
            className="nav__profile-pic"
          />
          <i className="fas fa-caret-down nav__icon-caret"></i>
        </div>
      </div>
    </nav>
  );
}
