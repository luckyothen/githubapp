import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUser,
  getRepositories,
  getStarred,
  getFollowers,
  getFollowing,
  getStarredRepoCount,
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
      dispatch(getStarredRepoCount(e.target.value));
      dispatch(uiActions.forceCloseShowMenu());
    }
  };

  const menuHandler = () => {
    dispatch(uiActions.closeShowMenu());
    console.log(isShowMenu);
  };

  const menuForceCloseHandler = () => {
    dispatch(uiActions.forceCloseShowMenu());
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
            isShowMenu ? "nav__search-links--show" : "nav__search-layer"
          }
        >
          <div className="nav__search-links">
            <i
              className="fas fa-times nav__icon-close"
              onClick={menuForceCloseHandler}
            ></i>
            <div className="nav__search-wrapper">
              <Link
                className="nav__item"
                to={{ pathname: "https://github.com/" }}
                target="_blank"
              >
                <i className="fab fa-github nav__icon-git"></i>
              </Link>
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
              <li>
                <Link
                  className="nav__item"
                  to={{ pathname: "https://github.com/marketplace" }}
                  target="_blank"
                >
                  Market Place
                </Link>
              </li>
              <li>
                <Link
                  className="nav__item"
                  to={{ pathname: "https://github.com/explore" }}
                  target="_blank"
                >
                  Explore
                </Link>
              </li>
            </ul>
          </div>
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
