import { useDispatch, useSelector } from 'react-redux';
import { cancel, reserved } from '../features/rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockers = useSelector((state) => state.rockets);

  const reserveRocket = (id) => {
    dispatch(reserved(id));
  };

  const cancelRocket = (id) => {
    dispatch(cancel(id));
  };

  return (
    <ul>
      {rockers.rocket.map((rocket) => (
        <li key={rocket.id}>
          {rocket.reserved ? (
            <div>
              <p>{rocket.rocket_name}</p>
              <p>
                <span>Reserved</span>
                {rocket.description}
              </p>
              <img src={rocket.flickr_images} alt={rocket.rocket_name} />
              <button
                type="submit"
                onClick={() => cancelRocket(rocket.id)}
              >
                Cancel reservation
              </button>
            </div>
          ) : (
            <div>
              <p>{rocket.rocket_name}</p>
              <p>{rocket.description}</p>
              <img src={rocket.flickr_images} alt={rocket.rocket_name} />
              <button
                type="submit"
                onClick={() => reserveRocket(rocket.id)}
              >
                Reserve rocket
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Rocket;
