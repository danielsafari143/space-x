import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { joinMission, leaveMission } from '../features/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const [leave, setLeave] = useState(true);

  const data = useSelector((state) => state.mission);
  return (
    <div className="missionTable">
      <table>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {
                data.mission.map((item) => (
                  <tr key={item.id}>
                    <td><p>{item.mission_name}</p></td>
                    <td><p>{item.description}</p></td>
                    <td>
                      <button type="button">Not a member</button>
                    </td>
                    <td>
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
                    </td>
                  </tr>
                ))
            }
      </table>
    </div>
  );
};

export default Mission;
