import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => state.mission);
  const dataRocket = useSelector((state) => state.rockets);
  return (
    <div className="myprofile">
      <div className="missions">
        <h3>Missions</h3>
        {
           data.mission.map((item) => (item.reserved !== undefined && item.reserved ? <p key={item.id}>{item.mission_name}</p> : ''))
         }
      </div>
      <div className="rockets">
        <h3>Rockets</h3>
        {
           dataRocket.rocket.map((item) => (item.reserved !== undefined && item.reserved ? <p key={item.id}>{item.rocket_name}</p> : ''))
         }
      </div>
    </div>
  );
};

export default MyProfile;
