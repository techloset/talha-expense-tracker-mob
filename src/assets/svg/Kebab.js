import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../styles/ratios';

let {widthPixel, heightPixel} = ratios;

const Kebab = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={widthPixel(5)}
    height={widthPixel(24)}
    fill="none"
    viewBox="0 0 5 24"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M4.7 3A2.2 2.2 0 1 1 .3 3a2.2 2.2 0 0 1 4.4 0Zm0 8.8a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0Zm-2.2 11a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      d="M2.5 5.45A2.45 2.45 0 0 0 4.95 3h-.5A1.95 1.95 0 0 1 2.5 4.95v.5ZM.05 3A2.45 2.45 0 0 0 2.5 5.45v-.5A1.95 1.95 0 0 1 .55 3h-.5ZM2.5.55A2.45 2.45 0 0 0 .05 3h.5A1.95 1.95 0 0 1 2.5 1.05v-.5ZM4.95 3A2.45 2.45 0 0 0 2.5.55v.5A1.95 1.95 0 0 1 4.45 3h.5ZM2.5 14.25a2.45 2.45 0 0 0 2.45-2.45h-.5a1.95 1.95 0 0 1-1.95 1.95v.5ZM.05 11.8a2.45 2.45 0 0 0 2.45 2.45v-.5A1.95 1.95 0 0 1 .55 11.8h-.5ZM2.5 9.35A2.45 2.45 0 0 0 .05 11.8h.5A1.95 1.95 0 0 1 2.5 9.85v-.5Zm2.45 2.45A2.45 2.45 0 0 0 2.5 9.35v.5a1.95 1.95 0 0 1 1.95 1.95h.5Zm-.5 8.8a1.95 1.95 0 0 1-1.95 1.95v.5a2.45 2.45 0 0 0 2.45-2.45h-.5ZM2.5 18.65a1.95 1.95 0 0 1 1.95 1.95h.5a2.45 2.45 0 0 0-2.45-2.45v.5ZM.55 20.6a1.95 1.95 0 0 1 1.95-1.95v-.5A2.45 2.45 0 0 0 .05 20.6h.5Zm1.95 1.95A1.95 1.95 0 0 1 .55 20.6h-.5a2.45 2.45 0 0 0 2.45 2.45v-.5Z"
    />
  </Svg>
);
export default Kebab;
