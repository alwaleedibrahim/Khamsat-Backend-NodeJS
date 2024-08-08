const messageModel = require('../models/messageMod');
//======================================= Creating new message ==================================================//
exports.createMessage= async (req, res) => {
    try {
      let newMessage = req.body;
      let message = await messageModel.create(newMessage);

      res.status(201).json({ message: "success creating message", data: message });

    } catch (err) {
      res.status(400).json({ message: "failed to create message" });
    }

  };