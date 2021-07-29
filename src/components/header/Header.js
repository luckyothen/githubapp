import React from "react";
import "./header.scss";
import { useSelector } from "react-redux";
import defaultImage from "../../assets/images/default.png";

export default function Header() {
  let user = useSelector((state) => state.gitHubReducer.user);
  console.log(user);

  return (
    <header className="header container">
      <div className="header__wrapper">
        <article className="header__about-wrapper header__profile">
          <img
            srcSet={user ? user.avatar_url : defaultImage}
            alt="ProfileImage"
            className="header__about-image"
          />
          <div className="header__about-text">
            <h2 className="header__about-name">{!user || !user.name ? 'John Smith' : user.name}</h2>
            <p className="header__about-account">{!user || !user.login ? 'johnsmith' : user.login}</p>
            <p className="header__about-description">
              {!user || !user.bio ? 'Vivamizzle gangster doggy doggy nisi the bizzle pretizzle. Vivamus things amet lacizzle. Bling bling eu its fo rizzle eget lacizzle auctizzle shiznit. Praesent suscipit viverra ipsum. ' : user.bio}
            </p>
          </div>

        </article>
        <article className="header__contacts-wrapper header__profile">
          <ul className="header__contacts-links">
            <li className="header__contacts-item">
              <i
                className="fa fa-map-marker header__contacts-icon"
                aria-hidden="true"
              ></i>
              <p className="header__contacts-text">{!user || !user.location ? 'Somewhere' : user.location}</p>
            </li>
            <li className="header__contacts-item">
              <i
                className="fa fa-envelope header__contacts-icon"
                aria-hidden="true"
              ></i>
              <p className="header__contacts-text">{!user || !user.email ? "user@example.com" : user.email}</p>
            </li>
            <li className="header__contacts-item">
              <i
                className="fa fa-globe header__contacts-icon"
                aria-hidden="true"
              ></i>
              <p className="header__contacts-text">{!user || !user.blog ? 'Website' : user.blog}</p>
            </li>
            <li className="header__contacts-item">
              <i
                className="fa fa-users header__contacts-icon"
                aria-hidden="true"
              ></i>
              <p className="header__contacts-text">{!user || !user.company ? 'Company' : user.company}</p>
            </li>
          </ul>
        </article>
      </div>
    </header>
  );
}
