const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ingredientSchema = require('./Ingredient');

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: 'You need to leave a name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  recipeInstructions: {
    type: String,
    required: 'You need to leave instructions!',
    minlength: 1,
    maxlength: 1000,
    trim: true,
  },
  createdBy: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  ingredients: [ingredientSchema],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
},
{
  toJSON: {
    getters: true
  }
}
);

recipeSchema.virtual('ingredientCount').get(function() {
  return this.ingredients.length;
});

recipeSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
