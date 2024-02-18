const imagesContextDay = require.context('./icons/day', false, /\.png$/);
const imagesContextNight = require.context('./icons/night', false, /\.png$/);

const createImageMap = (context) =>
  context.keys().reduce((imagesMap, imagePath) => {
    // Extract the file name without './' and '.png'
    const imageName = imagePath.replace('./', '').replace('.png', '');

    // eslint-disable-next-line no-param-reassign
    imagesMap[imageName] = context(imagePath);

    return imagesMap;
  }, {});

const icons = {
  day: createImageMap(imagesContextDay),
  night: createImageMap(imagesContextNight),
};

// Example of how to access an image
// const dayIcon = icons.day['123'];
// const nightIcon = icons.night['456'];

export default icons;
