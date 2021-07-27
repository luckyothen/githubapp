import React from "react";
import "./repository.scss";
import { useSelector } from "react-redux";

export default function Repository() {
  console.log("REPOSITORIES");
  let repositories = useSelector((state) => state.gitHubReducer.repositories);

  console.log(repositories);

  return (
    <section className="repository container">
      <h2 className="repository__section-title">Popular</h2>
      <div className="repository__wrapper">
        {repositories &&
          repositories.map((repository) => (
            <div className="repository__card" key={repository.id}>
              <div className="repository__card-title">{repository.name}</div>
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
                    {console.log(repository.license)}
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
