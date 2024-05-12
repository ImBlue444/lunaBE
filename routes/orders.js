var express = require("express");
var router = express.Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { orderName, materialShelf, priority, urgency, orderManager, activity} = req.body;
    const { ricezioneAlluminio, ricezioneVetri, taglio, lavorazione, assemblaggio, installazioneVetri, imballaggio, trasporto, consegnaInstallazione } = activity;
    
    const order = new Order({
      orderName,
      materialShelf,
      priority,
      urgency,
      orderManager,
      activity: {
        ricezioneAlluminio:{
          isEnabled,
          expire,        
          completed,
          target,
          activityManager,
          note,
        },
        ricezioneVetri:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
        taglio:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
        lavorazione:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
        assemblaggio:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
        installazioneVetri:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
        imballaggio:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
        trasporto:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
        consegnaInstallazione:{
          isEnabled,
          expire,
          completed,
          target,
          activityManager,
          note,},
      },
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
