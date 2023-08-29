const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

const create = async (req, res) => {
  // Baby step...
  //console.log("Body: ", req.body);
  // res.json(req.body);

  try {
    const user = await User.create(req.body);
    const token = createJWT(user);

    res.json(token);
  } catch (error) {
    // console.log(error);
    res.status(400).json(error);
  }
};

const signIn = async (req, res) => {
  try {
    //console.log("Body for login", req.body);

    const user = await User.findOne({ email: req.body.email });
    console.log("Did we find one??", user);

    if (!user) {
      //Did not find a user
      res.status(400).json({ msg: err.message, reason: "Bad Credentials" });
    }
    const match = await bycrypt.compare(req.body.password, user.password);

    if (match) {
      console.log("Good sign in");
      const token = createJWT(user);
      res.json(token);
    } else {
      console.log("Bad sign in");
      throw new Error();
      // res.status(400).json({ msg: error.message, reason: "Bad Credentials" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message, reason: "Bad Credentials" });
  }
};

function createJWT(user) {
  return jwt.sign(
    //datapayload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  console.log(req.exp);
  res.json(req.exp);
}

module.exports = { create, signIn, checkToken };
