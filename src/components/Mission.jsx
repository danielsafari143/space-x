import { useSelector } from 'react-redux';

const Mission = () => {
  const data = useSelector((state) => state.mission);
  return (
    <ul>
      {
                data.mission.map((item) => (
                  <li key={item.id}>
                    <p>{item.rocket_name}</p>
                    <p>{item.description}</p>
                  </li>
                ))
            }
    </ul>
  );
};

export default Mission;
