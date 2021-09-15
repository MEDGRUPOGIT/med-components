/**
 *  Generates the color classes for the component.
 */
export const generateMedColor = (color, cssClassMap) => {
  if (typeof color === 'string' && color.length > 0) {
    const colorIdentifier = color.split('-');
    if (colorIdentifier[0] === 'neutral') {
      return Object.assign({ 'med-color-neutral': true, [`med-color-${color}`]: true }, cssClassMap);
    }
    else if (colorIdentifier[0] === 'fb') {
      return Object.assign({ 'med-color-feedback': true, [`med-color-${color}`]: true }, cssClassMap);
    }
    else {
      return Object.assign({ 'med-color': true, [`med-color-${color}`]: true }, cssClassMap);
    }
  }
  else {
    return cssClassMap;
  }
};
