;
var dataManager = (function(window, undefined) {
    var Q = new Object();

    Q.getArray = function(jsonObj, name) {
        var resultArr = [];

        for (var i = 0; i < jsonObj.length; i++) {

            if (jsonObj[i]["category"] === name) {

                var obj = jsonObj[i];
                resultArr = Object.values(obj);
                resultArr.pop();
            }
        }

        return resultArr;
    };

    Q.getValueByKey = function(jsonObj, category, key){
    	var result;

    	for (var i = 0; i < jsonObj.length; i++) {

            if (jsonObj[i]["category"] === category) {

                var obj = jsonObj[i];
                result = obj[key];
            }
        }

        return result;

    };
    return Q;
})(window)
