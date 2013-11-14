module.exports = function(grunt) {

  var IMAGE_OPT_LEVEL = 7;

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    secrets: grunt.file.readJSON('secrets.json'),
    imagemin: {
      optimize: {
        options: {
          optimizationLevel: IMAGE_OPT_LEVEL
        },
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['img/*.{png|gif|jpg}', 'img/**/*'],
          dest: 'dist/'
        }]
      }
    },
    less: {

    },
    rsync: {
      options: {
        args: ['--verbose', '-r'],
        exclude: ['.git*', '.DS*'],
        recursive: true
      },
      prod: {
        options: {
          src: 'app/',
          dest: '<%= secrets.rsync.prod.dest %>',
          host: '<%= secrets.rsync.prod.host %>'
        }
      }
    }
  });

  grunt.registerTask('deploy', ['rsync']);

  grunt.registerTask('default', []);

};
