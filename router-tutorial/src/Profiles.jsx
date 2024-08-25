import { NavLink, Outlet } from 'react-router-dom';

import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : 'black',
                background: isActive ? 'black' : 'white',
              };
            }}
            to="/profiles/velopert"
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : 'black',
                background: isActive ? 'black' : 'white',
              };
            }}
            to="/profiles/gildong"
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
