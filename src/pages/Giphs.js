import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchAllGiphs from "../store/giphs/actions";
import selectGiphs from "../store/giphs/selectors";

export default function Giphs() {
  const dispatch = useDispatch();
  const giphs = useSelector(selectGiphs);
  const [newGiphs, set_newGiphs] = useState(null);
  const [activate, set_activate] = useState(false);

  useEffect(() => {
    dispatch(fetchAllGiphs(newGiphs));
  }, [activate]);

  console.log("data", giphs);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          set_activate(!activate);
        }}
      >
        <label>Serch for giphs</label>
        <input
          type="text"
          placeholder="type anything"
          onChange={(e) => {
            set_newGiphs(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      {giphs &&
        giphs.map((g, i) => {
          return <img key={i} src={g.images.downsized.url} />;
        })}
    </div>
  );
}
