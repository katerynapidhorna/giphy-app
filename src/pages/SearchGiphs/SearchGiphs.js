import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import fetchAllGiphs, { loadMore } from "../../store/SearchGiphs/actions";
import selectGiphs from "../../store/SearchGiphs/selectors";
import "./SearchGiphs.css";

export default function SearchGiphs(props) {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const giphs = useSelector(selectGiphs);
  const [newGiphs, set_newGiphs] = useState(props.Query || "cats");
  const [activate, set_activate] = useState(false);
  const [isClicked, set_isClicked] = useState(false);

  useEffect(() => {
    dispatch(fetchAllGiphs(newGiphs));
    //add search query to url
    props.updateState(newGiphs);
    console.log(props.Query);
  }, [activate, props.Query]);

  //if the loading block within the view port dispatch more giphs
  useEffect(() => {
    if (isClicked) {
      dispatch(loadMore(newGiphs, giphs.length));
      set_isClicked(!isClicked);
    }
  }, [isClicked]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //activate dispatch new giphs
          set_activate(!activate);
        }}
      >
        <input
          type="text"
          placeholder="type anything"
          onChange={(e) => {
            set_newGiphs(e.target.value);
          }}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="giph-container">
        {giphs &&
          giphs.map((g, i) => {
            return <img key={i} src={g.images.downsized.url} alt={g.title} />;
          })}
      </div>
      <div
        className="load-more"
        onClick={(e) => {
          set_isClicked(!isClicked);
        }}
      >
        {isClicked ? "Loading..." : "Load more"}
      </div>
    </div>
  );
}
