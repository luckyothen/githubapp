import React from "react";
import { useSelector } from 'react-redux';
import "./overview.scss";
import { NavLink, Link } from "react-router-dom";

export default function Overview() {

  let user = useSelector(state => state.gitHubReducer.user);
  let starredRepos = useSelector(state => state.gitHubReducer.starredRepos);
  console.log(user)


  return (
    <section className="overview container">
      <ul className="overview__links">
        <li className="overview__item">
          <p className="overview__text">Overview</p>
        </li>
        <li className="overview__item">
          <span className="overview__counter">{user.public_repos}</span>
          <Link to="/my-repo">
            <p className="overview__text">Repos</p>
          </Link>
        </li>
        <li className="overview__item">
          <span className="overview__counter">35</span>
          <Link to="/starred-repo">
            <p className="overview__text">Stars</p>
          </Link>
        </li>
        <li className="overview__item">
          <span className="overview__counter">{user.followers}</span>
          <Link to="/followers">
            <p className="overview__text">Followers</p>
          </Link>
        </li>
        <li className="overview__item">
          <span className="overview__counter">{user.following}</span>
          <Link to="/following">
            <p className="overview__text">Following</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
