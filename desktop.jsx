import get from 'lodash/fp/get';
import { parse } from './helpers.jsx';

export const command = 'sh yabai-status-bar/scripts/desktop.sh';

export const refreshFrequency = 5000;

export const className = `
  bottom: 0;
  color: #a8a8a8;
  font-family: Helvetica Neue;

  .desktop {
    align-items: center;
    color: #a8a8a8;
    display: flex;
    font-family: Helvetica Neue;
    font-size: 14px;
    height: 23px;
    margin-left: 20px;
  }
`;

export const render = ({ output }) => {
  let data = parse(output);

  return (
    <div className="desktop">
      <p>{get('date_time')(data)}</p>
    </div>
  );
};
