const Slider = async (req, res) => {
  res.status(200).json(sliderdata);
};
const sliderdata = [
  {
    img1: "https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp",
  },
  {
    img2: "https://preview.colorlib.com/theme/malefashion/img/hero/hero-2.jpg.webp",
  },
];
module.exports = {
  Slider,
};
