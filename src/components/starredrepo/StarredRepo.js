import React from "react";
import { useSelector } from "react-redux";
import Repository from "../shared/repository/Repository";

export default function StarredRepo() {
  let starredRepos = useSelector((state) => state.gitHubReducer.starredRepos);

  return (
    <>
      <Repository items={starredRepos} title="Starred Repos" />
    </>
  );
}
