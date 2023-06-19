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
  reducers: {
    joinMission: (state, action) => {
      const newArray = [...state.mission];
      state.mission.filter((item, index) => {
        if (action.payload === newArray[index].id) {
          const value = { ...item, reserved: true };
          newArray[index] = value;
          state.mission = newArray;
          return newArray;
        }
        return newArray;
      });
    },
    leaveMission: (state, action) => {
      const newArray = [...state.mission];
      newArray.filter((item, index) => {
        if (item.id === action.payload) {
          const value = { ...item, reserved: false };
          newArray[index] = value;
          state.mission = newArray;
          return newArray;
        }
        return newArray;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const data = action.payload;
      state.mission = [];
      data.forEach((item) => {
        state.mission.push({
          id: item.mission_id,
          mission_name: item.mission_name,
          description: item.description,
        });
      });
    });
  },

});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
