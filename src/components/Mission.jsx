import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { joinMission, leaveMission } from '../features/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const [leave, setLeave] = useState(true);

  const data = useSelector((state) => state.mission);
  return (
    <ul>
      {
                data.mission.map((item) => (
                  <li key={item.id}>
                    <p>{item.mission_name}</p>
                    <p>{item.description}</p>
                    <button type="button">Not a member</button>
                    <button
                      type="button"
                      onClick={() => {
                        if (leave) {
                          setLeave((previousState) => !previousState);
                          dispatch(joinMission(item.id));
                        } else {
                          setLeave((previousState) => !previousState);
                          dispatch(leaveMission(item.id));
                        }
                      }}
                    >
                      {item.reserved ? 'Leave mission' : 'Join Mission'}
                    </button>
                  </li>
                ))
            }
    </ul>
  );
};

export default Mission;
