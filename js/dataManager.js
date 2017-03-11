;
var dataManager = (function(window, undefined) {
    var Q = new Object();

    Q.getArray = function(jsonObj, category, name) {
        var resultArr = [];

        for (var i = 0; i < jsonObj.length; i++) {

            if (name) {
                if (jsonObj[i][category] === name) {

                    var obj = jsonObj[i];
                    resultArr = Object.values(obj);
                    resultArr.pop();
                }
            } else {
                resultArr.push(jsonObj[i][category]);
            }

        }

        return resultArr;
    };

    Q.getValueByKey = function(jsonObj, category, key) {
        var result;

        for (var i = 0; i < jsonObj.length; i++) {

            if (jsonObj[i]["category"] === category) {

                var obj = jsonObj[i];
                result = obj[key];
            }
        }

        return result;

    };

    Q.calculateRate = function(yearArr, valueArr, endYear) {
        var rate = 0.00,
            index = 0,
            duration = 2,
            startValue, midValue, endValue,
            rate0, rate1;


        index = $.inArray(endYear, yearArr);

        startValue = valueArr[index - duration];
        midValue = valueArr[index - duration + 1];
        endValue = valueArr[index];

        rate0 = (midValue - startValue) / startValue;
        rate1 = (endValue - midValue) / midValue;

        rate = (rate0 + rate1) / 2;

        return rate;
    };

    Q.predictData = function(yearData, valueData, rate, targetYear) {
        var resultYearArr = yearData.slice(),
            resultValueArr = valueData.slice(),
            lastYear = yearData[yearData.length - 1],
            length = targetYear - lastYear,
            lastValue = valueData[valueData.length - 1],
            temp;

            // console.log(lastYear);
        for (var i = 0; i < length; i++) {
            temp = lastValue + lastValue*rate*(i+1);
            resultYearArr.push(lastYear + i + 1);
            resultValueArr.push(temp);
            
        }

        return [resultYearArr, resultValueArr];

    };
    return Q;
})(window)
