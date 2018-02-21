
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['**/*.ts'],
            tasks: ['exec:run_tsc']
        },
        exec: {
            run_tsc: {
                cmd: 'tsc'
            }           
        }
    });
    // grunt.registerMultiTask('copy', function() {
    //     grunt.log.writeln(this.target + ': *' + this.data.ext);
    // });
    grunt.registerTask('default', ['watch']);
};

// module.exports = function(grunt) {
//     grunt.initConfig({
//         ts: {
//             options: {
//                 compiler: './node_modules/typescript/bin/tsc'
//             },
//             default: {
//                 src: ['./app/**/*.ts', "!node_modules/**/*.ts"],
//                 outDir: './wwwroot/',
//                 watch: "exec:run_tsc"
//             }
//         },
//         exec: {
//             run_tsc: {
//                 cmd: 'tsc'
//             }           
//         }
//     });
//     grunt.loadNpmTasks('grunt-ts');
//     grunt.registerTask('default', [ 'ts']);
// };