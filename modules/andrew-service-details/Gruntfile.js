// eslint-disable-next-line func-names
module.exports = function (grunt) {
  // grunt.initConfig({
  //   pkg: grunt.file.readJSON('package.json'),
  //   concat: {

  //   }
  // })
  grunt.registerTask('speak', function() {
    console.log("I'm speaking");
  });
  grunt.registerTask('yell', function () {
    console.log("I'm YELLING!");
  });

  // grunt.registerTask('s')

}
