import { createSlice } from '@reduxjs/toolkit'
import { getNewReleases, getFeaturedReleases, getCategories } from '../actions/songsAction';

const initialState = {
  newReleases: [],
  getNewReleasesStatus: 'idle',
  featuredPlaylists: [],
  getFeaturedPlaylistsStatus: 'idle',
  categories: [],
  getCategoriesStatus: 'idle',
}

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    resetNewReleases: (state) => {
      state.newReleases = []
    },
    resetFeaturedPlaylists: (state) => {
      state.featuredPlaylists = []
    },
    resetCategories: (state) => {
      state.categories = []
    },
  },
  extraReducers: {
    [getNewReleases.pending]: (state) => {
      state.getNewReleasesStatus = 'loading';
    },
    [getNewReleases.error]: (state) => {
      state.getNewReleasesStatus = 'error';
    },
    [getNewReleases.fulfilled]: (state, action) => {
      state.getNewReleasesStatus = 'succeded';
      state.newReleases = action.payload;
    },
    [getFeaturedReleases.pending]: (state) => {
      state.getFeaturedPlaylistsStatus = 'loading';
    },
    [getFeaturedReleases.error]: (state) => {
      state.getFeaturedPlaylistsStatus = 'error';
    },
    [getFeaturedReleases.fulfilled]: (state, action) => {
      state.getFeaturedPlaylistsStatus = 'succeded';
      state.featuredPlaylists = action.payload
    },
    [getCategories.pending]: (state) => {
      state.getCategoriesStatus = 'loading';
    },
    [getCategories.error]: (state) => {
      state.getCategoriesStatus = 'error';
    },
    [getCategories.fulfilled]: (state, action) => {
      state.getCategoriesStatus = 'succeded';
      state.categories = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { resetNewReleases, resetFeaturedPlaylists, resetCategories } = songsSlice.actions

export default songsSlice.reducer