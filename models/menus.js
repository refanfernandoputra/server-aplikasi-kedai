'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    categorieid: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  menus.associate = function(models) {
    menus.belongsTo(models.categories,{
      as:'categories',
      foreignKey : 'categorieid'
    })
  };
  return menus;
};