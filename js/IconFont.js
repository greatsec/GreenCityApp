/**
 * IconFont icon set component.
 * Usage: <IconFont name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  "back": 58881,
  "right": 58882,
  "profile": 58880,
  "selection": 58889,
  "lightfill": 58886,
  "light": 58883,
  "rankfill": 58887,
  "rank": 58884,
  "people": 58890,
  "command": 58891,
  "videofill": 58888,
  "video": 58885
};

let IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;
