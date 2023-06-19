import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { reservedRocket, leavedRocket } from '../features/rockets/rocketsSlice';

const Rocket = () => {
  const data = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const [leave, setLeave] = useState(true);

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
                          <button
                            type="button"
                            className="rocket-btn"
                            onClick={() => {
                              if (leave) {
                                setLeave((previousState) => !previousState);
                                dispatch(reservedRocket(item.id));
                              } else {
                                setLeave((previousState) => !previousState);
                                dispatch(leavedRocket(item.id));
                              }
                            }}
                          >
                            {item.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                          </button>
                        </div>
                      </li>
                    ))
                  }
      </ul>
    </div>
  );
};

export default Rocket;
