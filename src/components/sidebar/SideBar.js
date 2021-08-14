import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/reducers/ui-reducers";
import {
    getUser,
    getRepositories,
    getStarred,
    getFollowers,
    getFollowing,
    getStarredRepoCount,
} from "../../redux/actions/github-action";
import "./sidebar.scss"

export default function SideBar() {

    const dispatch = useDispatch();
    const isShowSideBar = useSelector((state) => state.uiReducer.isShowSideBar);
    const isShowUserMenu = useSelector((state) => state.uiReducer.isShowUserMenu);
    const searchValue = useRef();

    const sidebarForceCloseHandler = () => {
        dispatch(uiActions.forceCloseShowSideBar());
        dispatch(uiActions.forceCloseUserShowMenu());
        searchValue.current.value = "";
    };

    const searchHandler = (e) => {
        if (e.keyCode === 13) {
            console.log('testing sidebar');
            dispatch(getUser(e.target.value));
            dispatch(getRepositories(e.target.value));
            dispatch(getStarred(e.target.value));
            dispatch(getFollowers(e.target.value));
            dispatch(getFollowing(e.target.value));
            dispatch(getStarredRepoCount(e.target.value));
            dispatch(uiActions.forceCloseShowSideBar());
            dispatch(uiActions.forceCloseUserShowMenu());
            searchValue.current.value = "";

            console.log(isShowUserMenu)
        }
    };

    return (
        <div className={isShowSideBar ? "sidebar show--sidebar" : "sidebar"} >
            <i
                className="fas fa-times sidebar__icon-close"
                onClick={sidebarForceCloseHandler}
            ></i>
            <div className="sidebar__wrapper container">
                <Link
                    className="sidebar__item"
                    to={{ pathname: "https://github.com/" }}
                    target="_blank"
                >
                    <i className="fab fa-github sidebar__icon-git"></i>
                </Link>
                <input
                    type="search"
                    name="search"
                    id="search"
                    className="sidebar__search"
                    placeholder="Search"
                    ref={searchValue}
                    onKeyDown={(e) => searchHandler(e)}

                />
            </div>
            <ul className="sidebar__links">
                <li>
                    <Link
                        className="sidebar__item"
                        to={{ pathname: "https://github.com/marketplace" }}
                        target="_blank"
                    >
                        Market Place
                    </Link>
                </li>
                <li>
                    <Link
                        className="sidebar__item"
                        to={{ pathname: "https://github.com/explore" }}
                        target="_blank"
                    >
                        Explore
                    </Link>
                </li>
            </ul>

        </div >
    )
}
