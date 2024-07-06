var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/Order");
const Archived = require("../models/Archived");

const areAllActivitiesCompleted = (activities) => {
  return Object.values(activities).every(
    (activity) => activity.status === "Completato"
  );
};

const moveOrderToArchive = async (orderId) => {
  try {
    // Trova l'ordine nella collezione ORDERS
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error("Ordine non trovato");
    }
    // Verifica che tutte le attività siano completate
    if (!areAllActivitiesCompleted(order.activity)) {
      throw new Error(
        "Ordine non completato e quindi non può essere archiviato"
      );
    }
    // Crea un nuovo documento nella collezione ARCHIVE con i dati dell'ordine
    const archivedOrder = new Archived(order.toObject());
    await archivedOrder.save();
  } catch (error) {
    console.error("Error moving order to archive:", error);
    throw error; // Rilancia l'errore per essere gestito nel router
  }
};

router.post("/:id", async (req, res) => {
  const orderId = req.params.id;
  try {
    await moveOrderToArchive(orderId);
    await Order.findByIdAndDelete(orderId);
    res.status(200).send(`Ordine ${orderId} archiviato con successo`);
    return;
  } catch (error) {
    console.error(
      `Errore durante l'archiviazione dell'ordine ${orderId}:`,
      error.message
    );
    if (
      error.message ===
      "Ordine non completato e quindi non può essere archiviato"
    ) {
      res.status(400).send(error.message);
      return;
    } else if (error.message === "Ordine non trovato") {
      res.status(404).send(error.message);
      return;
    } else {
      res
        .status(500)
        .send("Errore durante l'archiviazione dell'ordine: " + error.message);
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const archivedOrders = await Archived.find();
    res.status(200).send(archivedOrders);
    return;
  } catch (error) {
    console.error(
      "Errore durante la ricerca degli ordini archiviati:",
      error.message
    );
    res.status(500).send("Errore durante la ricerca degli ordini archiviati");
    return;
  }
});

router.get("/:id", async (req, res) => {
  const orderId = req.params.id;
  try {
    const archivedOrder = await Archived.findById(orderId);
    if (!archivedOrder) {
      throw new Error("Ordine archiviato non trovato");
    }
    res.status(200).send(archivedOrder);
    return;
  } catch (error) {
    console.error(
      `Errore durante la ricerca dell'ordine archiviato ${orderId}:`,
      error.message
    );
    if (error.message === "Ordine archiviato non trovato") {
      res.status(404).send(error.message);
      return;
    } else {
      res.status(500).send("Errore durante la ricerca dell'ordine archiviato");
      return;
    }
  }
});

router.delete("/:id", async (req, res) => {
  const orderId = req.params.id;
  try {
    const deletedOrder = await Archived.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      throw new Error("Ordine archiviato non trovato");
    }
    res.status(200).send(`Ordine archiviato ${orderId} eliminato con successo`);
    return;
  } catch (error) {
    console.error(
      `Errore durante l'eliminazione dell'ordine archiviato ${orderId}:`,
      error.message
    );
    if (error.message === "Ordine archiviato non trovato") {
      res.status(404).send(error.message);
      return;
    } else {
      res
        .status(500)
        .send("Errore durante l'eliminazione dell'ordine archiviato");
      return;
    }
  }
});

module.exports = router;

return;
