import React from 'react';
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

export default function SideBar() {

    const dispatch = useDispatch();

    const menuForceCloseHandler = () => {
        dispatch(uiActions.forceCloseShowMenu());
    };

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

    return (
        <div className="sidebar">
            <i
                className="fas fa-times sidebar__icon-close"
                onClick={menuForceCloseHandler}
            ></i>
            <div className="sidebar__wrapper">
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
        </div>
    )
}
