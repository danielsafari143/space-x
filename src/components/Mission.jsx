import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../features/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.mission);
  return (
    <ul>
      {
                data.mission.map((item) => (
                  <li key={item.id}>
                    <p>{item.mission_name}</p>
                    <p>{item.description}</p>
                    <button type="button">Not a member</button>
                    <button type="button" onClick={() => dispatch(joinMission(item.id))}>Join Mission</button>
                  </li>
                ))
            }
    </ul>
  );
};

export default Mission;
