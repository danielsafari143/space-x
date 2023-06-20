import { useSelector, useDispatch } from 'react-redux';
import { reservedRocket, leavedRocket } from '../features/rockets/rocketsSlice';

const Rocket = () => {
  const data = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <div className="rocket">
      <ul className="rocket-list">
        {
                    data.rocket.map((item) => (
                      <li key={item.id} className="rocket-item">
                        <img src={item.flickr_images} alt={item.rocket_name} className="rocket-img" />
                        <div className="rocket-container">
                          <p className="rocket-paragraph-first">
                            {item.rocket_name}
                          </p>
                          <p className="rocket-paragraph-first">
                            {item.reserved && <span className="reserved">Reserved</span>}
                            {` ${item.description}`}
                          </p>
                          {
                            item.reserved ? (
                              <button
                                type="button"
                                className="rocket-btn reserved-rocket-nt"
                                onClick={() => dispatch(leavedRocket(item.id))}
                              >
                                {item.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="rocket-btn reserved-rocket"
                                onClick={() => dispatch(reservedRocket(item.id))}
                              >
                                Reserve Rocket
                              </button>
                            )
                          }
                        </div>
                      </li>
                    ))
                  }
      </ul>
    </div>
  );
};

export default Rocket;
