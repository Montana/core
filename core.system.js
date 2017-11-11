var core = {};

var _self = core;
var $window = $(window);


core.loadModule = function(modules, data) {
	if($.isArray(modules)) {
		for(var i = 0; i < modules.length; ++ i) {
			core.system.initialiseModuleTreeFromString(core, modules[i], data);
		}
	}   else   {
		core.system.initialiseModuleTreeFromString(core, modules, data);
	}
	return this;
}

core.system = {
	
	version: '0.0.1',
	
	initialiseModuleTreeFromString: function(obj, str, data) {
		var $this = this;
		var orginal_str = str;
		var str = str.split(".");
		for (var i = 0; i < str.length; i++) {
			if(obj) {
				var obj = (obj[str[i]]) ? obj[str[i]] : false;
				if(typeof obj.init == 'function') {
					if(obj.bootLoaderStatus == false || obj.bootLoaderStatus == null) {
						obj.bootLoaderStatus = true;
						console.info("core.js | Initialising Module:", [str[i]], (str.length > 1 ? '['+orginal_str+']' : ''));
						if(data && data[str[i]]) {
							console.info("core.js | ====> Passing Data to Module:", [str[i]], '| ', data[str[i]]);
							_self.system.setData(obj, data[str[i]]);
						}
						obj.init();
					} else {
						console.warn("core.js | Skipping already initialised Module:", [str[i]], 'from module tree [', orginal_str, ']');
					}
				}   else   {
					console.warn("core.js | Could not find init function for:", [str[i]], orginal_str);
				}
			} else {
				console.warn("core.js | Module Not Found:", orginal_str, [str[i]]);
			}
		}
	},
	
	setData: function(obj, data) {
		var tempDefaults = obj.defaults;
		obj.data = $.extend(true, tempDefaults, data);
	}
}