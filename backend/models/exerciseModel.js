const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    equipment: [
        {
            equipmentName: {
                type: String,
            },
            equipmentImage: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    }
                }
            ],
        }
    ],
    execution: [
        {
            executionName: {
                type: String,
            },
            executionImage: [
                {
                    public_id: {
                        type: String,
                    },
                    url: {
                        type: String,
                    }
                }
            ],
        }
    ],
    AKA: {
        type: String,
    },
    position: {
        type: String,
    },
    howTo: [
        {
            type: String,
        }
    ],
    notes: [
        {
            type: String,
        }
    ],
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('exercise ', exerciseSchema)