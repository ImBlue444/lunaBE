const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderName: {
    type: String,
    required: true,
    unique: true,
  },
  materialShelf: {
    type: String,
    required: true,
    unique: false,
  },
  priority: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  urgency: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  orderManager: {
    type: String,
    required: true,
    enum: [
      "A.Cappello",
      "L.Cappello",
      "C.Toia",
      "M.Cappello",
      "F.Cusimano",
      "G.Cusimano",
      "M.Camarotta",
      "Rostick",
      "N.Blay",
      "P.Zanda",
    ],
  },
  activity: {
    ricezioneAlluminio: {
      isEnabled: {
        type: Boolean,
        required: true,
      },
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },

      note: {
        type: String,
        required: false,
      },
    },
    ricezioneVetri: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
    taglio: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
    lavorazione: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
    assemblaggio: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
    installazioneVetri: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
    imballaggio: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
    trasporto: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
    consegnaInstallazione: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum: ["lavorazione", "standby", "bloccato", "completato"],
      },
      target: {
        type: String,
        enum: ["ok", "anticipo", "ritardo"],
      },
      activityManager: {
        type: String,
        required: true,
        enum: [
          "A.Cappello",
          "L.Cappello",
          "C.Toia",
          "M.Cappello",
          "F.Cusimano",
          "G.Cusimano",
          "M.Camarotta",
          "Rostick",
          "N.Blay",
          "P.Zanda",
        ],
      },
      note: {
        type: String,
        required: false,
      },
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
