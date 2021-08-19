/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewReleases,
  getFeaturedReleases,
  getCategories,
} from "../../../redux/actions/songsAction";
import "../styles/_discover.scss";

const Discover = () => {
  const dispatch = useDispatch();
  const {
    getNewReleasesStatus,
    newReleases,
    getFeaturedPlaylistsStatus,
    featuredPlaylists,
    getCategoriesStatus,
    categories,
  } = useSelector((state) => state.songsReducer);

  useEffect(() => {
    dispatch(getNewReleases());
    dispatch(getFeaturedReleases());
    dispatch(getCategories());
  }, []);

  return (
    <div className="discover">
      {getNewReleasesStatus === "succeded" && (
        <DiscoverBlock
          text="LANZAMIENTOS DE ESTA SEMANA"
          id="released"
          data={newReleases}
        />
      )}
      {getFeaturedPlaylistsStatus === "succeded" && (
        <DiscoverBlock
          text="LISTAS DESTACADAS"
          id="featured"
          data={featuredPlaylists}
        />
      )}
      {getCategoriesStatus === "succeded" && (
        <DiscoverBlock
          text="NAVEGAR"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      )}
    </div>
  );
};

export default Discover;
