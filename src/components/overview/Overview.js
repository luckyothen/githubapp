import React from 'react';
import './overview.scss';
import { NavLink, Link } from 'react-router-dom';

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
                    <Link to='/'>
                        <p className="overview__text">Repos</p>
                    </Link>

                </li>
                <li className="overview__item">
                    <span className="overview__counter">
                        35
                    </span>
                    <Link to='/starred-repo'  >
                        <p className="overview__text">Stars</p>
                    </Link>
                </li>
                <li className="overview__item">
                    <span className="overview__counter">
                        65
                    </span>
                    <Link to='/followers'  >
                        <p className="overview__text">Followers</p>
                    </Link>

                </li>
                <li className="overview__item">
                    <span className="overview__counter">
                        78
                    </span>
                    <Link to='/following' >
                        <p className="overview__text">Following</p>
                    </Link>

                </li>
            </ul>
        </section>
    )
}
