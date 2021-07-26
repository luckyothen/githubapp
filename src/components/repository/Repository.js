import React from "react";
import "./repository.scss";
import { useSelector } from 'react-redux';

export default function Repository() {

  console.log('REPOSITORIES')
  let repositories = useSelector(state => state.gitHubReducer.repositories);

  console.log(repositories);

  return (
    <section className="repository container">
      <h2 className="repository__section-title">Popular</h2>
      <div className="repository__wrapper">
        {repositories && repositories.map(respository => {
          <div className="repository__card">
            <div className="repository__card-title">{respository.name}</div>
            <p className="repository__card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              vitae dignissimos recusandae distinctio provident fugiat, reiciendis
              magni sequi dolor. Voluptate!
            </p>
            <ul className="repository__misc">
              <li className="repository__misc-item">
                <i
                  className="fas fa-code repository__icon"
                  aria-hidden="true"
                ></i>
                <p className="repository__misc-text">HTML</p>
              </li>
              <li className="repository__misc-item">
                <i
                  className="fas fa-star repository__icon"
                  aria-hidden="true"
                ></i>
                <p className="repository__misc-text">14</p>
              </li>
              <li className="repository__misc-item">
                <i
                  className="fab fa-git-alt repository__icon"
                  aria-hidden="true"
                ></i>
                <p className="repository__misc-text">45</p>
              </li>
              <li className="repository__misc-item">
                <i
                  className="fas fa-balance-scale repository__icon"
                  aria-hidden="true"
                ></i>
                <p className="repository__misc-text">MIT</p>
              </li>
            </ul>
          </div>
        })}
      </div>
    </section>
  );
}
