/* eslint-disable func-names */
// eslint-disable-next-line func-names

const webpackProdConfig = require('./webpack.prod.js');
const webpackDevConfig = require('./webpack.dev.js');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    run: {
      seed: {
        cmd: 'node',
        args: [
          'database/seed.js',
        ],
      },
      server: {
        cmd: 'nodemon',
        args: ['server/server.js']
      },
    },

    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackProdConfig,
      dev: Object.assign({ watch: true }, webpackDevConfig),
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('prod', ['run:seed', 'webpack:prod', 'run:server']);

  grunt.registerTask('dev', ['run:seed', 'webpack:dev']);
  grunt.registerTask('server', ['run:server']);
};
