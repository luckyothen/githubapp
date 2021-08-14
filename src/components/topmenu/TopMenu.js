import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/reducers/ui-reducers";
import { githubActions } from "../../redux/reducers/github-reducer";
import "./topmenu.scss";

function Topmenu({ close }) {
  const user = useSelector((state) => state.gitHubReducer.user);
  const isShowUserMenu = useSelector((state) => state.uiReducer.isShowUserMenu);
  const dispatch = useDispatch();
  let userLoggedInMenu = null;

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  useOnClickOutside(ref, () => uiActions.forceCloseUserShowMenu());

  const forceCloseUserShowMenuHandler = () => {
    dispatch(uiActions.forceCloseUserShowMenu());
  };

  const clearAllHandler = () => {
    dispatch(githubActions.clearAll());
    dispatch(uiActions.forceCloseUserShowMenu());
  };

  if (user) {
    userLoggedInMenu = (
      <>
        <li className="topmenu__item">
          <i className="fas fa-user topmenu__icon"></i>
          <Link
            className="topmenu__link"
            to={{ pathname: user.html_url }}
            target="_blank"
          >
            <span
              className="topmenu__text"
              onClick={forceCloseUserShowMenuHandler}
            >
              User Account
            </span>
          </Link>
        </li>
        <li className="topmenu__item">
          <i class="fas fa-code-branch topmenu__icon"></i>
          <Link
            className="topmenu__link"
            to={{
              pathname: `https://github.com/${user.login}?tab=repositories`,
            }}
            target="_blank"
          >
            <span
              className="topmenu__text"
              onClick={forceCloseUserShowMenuHandler}
            >
              Repository
            </span>
          </Link>
        </li>
      </>
    );
  }

  return (
    <ul className={isShowUserMenu ? "topmenu show--menu" : "topmenu"} ref={ref}>
      {userLoggedInMenu}
      <li className="topmenu__item">
        <i class="fas fa-eraser topmenu__icon"></i>
        <span className="topmenu__text" onClick={clearAllHandler}>
          Clear Search
        </span>
      </li>
    </ul>
  );
}

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        console.log("Youve been to custom hooks");
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default Topmenu;
