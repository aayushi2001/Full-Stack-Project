import User from "../modal/user.js";

export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json({
      Success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({ message: `err in getting users ${err}` });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      Success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({ message: `err in creating user ${err}` });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json({
      Success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({ message: `err in getting single user ${err}` });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(201).json({
      Success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({ message: `err in deleteing user ${err}` });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(201).json({
      Success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({ message: `err in updating user ${err}` });
  }
};
