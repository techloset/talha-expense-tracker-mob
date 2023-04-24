import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none">
    <Circle
      cx={9.799}
      cy={9.799}
      r={6.93}
      fill="#C7EEE6"
      transform="rotate(-44 9.799 9.799)"
    />
    <Path
      fill="#fff"
      d="M12.7 7.354c-.002-.018-.002-.028-.005-.037l-.01-.039-.013-.036c-.005-.014-.011-.024-.016-.035-.008-.015-.011-.025-.02-.033a.021.021 0 0 1-.005-.01l-.017-.023a.231.231 0 0 0-.025-.03c-.01-.01-.018-.018-.029-.026-.006-.007-.014-.012-.022-.017-.003-.003-.005-.005-.01-.007l-.027-.018c-.014-.009-.024-.012-.035-.017l-.035-.014c-.015-.006-.024-.01-.035-.011-.02-.004-.03-.008-.039-.008-.019 0-.032-.004-.046-.003l-3.157-.113a.371.371 0 0 0-.387.374c0 .214.174.395.388.402l2.223.081-4.361 4.211a.388.388 0 0 0-.001.548.389.389 0 0 0 .55.02L11.927 8.3l.003 2.208c0 .214.174.395.388.403a.373.373 0 0 0 .386-.373l-.004-3.141a.44.44 0 0 1-.002-.043Z"
    />
  </Svg>
);
export default SvgComponent;
