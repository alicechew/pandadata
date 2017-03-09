;var dataManager = (function(window,undefined){
var Q = new Object();

Q.getJson = function(filePath){
	return JSON.parse(filePath);
};

return Q;

})(window)