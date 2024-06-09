var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const Order = require("../models/Order");
const Archived = require("../models/Archived");



const moveOrderToArchive = async (orderId) => {
    try {
        // Trova l'ordine nella collezione ORDERS
        const order = await Order.findById(orderId);
        if (!order) {
            throw new Error('Ordine non trovato');
        }

        // Crea un nuovo documento nella collezione ARCHIVE con i dati dell'ordine
        const archivedOrder = new Archived(order.toObject());
        await archivedOrder.save();

        console.log('Ordine archiviato con successo');
    } catch (error) {
        console.error('Error moving order to archive:', error);
    }
};


router.post('/:id', async (req, res) => {
    const orderId = req.params.id;
    try {
        await moveOrderToArchive(orderId);
        res.status(200).send('Order archived successfully');
    } catch (error) {
        res.status(500).send('Error archiving order: ' + error.message);
    }
});

module.exports = router;
