module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["u.filein.io"],
  },
};
const withVideos = require("next-videos");
const withImages = require('next-images')
module.exports = withVideos();

module.exports = withImages()