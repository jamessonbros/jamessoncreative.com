module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    secrets: grunt.file.readJSON('secrets.json'),
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
          host: '<%= secrets.rsync.prod.host'
        }
      }
    }
  });

  grunt.registerTask('deploy', ['rsync']);

  grunt.registerTask('default', []);

};
