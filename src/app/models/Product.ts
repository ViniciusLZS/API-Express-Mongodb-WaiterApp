import {model, Schema} from 'mongoose';

export const Product = model('Product', new Schema({
  name: {
    type: String,
    requerid: true,
  },

  description: {
    type: String,
    requerid: true,
  },

  imagePath: {
    type: String,
    requerid: true,
  },

  price: {
    type: Number,
    requerid: true,
  },

  ingredients: {
    requerid: true,
    type: [{
      name: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      }
    }]
  },

  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  }
}));
