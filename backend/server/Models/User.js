
const { MongoClient } = require("mongodb");

const Userschema = new MongoClient.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const UserModel = MongoClient.model("User", Userschema);

export { UserModel as User};
