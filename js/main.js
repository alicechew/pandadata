;
(function(window, $, echarts, dataManager) {

    var pOption = {
        dotColor: "#dff0d8",
        lineColor: "#dff0d8"
    };
    $(".particle").particleground(pOption);
   


    // var testData;

    // $.getJSON('./data/emission.json', function(json) {
    //     testData = json;
    // });

    // console.log(testData);

    var yearData = [2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030,
        2031,
        2032,
        2033,
        2034,
        2035,
        2036,
        2037
    ];
    var concreteData = [0.96,
        1.92,
        2.88,
        3.84,
        4.8,
        5.76,
        6.72,
        7.68,
        8.64,
        9.6,
        10.56,
        11.52,
        12.48,
        13.44,
        14.4,
        15.36,
        16.32,
        17.28,
        18.24,
        19.2,
        20.16
    ]
    var woodData = [-1.5, -3, -4.5, -6, -7.5, -9, -10.5, -12, -13.5, -15, -16.5, -18, -19.5, -21, -22.5, -24, -25.5, -27, -28.5, -30, -31.5];

    var chart = echarts.init(document.getElementById("graph_container"));
    var option = {
        title: {
            text: "Greenhouse Gas Emissions",
            textAlign: "left",
            left: "30%"
        },
        tooltip: {},
        legend: {
            data: ["concrete", "wood"],
            top: 30
        },
        xAxis: {
            data: yearData
        },
        yAxis: {},
        color: ["#3c763d", "#d59b00"],
        series: [{
            name: "concrete",
            type: "bar",
            data: concreteData,
            animationDelay: function(idx) {
                return idx * 10;
            }
        }, {
            name: "wood",
            type: "bar",
            data: woodData,
            animationDelay: function(idx) {
                return idx * 10 + 100;
            }
        }],
        barGap: "-100%",
        dataZoom: {
            type: 'slider', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 0, // 左边在 10% 的位置。
            end: 100 // 右边在 60% 的位置。
        }
    };

    chart.setOption(option);
    chart.on("dataZoom", function(startValue, endValue){
    	console.log(startValue);
    });


})(window, jQuery, echarts, dataManager)
