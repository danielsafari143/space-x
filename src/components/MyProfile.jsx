import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => state.mission);
  return (
    <div>
      <div className="mission">
        {
           data.mission.map((item) => (item.reserved !== undefined ? <p key={item.id}>{item.mission_name}</p> : ''))
         }
      </div>
    </div>
  );
};

export default MyProfile;
