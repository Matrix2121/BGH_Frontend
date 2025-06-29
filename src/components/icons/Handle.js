import * as React from "react";
import Svg, { ForeignObject, Path, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: div */
const SvgHandle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={15}
    fill="none"
    {...props}
  >
    <ForeignObject width={96} height={47} x={-16} y={-16}></ForeignObject>
    <Path
      // fill="#1C2339"
      // fillOpacity={0.8}
      d="M32 0C19.75 0 15.313 15 0 15h64C48.688 15 44.25 0 32 0"
      // data-figma-bg-blur-radius={16}
    />
    <Defs>
      <ClipPath id="handle_svg__a" transform="translate(16 16)">
        <Path d="M32 0C19.75 0 15.313 15 0 15h64C48.688 15 44.25 0 32 0" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHandle;
