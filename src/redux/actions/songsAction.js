import { createAsyncThunk } from '@reduxjs/toolkit';
import { callGetNewReleases, callGetFeaturedReleases, callGetCategories } from '../../services/songsService';
import { GET_NEW_RELEASES, GET_FEATURED_PLAYLIST, GET_CATEGORIES } from '../types/songsType';

export const getNewReleases = createAsyncThunk(GET_NEW_RELEASES, async () => {
  const newReleases = await callGetNewReleases();
  return newReleases;
});

export const getFeaturedReleases = createAsyncThunk(GET_FEATURED_PLAYLIST, async () => {
  const featuredReleases = await callGetFeaturedReleases();
  return featuredReleases;
});

export const getCategories = createAsyncThunk(GET_CATEGORIES, async () => {
  const categories = await callGetCategories();
  return categories;
});
