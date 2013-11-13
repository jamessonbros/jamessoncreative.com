module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    secrets: grunt.file.readJSON('secrets.json'),
    imagemin: {
      optimize: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['img/*.{png|gif|jpg}', 'img/**/*'],
          dest: 'dist/'
        }]
      }
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
