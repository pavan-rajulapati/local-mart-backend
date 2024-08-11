const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: {
    area: { type: String },
    village: { type: String },
    city: { type: String },
    state: { type: String }
  },
  bankAccountDetails: {
    bankName: { type: String },
    accountNumber: { type: String },
    ifscCode: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('Seller', sellerSchema);
