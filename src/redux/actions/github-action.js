import axios from "axios";
import { githubActions } from "../reducers/github-reducer";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get("https://api.github.com/users");
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUser = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/" + username,
        {
          headers: {
            "User-Agent": "request",
          },
        }
      );
      dispatch(githubActions.fillUser(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getRepositories = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            "User-Agent": "request",
          },
        }
      );
      console.log(response.data);
      dispatch(githubActions.fillRepositories(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getStarred = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/starred`,
        {
          headers: {
            "User-Agent": "request",
          },
        }
      );
      dispatch(githubActions.filLStarredRepos(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFollowers = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/followers`,
        {
          headers: {
            "User-Agent": "request",
          },
        }
      );
      dispatch(githubActions.fillFollowers(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFollowing = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/following`,
        {
          headers: {
            "User-Agent": "request",
          },
        }
      );
      dispatch(githubActions.fillFollowing(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};
