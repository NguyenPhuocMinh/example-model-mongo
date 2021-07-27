'use strict';

const mongoose = require('winext-repository').mongoose;
const Schema = mongoose.Schema;

module.exports = {
  name: 'UserModel',
  attributes: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    permissions: [String],
    roles: { type: Schema.Types.ObjectId, ref: 'RoleModel' },
    //filter
    slug: { type: String },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    createdBy: { type: String },
    updatedAt: { type: Date },
    updatedBy: { type: String },
  },
  options: {
    collection: 'users'
  }
}