const users = require("../module/Usermodule3");

const getuser = async (req, res) => {
  try {
    let data = users.find({});
    if (!data) {
      res.status(404).json({ error: "user not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
};

const postuser = async (req, res) => {
  const { name, number, email, profile, student, employ, product } = req.body;

  if (!product || !profile || !student || !employ) {
    let data = await users.create({
      name,
      number,
      email,
    });
    res.status(200).json(data);
  } else {
    res.status(200).json("error some is worng");
  }
};

const findput = async (req, res) => {
  try {
    let data = await users.findById(req.params._id);
    if (!data) {
      res.status(404).json({ error: "data is missing" });
    }

    let result = await users.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (!result) {
      res.status.json({ error: "not update" });
    }
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteusre = async (req, res) => {
  try {
    const data = await users.findById(req.params._id);
    if (!data) {
      res.status(400).json({ error: "id is missimg" });
    }
    await data.remove();
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { postuser, findput, deleteusre, getuser };
