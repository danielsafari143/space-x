import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocket: [],
};

const endpoint = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rocket/fetchRocket', async () => {
  try {
    const data = await axios.get(endpoint);
    return data.data;
  } catch (error) {
    return error;
  }
});

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserved: (state, action) => {
      const revId = action.payload;
      state.rocket = state.rocket.map((rocket) => (rocket.id === revId
        ? { ...rocket, reserved: true } : rocket));
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const data = action.payload;
      state.rocket = [];
      data.forEach((item) => {
        state.rocket.push({
          id: item.id,
          rocket_name: item.name,
          description: item.description,
          flickr_images: item.flickr_images,
        });
      });
    });
  },
});

export const { reserved } = rocketsSlice.actions;

export default rocketsSlice.reducer;
