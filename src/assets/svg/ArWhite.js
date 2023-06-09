import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../styles/ratios';

let {widthPixel, heightPixel} = ratios;

const ArWhite = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={widthPixel(14)}
    height={widthPixel(22)}
    viewBox="0 0 14 22"
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.76}
      d="M11.893 20.9a.42.42 0 0 1-.287-.112L1.418 11.169a.376.376 0 0 1-.118-.271c0-.102.043-.2.118-.272l10.188-9.614a.424.424 0 0 1 .575 0 .369.369 0 0 1 0 .543l-9.9 9.343 9.9 9.347a.369.369 0 0 1 0 .542.419.419 0 0 1-.288.113Z"
    />
  </Svg>
);
export default ArWhite;
