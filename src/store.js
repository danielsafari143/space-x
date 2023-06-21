import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/rockets/rocketsSlice';
import missionsReducer from './features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionsReducer,
  },
});

export default store;
