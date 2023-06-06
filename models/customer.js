const { Schema, models, model } = require('mongoose');

const customerSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  phone: String,
  postal: Number,
  address: String,
  products: Array,
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: () => Date.now() },
});

const Customer = models.Customer || model('Customer', customerSchema);

export default Customer;
