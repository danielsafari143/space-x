import { useSelector } from 'react-redux';

const Rocket = () => {
  const rockers = useSelector((state) => state.rockets);
  return (
    <ul>
      {rockers.rocket.map((rocket) => (
        <li key={rocket.id}>
          <p>{rocket.rocket_name}</p>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images} alt={rocket.rocket_name} />
        </li>
      ))}
    </ul>
  );
};

export default Rocket;
