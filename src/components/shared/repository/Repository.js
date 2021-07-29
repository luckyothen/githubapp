import React from "react";
import { Link } from 'react-router-dom';
import "./repository.scss";

export default function Repository(props) {

  return (
    <section className="repository container">
      <h2 className="repository__section-title">{props.title}</h2>
      <div className="repository__wrapper">
        {props.repos &&
          props.repos.map((repository) => (
            <div className="repository__card" key={repository.id}>
              <Link to={{ pathname: repository.html_url }} target="_blank" >
                <div className="repository__card-title">{repository.name}</div>
              </Link>
              <p className="repository__card-text">{repository.description}</p>
              <ul className="repository__misc">
                <li className="repository__misc-item">
                  <i
                    className="fas fa-code repository__icon"
                    aria-hidden="true"
                  ></i>
                  <p className="repository__misc-text">{repository.language}</p>
                </li>
                <li className="repository__misc-item">
                  <i
                    className="fas fa-star repository__icon"
                    aria-hidden="true"
                  ></i>
                  <p className="repository__misc-text">
                    {repository.stargazers_count}
                  </p>
                </li>
                <li className="repository__misc-item">
                  <i
                    className="fab fa-git-alt repository__icon"
                    aria-hidden="true"
                  ></i>
                  <p className="repository__misc-text">
                    {repository.forks_count}
                  </p>
                </li>
                <li className="repository__misc-item">
                  <i
                    className="fas fa-balance-scale repository__icon"
                    aria-hidden="true"
                  ></i>
                  <p className="repository__misc-text">

                    {repository.license && repository.license["name"]
                      ? repository.license["name"]
                      : "NA"}
                  </p>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}
