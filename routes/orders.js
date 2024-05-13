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
    const {
      orderName,
      materialShelf,
      priority,
      urgency,
      orderManager,
      activity,
    } = req.body;
    const {
      ricezioneAlluminio,
      ricezioneVetri,
      taglio,
      lavorazione,
      assemblaggio,
      installazioneVetri,
      imballaggio,
      trasporto,
      consegnaInstallazione,
    } = activity;

    const order = new Order({
      orderName,
      materialShelf,
      priority,
      urgency,
      orderManager,
      activity: {
        ricezioneAlluminio: {
          expire: ricezioneAlluminio.expire,
          status: ricezioneAlluminio.status,
          completed: ricezioneAlluminio.completed,
          target: ricezioneAlluminio.target,
          activityManager: ricezioneAlluminio.activityManager,
          note: ricezioneAlluminio.note,
        },
        ricezioneVetri: {
          expire: ricezioneVetri.expire,
          status: ricezioneVetri.status,
          completed: ricezioneVetri.completed,
          target: ricezioneVetri.target,
          activityManager: ricezioneVetri.activityManager,
          note: ricezioneVetri.note,
        },
        taglio: {
          expire: taglio.expire,
          status: taglio.status,
          completed: taglio.completed,
          target: taglio.target,
          activityManager: taglio.activityManager,
          note: taglio.note,
        },
        lavorazione: {
          expire: lavorazione.expire,
          status: lavorazione.status,
          completed: lavorazione.completed,
          target: lavorazione.target,
          activityManager: lavorazione.activityManager,
          note: lavorazione.note,
        },
        assemblaggio: {
          expire: assemblaggio.expire,
          status: assemblaggio.status,
          completed: assemblaggio.completed,
          target: assemblaggio.target,
          activityManager: assemblaggio.activityManager,
          note: assemblaggio.note,
        },
        installazioneVetri: {
          expire: installazioneVetri.expire,
          status: installazioneVetri.status,
          completed: installazioneVetri.completed,
          target: installazioneVetri.target,
          activityManager: installazioneVetri.activityManager,
          note: installazioneVetri.note,
        },
        imballaggio: {
          expire: imballaggio.expire,
          status: imballaggio.status,
          completed: imballaggio.completed,
          target: imballaggio.target,
          activityManager: imballaggio.activityManager,
          note: imballaggio.note,
        },
        trasporto: {
          expire: trasporto.expire,
          status: trasporto.status,
          completed: trasporto.completed,
          target: trasporto.target,
          activityManager: trasporto.activityManager,
          note: trasporto.note,
        },
        consegnaInstallazione: {
          expire: consegnaInstallazione.expire,
          status: consegnaInstallazione.status,
          completed: consegnaInstallazione.completed,
          target: consegnaInstallazione.target,
          activityManager: consegnaInstallazione.activityManager,
          note: consegnaInstallazione.note,
        },
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
