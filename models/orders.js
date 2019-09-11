'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    menuId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    qty: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.transactions,{
      as:'transactions',
      foreignKey :'transactionId'
    })
    orders.belongsTo(models.menus,{
      as:'menus',
      foreignKey :'menuId'
  })
  };
  return orders;
};