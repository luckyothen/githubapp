import React, { useEffect } from "react";
import axios from "axios";
import cssClass from "./dashboard.module.scss";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Overview from "../../components/overview/Overview";
import Repository from "../../components/repository/Repository";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/github-action";
const { Octokit } = require("@octokit/rest");

function Dashboard() {
  const octokit = new Octokit();
  const dispatch = useDispatch();

  useEffect(() => {
    getGithubUsers();
  });

  async function getGithubUsers() {
    // const result = await octokit.request("GET /users");
    // console.log(result.data);
    // const owner = "baldoswill@gmail.com";
    // const fiveMostRecentCommits = await octokit.request(`GET /repos/{owner}/`, {
    //   owner,
    // });
    // const result = await octokit.request("GET /users");
    // console.log(fiveMostRecentCommits.data);
    // try {
    //   const users = await axios.get("https://api.github.com/users/brynary");
    //   console.log(users);
    // } catch (e) {
    //   console.log(e);
    // }
    // dispatch(getUsers());
  }

  return (
    <div className={cssClass.dashboard}>
      <Nav />
      <Header />
      <Overview />
      <Repository />
    </div>
  );
}

export default Dashboard;
