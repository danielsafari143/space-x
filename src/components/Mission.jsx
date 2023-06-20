import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../features/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();

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
                      {
                        item.reserved ? (<button type="button" onClick={() => dispatch(leaveMission(item.id))}>Leave Mission</button>)
                          : (<button type="button" onClick={() => dispatch(joinMission(item.id))}>Join Mission</button>)
                      }
                    </td>
                  </tr>
                ))
            }
      </table>
    </div>
  );
};

export default Mission;
