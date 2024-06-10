const mongoose = require("mongoose");

const archivedSchema = new mongoose.Schema({
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
    type: String,
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
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    ricezioneVetri: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    taglio: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    lavorazione: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    assemblaggio: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    installazioneVetri: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    imballaggio: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    trasporto: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
    consegnaInstallazione: {
      expire: { type: Date, default: Date.now, required: true },
      completed: { type: Date, default: null },
      status: {
        type: String,
        enum:["Completato"]
        // default: "Standby",
        // enum: ["Lavorazione", "Standby", "Bloccato", "Completato"],
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
        default: "",
      },
    },
  },
});

const Archived = mongoose.model("Archived", archivedSchema);

module.exports = Archived;