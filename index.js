var del = require('del');
var ncp = require('ncp').ncp;

var init_Haxe = {};

init_Haxe = (function(){}).prototype = {
	install : function (directory){
		var source = __dirname + "/../npm-haxe-vsc-template-files/template";
		var destination = directory ? (directory == "." ? process.cwd() : directory) : process.cwd();
		ncp(source, destination, function (err) {
			if (err) {
				return console.error(err);
			}
			del([
				destination+"**/.git*",
				destination+"build/*/*",
				destination+"targets/*/*",
				destination+"targets/#*"
			]).then( () => {
				console.log("Template successfully installed in " + destination);
			});
		});
	}
};

module.exports = init_Haxe;