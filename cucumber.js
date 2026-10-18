module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    paths: ['features/**/*.feature'],
    publishQuiet: true,
    format: ['progress'],
  },
};
