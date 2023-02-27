// des userAuth user nwe user
// routes post /api/userAuth
//access public
const ragisteruser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password){
    throw new Error("please add all fields");
  }
  
  res.json({ message: req.body });
};
const loginUser = (req, res) => {
  res.json({ message: "please add a user" });
};

const getme = (req, res) => {
  res.json({ message: "please add a user" });
};
module.exports = {
  ragisteruser,
  loginUser,
  getme,
};
