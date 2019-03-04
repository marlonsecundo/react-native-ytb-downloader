import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={100} height={90} {...props}>
    <Path
      data-name="youtube"
      d="M88.664 48.901L4.814 88.892a3.366 3.366 0 0 1-4.815-3.038V3.371a3.366 3.366 0 0 1 4.888-3l83.849 42.491a3.366 3.366 0 0 1-.072 6.039z"
      fill="#f61c0d"
    />
  </Svg>
);

export default SvgComponent;
