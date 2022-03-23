const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ingredientSchema = new Schema(
    {
        ingredientName: {
            type: String,
            required: true,
            maxlength: 280
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = ingredientSchema;
