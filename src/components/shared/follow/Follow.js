import React, { useEffect, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./follow.scss";
import { getFollowers } from "../../followers/Followers";

export default function Follow(props) {
  let items = <h3 className="follow__none-items">No {props.title}</h3>;
  let wrapper = "follow__wrapper-none-items";
  // const [pageNumber, setPageNumber] = useState(1);
  // let lastIndexRef = useRef(30);
  // const dispatch = useDispatch();

  // let followers = useSelector((state) => state.gitHubReducer.followers);
  // let hasMore = useSelector((state) => state.gitHubReducer.hasMore);
  // let loading = useSelector((state) => state.gitHubReducer.loading);

  // useEffect(() => {
  //   dispatch(getFollowers(pageNumber, lastIndexRef.current));
  // }, [pageNumber]);

  // const observer = useRef();
  // const lastItemRef = useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore > 0) {
  //         setPageNumber((prevPageNumber) => lastIndexRef.current + 1);
  //         lastIndexRef.current = lastIndexRef.current + 3;
  //       }
  //     });

  //     if (node) observer.current.observe(node);
  //   },
  //   [loading]
  // );

  if (props.items && props.items.length > 0) {
    wrapper = "follow__wrapper";
    items = props.items.map((item) => (
      <div className="follow__card">
        <img
          srcSet={item.avatar_url}
          alt="Profile Pic"
          className="follow__profilePic"
        />
        <Link to={{ pathname: item.html_url }} target="_blank">
          <h2 className="follow__name">{item.login}</h2>
        </Link>
      </div>
    ));
  }

  return (
    <div className="follow container">
      <h2 className="follow__section-title">{props.title}</h2>
      <div className={wrapper}>{items}</div>
    </div>
  );
}
