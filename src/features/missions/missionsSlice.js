import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  mission: [],
};

const endpoint = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('mission/fetchMissions', async () => {
  try {
    const data = await axios.get(endpoint);
    return data.data;
  } catch (error) {
    return error;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const data = action.payload;
      data.forEach((item) => {
        state.mission.push({
          id: item.mission_id,
          rocket_name: item.mission_name,
          description: item.description,
        });
      });
    });
  },

});

export default missionsSlice.reducer;
