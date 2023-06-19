import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { fetchRockets } from './features/rockets/rocketsSlice';
import { fetchMissions } from './features/missions/missionsSlice';
import MyProfile from './components/MyProfile';
import Mission from './components/Mission';
import Main from './components/Main';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  });

  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<MyProfile />} />
        <Route path="/missions" element={<Mission />} />
      </Route>
    </Routes>
  );
}

export default App;
