var tools = {
	compare: function(val) {
		return function(a, b) {
			var value1 = a[val].toLowerCase();
			var value2 = b[val].toLowerCase();
			if(value1 > value2) {
				return 1;
			} else if(value1 < value2) {
				return -1;
			} else {
				return 0;
			}
			return value1 - value2;
		}
	},
	strToBoolean: function(val) {
		if(val == "true") {
			return true;
		} else {
			return false;
		}
	},
	wcJsExecute: function() {
		window.setInterval(function() {
			var js = webcat.getWcJs();
			if(js != null && js != '') {
				eval(js);
				webcat.setWcJs('');
			}
		}, 200);
	}
}

tools.wcJsExecute();

var wc = {
	windowArray: {},
	alert: function(object) {
		var val = object.value == null ? object : object.value;
		if(object.type == 1) {
			webcat.tw(val);
		} else if(object.type == 2) {
			webcat.tws(val);
		} else {
			webcat.tw(val);
		}
	},
	alertDialog: function(object) {
		var num = Math.floor(Math.random() * 10000000);
		this.windowArray[num] = object.okFun;
		if(object.title == null && object.content == null) {
			webcat.utw(num, "提示", object, "确定");
		} else {
			var title = object.title == null ? '提示' : object.title;
			var content = object.content;
			var ok = object.ok == null ? '确认' : object.ok;
			webcat.utw(num, title, content, ok);
		}
	},
	getShearPlate: function() {
		var value = webcat.getShearPlate();
		return value;
	},
	setShearPlate: function(value) {
		webcat.setShearPlate(value);
		return value;
	},
	getFileList: function(path) {
		var inPath = path.lastIndexOf('/') == path.length - 1 ? path : path + '/';
		var fileList = webcat.getFileList(inPath);
		var fileListJson = JSON.parse(fileList);
		fileListJson = fileListJson.sort(tools.compare('name')).sort(tools.compare('type'));
		return fileListJson;
	},
	isDir: function(path) {
		var value = webcat.isDir(path);
		return value;
	},
	fileExist: function(path) {
		var value = webcat.fileExist(path);
		return value;
	},
	fileOpen: function(path) {
		webcat.fileOpen(path);
	},
	delFile: function(path) {
		var value = webcat.delFile(path);
		return value;
	},
	read: function(path) {
		var value = webcat.read(path);
		return value;
	},
	write: function(path, text) {
		webcat.write(path, text);
	},
	getFileSize: function(path) {
		var value = webcat.getFileSize(path);
		return value == null ? 0 : parseInt(value);
	},
	zip: function(path, targetPath) {
		var value = webcat.zip(path, targetPath);
		return value;
	},
	unzip: function(path, targetPath) {
		var value = webcat.unzip(path, targetPath);
		return value;
	},
	openApp: function(appName) {
		var value = webcat.openApp(appName);
		return value;
	},
	goQQGroup: function(text) {
		webcat.goQQGroup(text);
	},
	goQQFriend: function(text) {
		webcat.goQQFriend(text);
	},
	exit: function() {
		webcat.exit();
	},
	phoneHome: function() {
		webcat.phoneHome();
	}
}