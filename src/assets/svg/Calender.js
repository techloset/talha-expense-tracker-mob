import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const Calender = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={36}
    viewBox="0 0 38 36"
    fill="none"
    {...props}>
    <Rect width={37.4} height={35.2} x={0.4} y={0.1} fill="#F0F2FF" rx={8.8} />
    <Path
      fill="#FAAEAB"
      fillRule="evenodd"
      d="M15.483 10a.346.346 0 0 0-.309.352v1.011h-1.838c-1.06 0-1.936.873-1.936 1.936v9.998c0 1.063.875 1.936 1.936 1.936h11.36a1.94 1.94 0 0 0 1.931-1.936v-7.873a.26.26 0 0 0 0-.022V13.3a1.94 1.94 0 0 0-1.93-1.936h-1.898v-1.011a.346.346 0 1 0-.692 0v1.011h-6.24v-1.011a.346.346 0 0 0-.352-.352.33.33 0 0 0-.032 0Zm-2.147 2.055h1.838v1.011a.346.346 0 1 0 .693 0v-1.01h6.24v1.01a.347.347 0 1 0 .692 0v-1.01h1.898c.683 0 1.238.557 1.238 1.243v1.757H12.092V13.3c0-.686.561-1.244 1.244-1.244Zm-1.244 3.693h13.843v7.549c0 .686-.556 1.244-1.238 1.244H13.336a1.247 1.247 0 0 1-1.244-1.244v-7.549Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F9AFAB"
      d="M15.175 10.352h.274v-.006l-.274.006Zm0 1.011v.275h.274v-.275h-.274ZM11.4 15.375l.275.011v-.01H11.4Zm0 .027h.275v-.01l-.275.01Zm15.227.022-.275-.009v.009h.275Zm0-.022-.274-.015-.001.012v.012l.275-.009Zm0-.038h-.275v.016l.275-.016ZM22.8 11.363h-.275v.275h.275v-.275Zm0-1.011-.275-.005v.005h.275ZM22.447 10l.005.275-.005-.275Zm-.34.352h.275v-.005l-.275.005Zm0 1.011v.275h.275v-.275h-.275Zm-6.24 0h-.275v.275h.275v-.275Zm0-1.011-.275-.005v.005h.275ZM15.515 10l-.013.275h.018L15.514 10Zm-.032 0-.013-.274h-.009l-.008.001.03.273Zm-.309 2.055h.276v-.275h-.275v.275Zm0 1.011h.276-.275Zm.693 0h-.275.275Zm0-1.01v-.276h-.275v.275h.275Zm6.24 0h.275v-.276h-.275v.275Zm0 1.01h.275-.275Zm.692 0h-.275.275Zm0-1.01v-.276h-.275v.275h.275Zm3.136 3v.275h.275v-.275h-.275Zm-13.843 0h-.275v.275h.275v-.275Zm0 .692v-.275h-.275v.275h.275Zm13.843 0h.275v-.275h-.275v.275ZM15.453 9.727a.621.621 0 0 0-.553.63l.55-.011c-.001-.037.026-.068.063-.072l-.06-.547Zm-.553.625v1.011h.55v-1.011h-.55Zm.274.736h-1.838v.55h1.838v-.55Zm-1.838 0a2.22 2.22 0 0 0-2.21 2.21h.55c0-.91.75-1.66 1.66-1.66v-.55Zm-2.21 2.21v2.034h.55v-2.033h-.55Zm0 2.034v.043h.55v-.043h-.55Zm0 .032a.56.56 0 0 0 0 .049l.549-.021a.05.05 0 0 1 0-.006l-.55-.021Zm0 .038v7.895h.55v-7.895h-.55Zm0 7.895a2.22 2.22 0 0 0 2.21 2.21v-.55c-.91 0-1.66-.75-1.66-1.66h-.55Zm2.21 2.21h11.36v-.55h-11.36v.55Zm11.36 0a2.215 2.215 0 0 0 2.206-2.21h-.55c0 .912-.747 1.66-1.655 1.66v.55Zm2.206-2.21v-7.873h-.55v7.873h.55Zm0-7.865v-.038l-.55.017v.004l.55.018Zm0-.015a.592.592 0 0 0 0-.068l-.55.03a.05.05 0 0 1 0 .008l.55.03Zm0-.053V13.3h-.55v2.065h.55Zm0-2.065c0-1.214-.992-2.211-2.205-2.211v.55c.908 0 1.655.749 1.655 1.66h.55Zm-2.205-2.211h-1.898v.55h1.898v-.55Zm-1.623.275v-1.011h-.55v1.011h.55Zm0-1.007a.62.62 0 0 0-.182-.449l-.389.39a.071.071 0 0 1 .02.05l.55.01Zm-.182-.449a.621.621 0 0 0-.449-.182l.009.55c.019 0 .037.008.051.021l.389-.389Zm-.449-.182a.62.62 0 0 0-.436.19l.395.382a.071.071 0 0 1 .05-.022l-.009-.55Zm-.436.19a.621.621 0 0 0-.175.441l.55-.008c0-.02.006-.038.02-.051l-.395-.383Zm-.175.437v1.011h.55v-1.011h-.55Zm.275.736h-6.24v.55h6.24v-.55Zm-5.965.275v-1.011h-.55v1.011h.55Zm0-1.007a.621.621 0 0 0-.182-.449l-.39.39a.071.071 0 0 1 .022.05l.55.01Zm-.182-.449a.62.62 0 0 0-.45-.182l.01.55c.019 0 .037.008.05.021l.39-.389Zm-.432-.181a.62.62 0 0 0-.058 0l.026.55h.006l.026-.55Zm-2.192 2.604h1.838v-.55h-1.838v.55Zm1.563-.275v1.011h.55v-1.01h-.55Zm0 1.01a.62.62 0 0 0 .31.54l.276-.476a.07.07 0 0 1-.035-.062l-.55-.001Zm.31.54a.62.62 0 0 0 .623 0l-.276-.476a.071.071 0 0 1-.071 0l-.275.476Zm.623 0a.621.621 0 0 0 .31-.54l-.55.002a.07.07 0 0 1-.036.062l.276.476Zm.31-.539v-1.01h-.55v1.01h.55Zm-.275-.736h6.24v-.55h-6.24v.55Zm5.965-.275v1.011h.55v-1.01h-.55Zm0 1.01c0 .223.117.428.31.54l.275-.476a.071.071 0 0 1-.035-.062l-.55-.001Zm.31.54a.62.62 0 0 0 .622 0l-.276-.476a.071.071 0 0 1-.07 0l-.276.476Zm.622 0a.621.621 0 0 0 .31-.54l-.55.002a.071.071 0 0 1-.036.062l.276.476Zm.31-.539v-1.01h-.55v1.01h.55Zm-.275-.736h1.898v-.55h-1.898v.55Zm1.898 0c.53 0 .963.434.963.969h.55c0-.837-.678-1.519-1.513-1.519v.55Zm.963.969v1.757h.55V13.3h-.55Zm.275 1.482H12.092v.55h13.843v-.55Zm-13.568.275V13.3h-.55v1.757h.55Zm0-1.757c0-.534.438-.969.969-.969v-.55c-.834 0-1.519.68-1.519 1.519h.55Zm-.275 2.724h13.843v-.55H12.092v.55Zm13.568-.275v7.549h.55v-7.549h-.55Zm0 7.549a.967.967 0 0 1-.963.969v.55c.835 0 1.513-.682 1.513-1.52h-.55Zm-.963.969H13.336v.55h11.36v-.55Zm-11.361 0a.972.972 0 0 1-.969-.97h-.55c0 .84.685 1.52 1.519 1.52v-.55Zm-.969-.97v-7.548h-.55v7.549h.55Z"
    />
    <Path
      fill="#F95994"
      fillRule="evenodd"
      d="M16.105 21.122a1.283 1.283 0 1 0 0-2.567 1.283 1.283 0 0 0 0 2.567Zm5.99 0a1.283 1.283 0 1 0 0-2.567 1.283 1.283 0 0 0 0 2.567Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Calender;
