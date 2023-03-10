const employ = require("../module/employmodule");

const getemp = async (req, res) => {
  const data = await employ.find({});
  res.send(data);
};

// const findid = async (req, res) => {
//   const data = await employ.findById(req.params._id);
//   res.send(data);
// };

const postemp = async (req, res) => {
  const {
    // employid,
    employname,
    employnumber,
    employdob,
    employment,
    employaddress,
    employemail,
  } = req.body;
  const data = await employ.create({
    employname,
    employnumber,
    employemail,
    employaddress,
    employdob,
    employment,
    // employid,
  });
  res.send(data);
  console.log("=================>", data);

  res.status(201).json({
    employname: data.employname,
    employnumber: data.employnumber,
    employemail: data.employemail,
    employaddress: data.employaddress,
    employdob: data.employdob,
    employment: data.employment,
  });
};

const putemp = async (req, res) => {
  const data = await employ.findById(req.params._id);
  if (!data) {
    res.status(401).json({ massage: "id is not define" });
  }
  let updatedata = await employ.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  res.status(201).json(updatedata);
};

const deletemp = async (req, res) => {
  const data = await employ.findById(req.params._id);
  if (!data) {
    res.status(401).json({ massage: "id is not define" });
  }
  await data.remove();
  res.status(201).json({ massage: "data is delete" });
};

module.exports = {
  getemp,
  postemp,
  putemp,
  deletemp,
  // findid,
};
