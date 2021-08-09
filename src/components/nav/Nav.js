import React, { useRef } from "react";
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
import { githubActions } from "../../redux/reducers/github-reducer";
import defaultImage from "../../assets/images/default.png";
import "./nav.scss";

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.gitHubReducer.user);
  const isShowMenu = useSelector((state) => state.uiReducer.isShowMenu);
  const isShowUserMenu = useSelector((state) => state.uiReducer.isShowUserMenu);
  const searchRef = useRef();

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
    dispatch(uiActions.forceCloseUserShowMenu());
  };

  const menuForceCloseHandler = () => {
    dispatch(uiActions.forceCloseShowMenu());
  };

  const userMenuHandler = () => {
    dispatch(uiActions.closeShowUserMenu());
  };

  const clearAllHandler = () => {
    dispatch(githubActions.clearAll());
    dispatch(uiActions.forceCloseUserShowMenu());
    searchRef.current.value = "";
  };

  let userLoggedInMenu = null;

  if (user) {
    userLoggedInMenu = (
      <>
        <li className="nav__usermenu-item ">
          <i className="fas fa-user nav__usermenu-icon"></i>
          <Link
            className="nav__item"
            to={{ pathname: user.html_url }}
            target="_blank"
          >
            <span className="nav__usermenu-text">User Account</span>
          </Link>
        </li>
        <li className="nav__usermenu-item">
          <i class="fas fa-code-branch nav__usermenu-icon"></i>
          <Link
            className="nav__item"
            to={{
              pathname: `https://github.com/${user.login}?tab=repositories`,
            }}
            target="_blank"
          >
            <span className="nav__usermenu-text">Repository</span>
          </Link>
        </li>
      </>
    );
  }

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
                ref={searchRef}
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
          <img
            srcSet={user ? user.avatar_url : defaultImage}
            alt="Profile"
            className="nav__profile-pic"
          />
          <i
            className={
              isShowUserMenu
                ? "fas fa-caret-up nav__icon-caret"
                : "fas fa-caret-down nav__icon-caret"
            }
            onClick={userMenuHandler}
          ></i>
          <ul
            className={
              isShowUserMenu ? "nav__usermenu show--menu" : "nav__usermenu"
            }
          >
            {userLoggedInMenu}
            <li className="nav__usermenu-item">
              <i class="fas fa-eraser nav__usermenu-icon"></i>
              <span className="nav__usermenu-text" onClick={clearAllHandler}>
                Clear Search
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
