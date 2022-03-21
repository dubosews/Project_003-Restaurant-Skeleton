const { Schema, model } = require('mongoose');

const MenuSchema = new Schema({
    mealName: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number
    },
});

const menuItem = model('Menu', MenuSchema);

module.exports = menuItem;