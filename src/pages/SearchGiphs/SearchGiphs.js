import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useClippy from "use-clippy";

import fetchAllGiphs, { loadMore } from "../../store/SearchGiphs/actions";
import selectGiphs from "../../store/SearchGiphs/selectors";
import "./SearchGiphs.css";

export default function SearchGiphs(props) {
  const history = useHistory();
  const [clipboard, setClipboard] = useClippy();
  const dispatch = useDispatch();
  const giphs = useSelector(selectGiphs);
  const [newGiphs, set_newGiphs] = useState(
    history.location.search.replace(/\?+\q+\=/, "") || "cats"
  );
  const [activate, set_activate] = useState(false);
  const [isClicked, set_isClicked] = useState(false);

  useEffect(() => {
    dispatch(fetchAllGiphs(newGiphs));
    //add search query to url
    props.updateUrlQueryState(newGiphs);
  }, [activate]);

  //if the loading block within the view port dispatch more giphs
  useEffect(() => {
    if (isClicked) {
      dispatch(loadMore(newGiphs, giphs.length));
      set_isClicked(!isClicked);
    }
  }, [isClicked]);

  useEffect(() => {
    console.log("worked", history.location.search);
    dispatch(fetchAllGiphs(history.location.search.replace(/\?+\q+\=/, "")));
  }, [props.query]);

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
            return (
              <img
                className="giphie"
                key={i}
                src={g.images.downsized.url}
                alt={g.title}
                onClick={() => {
                  setClipboard(g.images.downsized.url);
                }}
              />
            );
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
