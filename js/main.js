;
(function(window, $, echarts, dataManager) {



    /**
     *	set background
     **/
    var pOption = {
        dotColor: "#dff0d8",
        lineColor: "#dff0d8"
    };
    $(".particle").particleground(pOption);


    /**
     *	data
     **/
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

    var yearData95to15 = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
    var emissions = [{
        "1990": 57548.3,
        "1991": 57750.8,
        "1992": 57474.3,
        "1993": 57415.1,
        "1994": 59862.6,
        "1995": 59292.7,
        "1996": 63218.2,
        "1997": 58130.4,
        "1998": 58714.9,
        "1999": 55849.9,
        "2000": 54727.2,
        "2001": 55686.5,
        "2002": 56639.2,
        "2003": 57221.5,
        "2004": 56434.3,
        "2005": 53954.2,
        "2006": 53787.8,
        "2007": 52908.6,
        "2008": 50823.9,
        "2009": 47243.9,
        "2010": 53024.2,
        "2011": 49097.1,
        "2012": 46522.7,
        "2013": 44879.4,
        "2014": 43254.7,
        "2015": 43346.3,
        "category": "Carbon dioxide"
    }, {
        "1990": 7639.7,
        "1991": 7642.2,
        "1992": 7786.5,
        "1993": 7769.8,
        "1994": 7703,
        "1995": 7610.6,
        "1996": 7627.9,
        "1997": 7552,
        "1998": 7422.5,
        "1999": 7222.1,
        "2000": 7051.5,
        "2001": 6982.4,
        "2002": 6735.3,
        "2003": 6538.6,
        "2004": 6569.3,
        "2005": 6394.3,
        "2006": 6272.5,
        "2007": 6020,
        "2008": 5784.4,
        "2009": 5622.9,
        "2010": 5507.7,
        "2011": 5379.8,
        "2012": 5208.9,
        "2013": 5110.7,
        "2014": 4977,
        "2015": 4872.4,
        "category": "Methane"
    }, {
        "1990": 5773.5,
        "1991": 5666.5,
        "1992": 5479.2,
        "1993": 5753.8,
        "1994": 5717.7,
        "1995": 6056.7,
        "1996": 5608.6,
        "1997": 5858.8,
        "1998": 5744.5,
        "1999": 5765.7,
        "2000": 5796,
        "2001": 5158,
        "2002": 5305.3,
        "2003": 5367,
        "2004": 5032.6,
        "2005": 5071.9,
        "2006": 5297.3,
        "2007": 4725.3,
        "2008": 4864.5,
        "2009": 4687.5,
        "2010": 4822.9,
        "2011": 4892.8,
        "2012": 4429.7,
        "2013": 4616,
        "2014": 4666.4,
        "2015": 4608.5,
        "category": "Nitrous oxide"
    }, {
        "1990": 675.1,
        "1991": 685.9,
        "1992": 503.9,
        "1993": 590.9,
        "1994": 678.5,
        "1995": 816.6,
        "1996": 821.3,
        "1997": 944.6,
        "1998": 965.3,
        "1999": 1122.6,
        "2000": 1123.1,
        "2001": 1171.7,
        "2002": 1266.6,
        "2003": 1276.8,
        "2004": 1348.9,
        "2005": 1435,
        "2006": 1415,
        "2007": 1472.9,
        "2008": 1388.8,
        "2009": 1089.9,
        "2010": 1199.9,
        "2011": 1185.2,
        "2012": 1001.4,
        "2013": 931.2,
        "2014": 938.2,
        "2015": 863.2,
        "category": "Fluoronated gases"
    }];
    var carData = dataManager.getArray(emissions, "category", "Carbon dioxide"),
        metData = dataManager.getArray(emissions, "category", "Methane"),
        nitData = dataManager.getArray(emissions, "category", "Nitrous oxide"),
        fluData = dataManager.getArray(emissions, "category", "Fluoronated gases");


    var sourceData = [{
        "1990": 6508.2,
        "1991": 7535.6,
        "1992": 8023.7,
        "1993": 7909.6,
        "1994": 8525,
        "1995": 7600.6,
        "1996": 11689,
        "1997": 7172.3,
        "1998": 8012.6,
        "1999": 6263.2,
        "2000": 4978.7,
        "2001": 5833.2,
        "2002": 6880.7,
        "2003": 7868.6,
        "2004": 6870.8,
        "2005": 5977.8,
        "2006": 6041.2,
        "2007": 5874.2,
        "2008": 5527.3,
        "2009": 6708.9,
        "2010": 8691.9,
        "2011": 6446.4,
        "2012": 5845.9,
        "2013": 5669.7,
        "2014": 4524.4,
        "2015": 4710.3,
        "category": "ELECTRICITY AND DISTRICT HEATING"
    }, {
        "1990": 20892.8,
        "1991": 20634.1,
        "1992": 19193.3,
        "1993": 20408.7,
        "1994": 21687.2,
        "1995": 22497,
        "1996": 22511.4,
        "1997": 22448.9,
        "1998": 22226.2,
        "1999": 21179.4,
        "2000": 21608.8,
        "2001": 22359.1,
        "2002": 22168.3,
        "2003": 21766.9,
        "2004": 21909.5,
        "2005": 21278.2,
        "2006": 21849.7,
        "2007": 20952.9,
        "2008": 20230,
        "2009": 15850.9,
        "2010": 19440.3,
        "2011": 18275.9,
        "2012": 17564.5,
        "2013": 16668.8,
        "2014": 16780.2,
        "2015": 16610.2,
        "category": "INDUSTRY"
    }, {
        "1990": 19917.2,
        "1991": 19889.9,
        "1992": 20785.4,
        "1993": 19633.8,
        "1994": 20028.8,
        "1995": 20064.5,
        "1996": 19695.2,
        "1997": 19744.1,
        "1998": 19770.6,
        "1999": 20058.1,
        "2000": 19840.7,
        "2001": 19865.5,
        "2002": 20334.4,
        "2003": 20567.4,
        "2004": 20859,
        "2005": 20948.1,
        "2006": 20821.6,
        "2007": 21091.7,
        "2008": 20489.4,
        "2009": 20196.9,
        "2010": 20291.7,
        "2011": 19893.8,
        "2012": 18696,
        "2013": 18198.3,
        "2014": 18039.7,
        "2015": 18072,
        "category": "DOMESTIC TRANSPORT"
    }, {
        "1990": 7614.8,
        "1991": 7312.4,
        "1992": 7239,
        "1993": 7633,
        "1994": 7699.3,
        "1995": 7982.5,
        "1996": 7612.8,
        "1997": 7873.5,
        "1998": 7601.9,
        "1999": 7718.8,
        "2000": 7804.7,
        "2001": 7260.3,
        "2002": 7393.3,
        "2003": 7399.8,
        "2004": 7091.2,
        "2005": 7096.6,
        "2006": 7252.1,
        "2007": 6869.1,
        "2008": 6968.4,
        "2009": 6715.8,
        "2010": 6800,
        "2011": 7171.4,
        "2012": 6679.7,
        "2013": 6900.3,
        "2014": 6975.8,
        "2015": 6894.7,
        "category": "AGRICULTURE"
    }, {
        "1990": 9482.8,
        "1991": 9293.8,
        "1992": 8536.6,
        "1993": 8508.7,
        "1994": 8499,
        "1995": 8122,
        "1996": 8194.5,
        "1997": 7376.4,
        "1998": 7234.9,
        "1999": 6764.2,
        "2000": 6645.2,
        "2001": 5812.4,
        "2002": 5282,
        "2003": 5000.2,
        "2004": 4707.8,
        "2005": 3589.4,
        "2006": 2957.2,
        "2007": 2749,
        "2008": 2182.3,
        "2009": 1941.4,
        "2010": 2120.9,
        "2011": 1765.2,
        "2012": 1584.4,
        "2013": 1464.4,
        "2014": 1374,
        "2015": 1316.9,
        "category": "HEATING OF HOUSES AND PREMISES"
    }, {
        "1990": 7220.7,
        "1991": 7079.7,
        "1992": 7465.8,
        "1993": 7435.9,
        "1994": 7522.4,
        "1995": 7510.1,
        "1996": 7573,
        "1997": 7870.8,
        "1998": 8001,
        "1999": 7976.6,
        "2000": 7819.6,
        "2001": 7868.1,
        "2002": 7887.8,
        "2003": 7801,
        "2004": 7946.6,
        "2005": 7965.3,
        "2006": 7850.7,
        "2007": 7589.8,
        "2008": 7464.3,
        "2009": 7230.4,
        "2010": 7209.9,
        "2011": 7002.2,
        "2012": 6792.1,
        "2013": 6635.9,
        "2014": 6142.1,
        "2015": 6086.1,
        "category": "OTHERS"
    }];

    var forestData = [
  {
    "year": 1990,
    "total": 2565
  },
  {
    "year": 1991,
    "total": 2605
  },
  {
    "year": 1992,
    "total": 2614
  },
  {
    "year": 1993,
    "total": 2654
  },
  {
    "year": 1994,
    "total": 2677
  },
  {
    "year": 1995,
    "total": 2703
  },
  {
    "year": 1996,
    "total": 2720
  },
  {
    "year": 1997,
    "total": 2746
  },
  {
    "year": 1998,
    "total": 2747
  },
  {
    "year": 1999,
    "total": 2765
  },
  {
    "year": 2000,
    "total": 2790
  },
  {
    "year": 2001,
    "total": 2824
  },
  {
    "year": 2002,
    "total": 2869
  },
  {
    "year": 2003,
    "total": 2885
  },
  {
    "year": 2004,
    "total": 2902
  },
  {
    "year": 2005,
    "total": 2897
  },
  {
    "year": 2006,
    "total": 2901
  },
  {
    "year": 2007,
    "total": 2905
  },
  {
    "year": 2008,
    "total": 2917
  },
  {
    "year": 2009,
    "total": 2944
  },
  {
    "year": 2010,
    "total": 2981
  },
  {
    "year": 2011,
    "total": 3006
  },
  {
    "year": 2012,
    "total": 3057
  },
  {
    "year": 2013,
    "total": 3130
  }
];




    var cPredict, cForest, cCarbon,
        oriForest, impactDelta; //influence of reduction in forest to co2;

    /**
     *	tab control
     **/
    var $nav = $(".nav");
    var $pages = $(".page");
    var $curTab = $($nav.find("li")[0]),
        $newPage;
    $curTab.addClass("cur");
    var $curPage = $pages.filter("[data-page='0']");

    $nav.on("click", "li", function(event) {
        var $this = $(this);
        var index = $this.attr("data-tab");

        if ($this == $curTab) {
            return;
        }
        $curTab.removeClass("cur");
        $this.addClass("cur");
        $curTab = $this;


        $newPage = $pages.filter("[data-page='" + index + "']");
        $curPage.addClass("hide");

        $curPage = $newPage;
        if ($curPage.hasClass("hide")) {
            $curPage.removeClass("hide");

            switch (index) {
                case "0":
                    initChart0();
                    break;

                case "1":
                    initChart1();
                    cForest = initForestChart();
                    break;

                default:
                    initChart0();
                    break;
            }
        }




    });

    /**
     *	init chart
     **/
    var initChart0 = function() {

        var $analysis = $("#chart_analysis");
        var $delta = $("#delta");
        var $num = $("#num");

        var chart = echarts.init(document.getElementById("graph_container_0"));
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
                data: yearData,
                name: "year",
                nameLocation: "end"

            },
            yAxis: {
                name: "Greenhouse Gas Emissions (t)\n",
                nameLocation: "middle",
                nameRotate: 90

            },
            color: ["#d59b00", "#3c763d"],
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

        // init analysis delta


        var delta = concreteData[concreteData.length - 1] - woodData[woodData.length - 1];
        $delta.text(parseInt(delta));


        chart.on("dataZoom", function(param) {
            var end = chart.getOption().xAxis[0].rangeEnd;
            delta = concreteData[end] - woodData[end];
            if (delta) {
                $delta.text(parseInt(delta));
                var elephants = parseInt(delta / 10);
                $num.text(elephants);
            }

        });
    };

    var initChart1 = function() {

        var chart = echarts.init(document.getElementById("graph_container_1"));
        // Q.calculateRate = function(yearArr, valueArr, endYear) {

        var rateFlu1 = dataManager.calculateRate(yearData95to15, fluData, 2015),
            rateNit1 = dataManager.calculateRate(yearData95to15, nitData, 2015),
            rateMet1 = dataManager.calculateRate(yearData95to15, metData, 2015),
            rateCar1 = dataManager.calculateRate(yearData95to15, carData, 2015);
        // Q.predictData = function(yearData, valueData, rate, targetYear) {

        var dataFlu1 = dataManager.predictData(yearData95to15, fluData, rateFlu1, 2050),
            dataNit1 = dataManager.predictData(yearData95to15, nitData, rateNit1, 2050),
            dataMet1 = dataManager.predictData(yearData95to15, metData, rateMet1, 2050),
            dataCar1 = dataManager.predictData(yearData95to15, carData, rateCar1, 2050);

        var option = {
            title: {
                text: "Sweden's Greenhouse Gas Emissions",
                left: "28%"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Carbon dioxide", "Methane", "Nitrous oxide", "Fluoronated gases"],
                top: 20
            },
            color: ["#a5dff9", "#b9e07c", "#ffd439", "#ed745a"],
            toolbox: {

            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: dataFlu1[0]
            }],
            yAxis: [{
                type: 'value',
                name: 'Emissions (thousand tons of carbon dioxide equivalents)\n\n\n',
                nameLocation: 'middle',
                nameRotate: 90
            }],
            series: [{
                name: 'Fluoronated gases',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: dataFlu1[1]
            }, {
                name: 'Nitrous oxide',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: dataNit1[1]
            }, {
                name: 'Methane',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: dataMet1[1]
            }, {
                name: 'Carbon dioxide',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: dataCar1[1],
                markLine: {
                    lineStyle: {
                        normal: {
                            color: '#000000'
                        }
                    },
                    label: {
                        normal: {
                            position: 'middle',
                            formatter: '2020 Target'

                        }
                    },
                    data: [{
                        name: '2020 target',
                        yAxis: 43000
                    }]
                }
            }],
            dataZoom: {
                type: 'slider', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                start: 0, // 左边在 10% 的位置。
                end: 50 // 右边在 60% 的位置。
            }
        };

        chart.setOption(option);
        initPieChart(2015);
        chart.on("click", function(params) {
            var year = params.name;
            initPieChart(year);
        });

    };

    var initPieChart = function(year) {
        var eleData = dataManager.getValueByKey(sourceData, "ELECTRICITY AND DISTRICT HEATING", year),
            indData = dataManager.getValueByKey(sourceData, "INDUSTRY", year),
            domData = dataManager.getValueByKey(sourceData, "DOMESTIC TRANSPORT", year),
            agrData = dataManager.getValueByKey(sourceData, "AGRICULTURE", year),
            heaData = dataManager.getValueByKey(sourceData, "HEATING OF HOUSES AND PREMISES", year),
            othData = dataManager.getValueByKey(sourceData, "OTHERS", year);

        var chart = echarts.init(document.getElementById("graph_container_1_pie"));
        var option = {
            title: {
                text: 'Sources of GHG Emissions',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ["#c0801d", "#febf2d", "#adc9ca", "#a4ad26", "#45560c", "#c8691b"],
            series: [{
                name: 'Source of emissions',
                type: 'pie',
                radius: '50%',
                center: ['48%', '60%'],
                data: [
                    { value: eleData, name: 'ELECTRICITY', textStyle: { fontSize: 12 } },
                    { value: indData, name: 'INDUSTRY', textStyle: { fontSize: 12 } },
                    { value: domData, name: 'TRANSPORT', textStyle: { fontSize: 12 } },
                    { value: othData, name: 'OTHERS', textStyle: { fontSize: 12 } },
                    { value: heaData, name: 'HEATING', textStyle: { fontSize: 12 } },
                    { value: agrData, name: 'AGRICULTURE', textStyle: { fontSize: 12 } }


                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        chart.setOption(option);
    };

    var initForestChart = function() {
        var C = new Object();


        var dYear = dataManager.getArray(forestData, "year");
        var dForest = dataManager.getArray(forestData, "total");

        var rate = dataManager.calculateRate(dYear, dForest, 2013);
        var predictData = dataManager.predictData(dYear, dForest, rate, 2050);

        oriForest = predictData[1][predictData[1].length - 1];


        var chart = echarts.init(document.getElementById("graph_container_1_forest"));

        C.option = {
            title: {
                text: "Growing Volume of Sweden's Forest",
                left: '30%',
                top: 20
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: predictData[0]
            },
            yAxis: {
            	name: 'millions m³\n\n\n',
            	nameLocation: 'middle',
            	nameRotate: 90,
                type: 'value'
            },
            grid: {
                x: 75
            },
            series: [{
                name: 'forest',
                type: 'line',
                color: ['#3c763d'],
                showSymbol: false,
                hoverAnimation: false,
                data: predictData[1]
            }],
            dataZoom: {
                type: 'slider', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                start: 0, // 左边在 10% 的位置。
                end: 50 // 右边在 60% 的位置。
            }
        };

        C.reset = function(xData, yData) {
            var o = $.extend({}, C.option),
                s = $.extend({}, o.series[0]);

            if (xData) {
                o.xAxis.data = xData;
            }
            if (yData) {
                s.lineStyle = { normal: { type: "dashed" } };
                s.color = ["#50a25b"];
                s.data = yData;
                o.series[1] = s;
            }
            chart.setOption(o);
        };

        chart.setOption(C.option);
        rateControl(rate);


        return C;

    };

    var rateControl = function(rate) {
        var $input = $("#input_rate"),
            $btnPlus = $("#btn_plus"),
            $btnMinus = $("#btn_minus"),
            curRate, newRate,
            resultArr;


        var dYear = dataManager.getArray(forestData, "year");
        var dForest = dataManager.getArray(forestData, "total");


        //init 
        $input.val(rate.toFixed(2));
        $btnPlus.on("click", function() {
            curRate = parseFloat($input.val());
            newRate = curRate + 0.01;
            $input.val(newRate.toFixed(2));

            resultArr = dataManager.predictData(dYear, dForest, newRate, 2050);
            impactDelta = resultArr[1][resultArr[1].length - 1] - oriForest;
            cForest.reset(null, resultArr[1]);
            
        });

        $btnMinus.on("click", function() {
            curRate = parseFloat($input.val());
            newRate = curRate - 0.01;

            $input.val(newRate.toFixed(2));
            resultArr = dataManager.predictData(dYear, dForest, newRate, 2050);
            impactDelta = resultArr[1][resultArr[1].length - 1] - oriForest;

            cForest.reset(null, resultArr[1]);

        });
    };
    /**
     *	init
     **/
    initChart0();




})(window, jQuery, echarts, dataManager)
