import { useSelector, useDispatch } from 'react-redux';
import { join, leave } from '../features/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mission);

  const joinMission = (id) => {
    dispatch(join(id));
  };

  const leaveMission = (id) => {
    dispatch(leave(id));
  };

  return (
    <ul>
      {
                data.mission.map((item) => (
                  <li key={item.id}>
                    <p>{item.rocket_name}</p>
                    <p>{item.description}</p>
                    {item.reserved ? (
                      <div>
                        <p>Active member</p>
                        <button
                          type="submit"
                          onClick={() => leaveMission(item.id)}
                        >
                          Leave mission
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p>Not a member</p>
                        <button
                          type="submit"
                          onClick={() => joinMission(item.id)}
                        >
                          Join mission
                        </button>
                      </div>
                    )}
                  </li>
                ))
            }
    </ul>
  );
};

export default Mission;
