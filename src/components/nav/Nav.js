import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  getRepositories,
  getStarred,
  getFollowers,
  getFollowing,
} from "../../redux/actions/github-action";
import { uiActions } from "../../redux/reducers/ui-reducers";
import defaultImage from "../../assets/images/default.png";
import "./nav.scss";

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.gitHubReducer.user);
  const isShowMenu = useSelector((state) => state.uiReducer.isShowMenu);

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch(getUser(e.target.value));
      dispatch(getRepositories(e.target.value));
      dispatch(getStarred(e.target.value));
      dispatch(getFollowers(e.target.value));
      dispatch(getFollowing(e.target.value));
    }
  };

  const menuHandler = () => {
    dispatch(uiActions.closeShowMenu());
  };

  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <div className="nav__menu" onClick={menuHandler}>
          <div className="nav__bar"></div>
          <div className="nav__bar"></div>
          <div className="nav__bar"></div>
        </div>
        <div
          className={
            isShowMenu
              ? "nav__search-links nav__search-links--show"
              : "nav__search-links"
          }
        >
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
