'use strict';

const UserModel = require('./models/user-model');
const BoardModel = require('./models/board-model');
const RoleModel = require('./models/role-model');

const models = [
  UserModel,
  BoardModel,
  RoleModel
];

module.exports = models;