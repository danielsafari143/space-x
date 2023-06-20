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
    reservedRocket: (state, action) => {
      const newArray = [...state.rocket];
      state.rocket.filter((item, index) => {
        if (action.payload === newArray[index].id) {
          const value = { ...item, reserved: true };
          newArray[index] = value;
          state.rocket = newArray;
          return newArray;
        }
        return newArray;
      });
    },
    leavedRocket: (state, action) => {
      const newArray = [...state.rocket];
      newArray.filter((item, index) => {
        if (item.id === action.payload) {
          const value = { ...item, reserved: false };
          newArray[index] = value;
          state.rocket = newArray;
          return newArray;
        }
        return newArray;
      });
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

export const { reservedRocket, leavedRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
