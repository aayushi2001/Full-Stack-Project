import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/aayushi", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected Successfully.");
    })
    .catch((err) => {
      console.log("Error Connectiong to the Database. Reason -: ", err);
    });
};
export default db;
