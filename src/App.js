import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from './features/rockets/rocketsSlice';
import { fetchMissions } from './features/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  });

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
