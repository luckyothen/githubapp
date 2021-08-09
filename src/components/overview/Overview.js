import React from "react";
import { useSelector } from "react-redux";
import "./overview.scss";
import { NavLink, Link } from "react-router-dom";

export default function Overview() {
  let user = useSelector((state) => state.gitHubReducer.user);
  let starredReposCount = useSelector(
    (state) => state.gitHubReducer.starredReposCount
  );

  return (
    <section className="overview container">
      <ul className="overview__links">
        <li className="overview__item">
          <p className="overview__text">Overview</p>
        </li>
        <li className="overview__item">
          <Link to="/my-repo">
            <p className="overview__text">Repos</p>
          </Link>
          <span className="overview__counter">
            {user ? user.public_repos : 0}
          </span>
        </li>
        <li className="overview__item">
          <Link to="/starred-repo">
            <p className="overview__text">Stars</p>
          </Link>
          <span className="overview__counter">{starredReposCount}</span>
        </li>
        <li className="overview__item">
          <Link to="/followers">
            <p className="overview__text">Followers</p>
          </Link>
          <span className="overview__counter">{user ? user.followers : 0}</span>
        </li>
        <li className="overview__item">
          <Link to="/following">
            <p className="overview__text">Following</p>
          </Link>
          <span className="overview__counter">{user ? user.following : 0}</span>
        </li>
      </ul>
    </section>
  );
}
