import axiosInstance from "../providers/axios";

export const callGetNewReleases = async () => {
  try {
    const { data } = await axiosInstance.get('/browse/new-releases');
    return data.albums.items;
  } catch (error) {
    console.log(error);
  }
};

export const callGetFeaturedReleases = async () => {
  try {
    const { data } = await axiosInstance.get('/browse/featured-playlists');
    return data.playlists.items;
  } catch (error) {
    console.log(error);
  }
};

export const callGetCategories = async () => {
  try {
    const { data } = await axiosInstance.get('/browse/categories');
    return data.categories.items;
  } catch (error) {
    console.log(error);
  }
};