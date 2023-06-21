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
                  <tr key={item.id} data-testid="mission-test">
                    <td><p>{item.mission_name}</p></td>
                    <td><p>{item.description}</p></td>
                    <td>
                      {
                        item.reserved ? (<button type="button" className="member member-active">Active Member</button>)
                          : (<button type="button" className="member">Not a member</button>)
                      }
                    </td>
                    <td>
                      {
                        item.reserved ? (<button type="button" className="leave-btn" onClick={() => dispatch(leaveMission(item.id))}>Leave Mission</button>)
                          : (<button type="button" className="joined-btn" onClick={() => dispatch(joinMission(item.id))}>Join Mission</button>)
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
