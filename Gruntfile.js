// eslint-disable-next-line func-names
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    run: {
      server: {
        cmd: 'nodemon',
        args: ['server/index.js']
      },
    },
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('server', ['run:server']);

}
