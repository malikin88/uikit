import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path d="M160,96v304.625C142.984,390.406,120.703,384,96,384c-53.016,0-96,28.656-96,64s42.984,64,96,64s96-28.656,96-64V256l288-96
	v144.625C463,294.406,440.688,288,416,288c-53,0-96,28.656-96,64s43,64,96,64s96-28.656,96-64V0L160,96z M192,224v-72.719
	l288-78.563V128L192,224z"/>
      <ellipse
        cx="36.9019"
        cy="50.5685"
        rx="1.79015"
        ry="2.60385"
        transform="rotate(-45 36.9019 50.5685)"
        fill="#DBCDF9"
      />
      <ellipse
        rx="1.79015"
        ry="2.60385"
        transform="matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)"
        fill="#DBCDF9"
      />
    </Svg>
  );
};

export default Icon;
