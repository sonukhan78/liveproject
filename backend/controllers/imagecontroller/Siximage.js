const Siximage = async (req, res) => {
  res.status(200).json(sixdata);
};
const sixdata = [
  {
    image:
      "https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-2.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-3.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-4.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-5.jpg.webp",
  },
  {
    image:
      "https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-6.jpg.webp",
  },
];
module.exports = {
  Siximage,
};
