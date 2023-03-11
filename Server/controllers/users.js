import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() }); // using uuid for different users

  res.send(`User added successfully`);
};

export const getUser = (req, res) => {
  const foundUser = users.filter((user) => user.id === req.params.id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id); // params => for single id
  res.send("User deleted successfully");
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.scanType = req.body.scanType;
  user.contact = req.body.contact;
  user.result = req.body.result;

  res.send("User updated successfully");
};
