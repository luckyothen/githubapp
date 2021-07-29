import React from 'react';
import './overview.scss';
import { NavLink } from 'react-router-dom';

export default function overview() {
    return (
        <section className="overview container">
            <ul className="overview__links">
                <li className="overview__item">
                    <p className="overview__text">Overview</p>
                </li>
                <li className="overview__item">
                    <span className="overview__counter">
                        14
                    </span>
                    <NavLink to='/' activeClassName="overview__text">
                        <p className="overview__text">Repos</p>
                    </NavLink>

                </li>
                <li className="overview__item">
                    <span className="overview__counter">
                        35
                    </span>
                    <NavLink to='/starred-repo' activeClassName="overview__text" >
                        <p className="overview__text">Stars</p>
                    </NavLink>
                </li>
                <li className="overview__item">
                    <span className="overview__counter">
                        65
                    </span>
                    <p className="overview__text">Followers</p>
                </li>
                <li className="overview__item">
                    <span className="overview__counter">
                        78
                    </span>
                    <p className="overview__text">Following</p>
                </li>
            </ul>
        </section>
    )
}
