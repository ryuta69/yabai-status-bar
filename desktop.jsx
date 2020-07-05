import get from 'lodash/fp/get';
import Wifi from './components/wifi.jsx';
import Battery from './components/battery.jsx';
import { parse } from './helpers.jsx';

export const command = 'sh yabai-status-bar/scripts/desktop.sh';

export const refreshFrequency = 5000;

export const className = `
  bottom: 0;
  color: #a8a8a8;
  width: 100%;
  background-color: #0A0E14;
  opacity: 0.8;
  font-family: HackNerdFontComplete-Italic;

  .desktop {
    align-items: center;
    color: #a8a8a8;
    display: flex;
    font-family: Helvetica Neue;
    font-size: 14px;
    height: 23px;
    margin-left: 20px;
  }

  .right-bar {
    align-items: center;
    color: #a8a8a8;
    display: flex;
    font-family: Helvetica Neue;
    font-size: 14px;
    height: 23px;
    position: relative;
    right: 0;
  }

  .right-bar > div {
    margin-right: 20px;
  }
`;

export const render = ({ output }) => {
  let data = parse(output);

  return (
    <div className="desktop">
      <div>{get('date_time')(data)}</div>
      <Battery data={get('battery')(data)} />
      <Wifi data={get('wifi')(data)} />
    </div>
  );
};
