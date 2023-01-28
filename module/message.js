const { model, Schema } = require("mongoose");

const messageSchema = Schema({
  userName: String,
  message: String,
  //   data: Date.now(),
});

const Message = model("Message", messageSchema);

module.exports = Message;
