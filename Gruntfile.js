module.exports = function (grunt){

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


     // watch
    //--------------------------------------------------------------
    // Watches for changed files and runs appropriate tasks

    watch: {
      markup: {
        files: ['./app/**/*.html', './app/assets/css/**/*.css'],
        tasks: ['copy:statics']
      },
      styles: {
        files: ['./app/assets/scss/*.scss'],
        tasks: ['compass']
      },
      images: {
        files: ['./app/assets/images/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      },
      scripts: {
        files: ['./app/assets/js/**/*.js'],
        tasks: ['jshint', 'concat:dev']
      }
    },



    // jshint, find errors in javascript code
    jshint: {
      options: {

      },
      all: [
        'Gruntfile.js',
        './app/assets/js/**/*.js',
        '!./app/assets/js/vendor/*',
        '!./app/assets/js/ugly/*'
      ]
    },

    // uglify
    uglify: {
      development: {
          files: [{
              expand: true,
              cwd: './app/assets/js/',
              src: '*.js',
              dest: './app/assets/js/ugly/',
          }]
      },
      options: {
        mangle: false
      },
    },

    // clean
    clean: {
       all: {
        files: [{
          dot: true,
          src: [
            'www/*'
          ]
        }]
      }
    },

    // concat
    concat: {
      options:{

      },
      dev: {
        src: [
          './app/assets/js/ugly/*.js'
        ],
        dest: './www/js/script.js'
      },
      vendor: {
        src: [
          './app//assets/js/vendor/jquery-2.1.1.min.js',
          './app//assets/js/vendor/angular.min.js',
          './app//assets/js/vendor/angular-route.min.js',
          './app//assets/js/vendor/angular-animate.min.js',
          './app//assets/js/vendor/angular-messages.min.js',
          './app//assets/js/vendor/bootstrap.min.js'
        ],
        dest: './www/js/vendors.js'
      }
    },

    // compass
    compass: {
      dist: {
          options: {
          sassDir: './app/assets/scss',
          cssDir: './www/css',
          outputStyle: 'compressed'
        }
      }
    },

    // imagemin
    // Optimizes images for web
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: './app/images/',
          src: ['**/*.{jpg,png}'],
          dest: 'www/images/'
        }]
      }
    },

    // html hint
    htmlhint: {
      templates:{
        options:{
          'attr-lower-case': true,
          'attr-value-not-empty': true,
          'tag-pair': true,
          'tag-self-close': true,
          'tagname-lowercase': true,
          'id-class-unique': true,
          'src-not-empty': true,
          'img-alt-required': true

        },
        src: ['./app/**/*.html']
      }
    },

    // copy over static files not moved in other tasks
    copy: {
      statics: {
        files: [
          {
            expand: true,
            cwd: './app/assets/css/fonts/',
            src: ['**'],
            dest: 'www/css/fonts/'
          },
          {
            expand: true,
            cwd: './app/assets/css/vendor/',
            src: ['**'],
            dest: 'www/css/vendor'
          },
          {
            expand: true,
            cwd: './app/partials/',
            src: ['**'],
            dest: 'www/partials'
          },
          {
            expand: true,
            cwd: './app/',
            src: ['index.html'],
            dest: 'www/'
          }
        ]
      }
    }

  });



  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask("default", [
      'clean',
      'jshint',
      'uglify',
      'compass',
      'concat:dev',
      'concat:vendor',
      'copy:statics',
      'imagemin'
    ]);
};