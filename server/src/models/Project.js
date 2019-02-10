module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      title: DataTypes.STRING,
      desc: DataTypes.TEXT,
      img: DataTypes.TEXT,
      clay: DataTypes.STRING,
      weight: DataTypes.STRING,
      additives: DataTypes.STRING,
      length: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      depth: DataTypes.INTEGER,
      slip: DataTypes.STRING,
      slipDesc: DataTypes.STRING,
      dryStartDate: DataTypes.STRING,
      dryEndDate: DataTypes.STRING,
      dryConditions: DataTypes.TEXT,
      bisqueDesc: DataTypes.TEXT,
      glazeType: DataTypes.STRING,
      glazeApplication: DataTypes.STRING,
      glazeProcess: DataTypes.TEXT,
      FiringDesc: DataTypes.TEXT
    });
 
  return Project;
};
