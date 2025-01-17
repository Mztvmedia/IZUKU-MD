const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "@pp *Hey,* @user \n*Welcome to* @gname \n*Member count* : @count th" },
goodbye:{ type: String, default: "@pp *Another USER HAS LEFT US🙄.*\nUser: @user" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
economy: { type: String, default: "true" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
