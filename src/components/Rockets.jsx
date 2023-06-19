import { useDispatch, useSelector } from 'react-redux';
import { reserved } from '../features/rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockers = useSelector((state) => state.rockets);
  const reserveRocket = (id) => {
    dispatch(reserved(id));
  };

  return (
    <ul>
      {rockers.rocket.map((rocket) => (
        <li key={rocket.id}>
          <p>{rocket.rocket_name}</p>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images} alt={rocket.rocket_name} />
          <button
            type="submit"
            onClick={() => reserveRocket(rocket.id)}
          >
            Reserve rocket
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Rocket;
