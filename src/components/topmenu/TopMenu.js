import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/reducers/ui-reducers";
import { githubActions } from "../../redux/reducers/github-reducer";
import "./topmenu.scss";

export default function Topmenu() {

    const user = useSelector((state) => state.gitHubReducer.user);
    const isShowUserMenu = useSelector((state) => state.uiReducer.isShowUserMenu);
    const dispatch = useDispatch();
    const searchRef = useRef();
    let userLoggedInMenu = null;

    const forceCloseUserShowMenuHandler = () => {
        dispatch(uiActions.forceCloseUserShowMenu());
    }

    const clearAllHandler = () => {
        dispatch(githubActions.clearAll());
        dispatch(uiActions.forceCloseUserShowMenu());
        searchRef.current.value = "";
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
                        <span className="topmenu__text" onClick={forceCloseUserShowMenuHandler}>User Account</span>
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
                        <span className="topmenu__text" onClick={forceCloseUserShowMenuHandler}>Repository</span>
                    </Link>
                </li>
            </>
        );
    }

    return (
        <ul
            className={
                isShowUserMenu ? "topmenu show--menu" : "topmenu"
            }
        >
            {userLoggedInMenu}
            <li className="topmenu__item">
                <i class="fas fa-eraser topmenu__icon"></i>
                <span className="topmenu__text" onClick={clearAllHandler}>
                    Clear Search
                </span>
            </li>
        </ul>
    )
}
