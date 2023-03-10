const employ = require("../module/studentmodules/employmodule");
const studentcountry = require("../module/studentmodules/countrymodule");
const stdudentcourse = require("../module/studentmodules/coursemodule");
const studentsub = require("../module/studentmodules/studentmodule");
// const pro = require("../model/productModel")

const allapi = async (req, res) => {
  let stu = await stdudentcourse.find({});
  let sub = await studentsub.find({});
  let emp = await employ.find({});
  let stude = await studentcountry.find({});
  arr = [
    emp= {
      image: "https://wallpaperaccess.com/full/4322025.jpg",
      name: "emaploy",
      data: employ,
    },
    stude = {
      image:
        "https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
      name: "student",
      data: stude,
    },
    sub = {
      image:
        "https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
      name: "product",
      data: sub,
    },
  ];
  let x = [];
  x.push(emp);
  x.push(stude);
  x.push(stu);
  x.push(sub);
  res.send(x);
};

module.exports = { allapi };
