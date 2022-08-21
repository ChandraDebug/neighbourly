const url = 'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=1=1&outFields=PLANNING_PORTAL_APP_NUMBER&returnGeometry=true&f=geojson';
const allDataUrl = 'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=1=1&outFields=PLANNING_PORTAL_APP_NUMBER,COUNCIL_NAME,STATUS,TYPE_OF_DEVELOPMENT,APPLICATION_TYPE&returnGeometry=false&f=pjson&resultRecordCount=4000&resultOffset=0';
var webURL5 = 'data/jobseeker.json';
var webURL2 = 'data/liquor.json';
var webURL3 = 'data/employment.json';
var webURL6 = 'data/crime.json';
var webURL7 = 'data/industry.json';
var webURL8 = 'data/life-expect.json';
var webURL9 = 'data/obesity.json';
var webURL10 = 'data/burden.json';
var webURL11 = 'data/self-harm.json';
var webURL12 = 'data/env-expense.json';
var webURL13 = 'data/community-service.json';
var webURL14 = 'data/recreation.json';
var webURL15 = 'data/safety.json';
var webURL16 = 'data/library.json';
var webURL17 = "data/spaces.json";
var webURL18 = "data/amenities.json";


var totalEmploymentData = [];
var employmentData = [];
var liquorData = [];
var totalJobkeeperData = [];
var numberData = [];
var april = [];
var may = [];
var selectedCouncil = [];
var seekerData = [];
var totalSeekerData = [];
var ageData = [];
var age1 = [];
var age2 = [];
var age3 = [];
var age4 = [];
var age5 = [];
var totalAgeData = [];
var totalMigrantData = [];
var migrantData = [];
var totalCrimeData = [];
var crimeData = [];
var rankData = [];
var industryData = [];
var lifeData = [];
var totalLifeData = [];

var obesityData = [];
var burdenData = [];
var harmData = [];

var totalObesityData = [];
var totalBurdenData = [];
var totalHarmData = [];






var totalIndustryData = [];

var envData=[];
var commData=[];
var recData=[];
var safetyData=[];
var libData=[];

var totalEnvData = [];
var totalCommData = [];
var totalRecData=[];
var totalSafetyData=[];
var totalLibData=[];


var totalSpaceData=[];
var spaceData=[];


var totalAmenititesData=[];
var amenitiesData=[];


$(document).ready(function () {






    GetCouncilList(allDataUrl).done(function (data) {



      //  councilDropdown(data);
        statusDropdown(data);
        daList(data);
        var councilMapUrl = createMapUrl('All', 'LIVERPOOL CITY COUNCIL');



    });

    GetTotalType().done(function (data) {

        liquorData = data;

        //buildProfitData(data, 'All', "chart2");


        //drawChart2();


    });
    GetIndustryType().done(function (data) {

        industryData = data;

        buildIndustryData(data, 'All', "chart9");


        // drawChart9();


    });
    GetNumberType().done(function (data) {
        numberData = data;


        buildNumberData(numberData, 'All', "chart3");


        // drawChart3();



    });



    GetSeekerType().done(function (data) {
        seekerData = data;


        buildSeekerData(seekerData, 'All', "chart4");


        // drawChart4();



    });

    GetAgeType().done(function (data) {
        ageData = data;
        migrantData = data;


        buildAgeData(ageData, 'All', "chart6");
        buildAgeData(ageData, 'All', "chart7");


        //  drawChart6();
        //  drawChart7();



    });
    GetCrimeType().done(function (data) {
        crimeData = data;

        rankData = data;
        buildCrimeData(ageData, 'All', "chart8");



        //  drawChart6();
        //  drawChart7();



    });
        GetLifeType().done(function (data) {
        lifeData = data;


        buildLifeData(lifeData, 'All', "chart10");



        //  drawChart6();
        //  drawChart7();



    });

        GetBurdenType().done(function (data) {
        burdenData = data;


        buildBurdenData(burdenData, 'All', "chart11a");



        //  drawChart6();
        //  drawChart7();



    });
            GetObesityType().done(function (data) {
        obesityData = data;


       buildObesityData(obesityData, 'All', "chart11b");



        //  drawChart6();
        //  drawChart7();



    });
            GetHarmType().done(function (data) {
        harmData = data;


        buildHarmData(harmData, 'All', "chart11");



        //  drawChart6();
        //  drawChart7();



    });

                GetEnvType().done(function (data) {
        envData = data;


        buildEnvData(envData, 'All', "chart12");



        //  drawChart6();
        //  drawChart7();



    });
                GetCommType().done(function (data) {
        commData = data;


        buildCommData(commData, 'All', "chart12a");



        //  drawChart6();
        //  drawChart7();



    });
                GetRecType().done(function (data) {
        recData = data;


        buildRecData(recData, 'All', "chart12b");



        //  drawChart6();
        //  drawChart7();



    });
                GetSafetyType().done(function (data) {
        safetyData = data;


        buildSafetyData(safetyData, 'All', "chart12c");



        //  drawChart6();
        //  drawChart7();



    });
                    GetLibType().done(function (data) {
        libData = data;


        buildLibData(libData, 'All', "chart12d");



        //  drawChart6();
        //  drawChart7();



    });
    GetSpaceData().done(function (data) {
        spaceData = data;


        buildSpaceData(spaceData, 'All', "chart13");



        //  drawChart6();
        //  drawChart7();



    });


    GetAmenitiesData().done(function (data) {
        amenitiesData = data;


      //  buildAmenitiesData(amenitiesData, 'All', "chart14");



        //  drawChart6();
        //  drawChart7();



    });



    $('#councils').on('change', function () {

        $('.charts').addClass('show');
        category = $(this).children("option:selected").val();
        if (category === 'All') {
            $('.charts').removeClass('show');
        }

        may.length = 0;
        april.length = 0;
        totalCrimeData.length = 0;
        totalMigrantData.length = 0;

        totalSeekerData.length = 0;
        totalIndustryData.length = 0;
        totalLifeData.length = 0;

         totalHarmData.length = 0;
          totalBurdenData.length = 0;
           totalObesityData.length = 0;


           totalEnvData.length = 0;
           totalRecData.length = 0;
           totalCommData.length =0 ;
           totalSafetyData.length=0;
           totalLibData.length=0;

           totalSpaceData.length=0;

        selectedCouncil = $(this).children("option:selected").val();
        var selectedStatus = $("#status").children("option:selected").val();


        var councilMapUrl = createMapUrl(selectedStatus, selectedCouncil);
        var councilListUrl = createStatusUrl(selectedStatus, selectedCouncil);


        GetCouncilList(councilListUrl).done(function (data) {
            buildNumberData(numberData, selectedCouncil, "chart3");
            buildSeekerData(seekerData, selectedCouncil, "chart4");
            buildAgeData(ageData, selectedCouncil, "chart6");
            buildAgeData(migrantData, selectedCouncil, "chart7");
            buildCrimeData(crimeData, selectedCouncil, "chart8");
            buildIndustryData(industryData, selectedCouncil, "chart9");
             buildLifeData(lifeData, selectedCouncil, "chart10");

              buildHarmData(harmData, selectedCouncil, "chart11");
               buildBurdenData(burdenData, selectedCouncil, "chart11a");
                buildObesityData(obesityData, selectedCouncil, "chart11b");


                 buildEnvData(envData, selectedCouncil, "chart12");
                  buildRecData(recData, selectedCouncil, "chart12a");
                   buildCommData(commData, selectedCouncil, "chart12b");
                    buildSafetyData(safetyData, selectedCouncil, "chart12c");
                     buildLibData(libData, selectedCouncil, "chart12d");


                     buildSpaceData(spaceData, selectedCouncil, "chart13");


           // drawChart9();

            drawChart4();
            drawChart3();
            drawChart6();
            drawChart7();
            drawChart8();
            drawChart10();
             drawChart11();
              drawChart12();
              drawChart13();
            updateCharts();

            totalsInfographic(selectedCouncil);

            daList(data);

            initMap(councilMapUrl);


        });


    });





    $('#status').on('change', function () {

        var selectedStatus = $(this).children("option:selected").val();
        var selectedCouncil = $("#councils").children("option:selected").val();
        var councilMapUrl = createMapUrl(selectedStatus, selectedCouncil);

        var councilListUrl = createStatusUrl(selectedStatus, selectedCouncil);


        GetCouncilList(councilListUrl).done(function (data) {



            daList(data);

           initMap(councilMapUrl);


        });


    });


});
(function (H) {

    var pendingRenders = [];

    // https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
    function isElementInViewport(el) {

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (
                window.innerHeight ||
                document.documentElement.clientHeight
            ) &&
            rect.right <= (
                window.innerWidth ||
                document.documentElement.clientWidth
            )
        );
    }

    H.wrap(H.Series.prototype, 'render', function deferRender(proceed) {
        var series = this,
            renderTo = this.chart.container.parentNode;

        // It is appeared, render it
        if (isElementInViewport(renderTo) || !series.options.animation) {
            proceed.call(series);

            // It is not appeared, halt renering until appear
        }
        else {
            pendingRenders.push({
                element: renderTo,
                appear: function () {
                    proceed.call(series);
                }
            });
        }
    });

    function recalculate() {
        pendingRenders.forEach(function (item) {
            if (isElementInViewport(item.element)) {
                item.appear();
                H.erase(pendingRenders, item);
            }
        });
    }

    if (window.addEventListener) {
        ['DOMContentLoaded', 'load', 'scroll', 'resize']
        .forEach(function (eventType) {
            addEventListener(eventType, recalculate, false);
        });
    }

}(Highcharts));

function GetTotalType() {

    var deffer = $.Deferred();

    $.getJSON(webURL2, function (data) {

        deffer.resolve(data);
    });
    return deffer.promise();
}

function updateCharts() {

    chart4.series[0].setData(totalSeekerData);
    // chart5.series[0].setData(totalEmploymentData);
    chart3.series[0].setData(april);
    chart3.series[1].setData(may);
    chart6.series[0].setData(age1);
    chart7.series[0].setData(totalMigrantData);
    chart8.series[0].setData(totalCrimeData);
    //chart9.series[0].setData(totalIndustryData);
     chart10.series[0].setData(totalLifeData);

      chart11.series[0].setData(totalHarmData);
       chart11.series[1].setData(totalBurdenData);
        chart11.series[2].setData(totalObesityData);

          chart12.series[0].setData(totalEnvData);
             chart12.series[1].setData(totalCommData);
                chart12.series[2].setData(totalRecData);
                  chart12.series[3].setData(totalSafetyData);
                      chart12.series[4].setData(totalLibData);



                       chart13.series[0].setData(totalSpaceData);

    // chart6.series[1].setData(age2);
    // chart6.series[2].setData(age3);
    // chart6.series[3].setData(age4);
    // chart6.series[4].setData(age5);

    //chart3.series[0].setData(totalJobkeeperData);

    // chart1.redraw();
}

function GetNumberType() {

    var deffer = $.Deferred();

    $.getJSON(webURL3, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}

function GetSeekerType() {

    var deffer = $.Deferred();

    $.getJSON(webURL5, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}

function GetAgeType() {

    var deffer = $.Deferred();

    $.getJSON(webURL5, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}

function GetCrimeType() {

    var deffer = $.Deferred();

    $.getJSON(webURL6, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}

function GetIndustryType() {

    var deffer = $.Deferred();

    $.getJSON(webURL7, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetLifeType() {

    var deffer = $.Deferred();

    $.getJSON(webURL8, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetObesityType() {

    var deffer = $.Deferred();

    $.getJSON(webURL9, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetBurdenType() {

    var deffer = $.Deferred();

    $.getJSON(webURL10, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetHarmType() {

    var deffer = $.Deferred();

    $.getJSON(webURL11, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}

function GetEnvType() {

    var deffer = $.Deferred();

    $.getJSON(webURL12, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetCommType() {

    var deffer = $.Deferred();

    $.getJSON(webURL13, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetRecType() {

    var deffer = $.Deferred();

    $.getJSON(webURL14, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetSafetyType() {

    var deffer = $.Deferred();

    $.getJSON(webURL15, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetLibType() {

    var deffer = $.Deferred();

    $.getJSON(webURL16, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetSpaceData() {

    var deffer = $.Deferred();

    $.getJSON(webURL17, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}
function GetAmenitiesData() {

    var deffer = $.Deferred();

    $.getJSON(webURL18, function (data) {

        deffer.resolve(data);
    });


    return deffer.promise();
}



function chartType(item, chart) {
    switch (chart) {

    case "chart5":
        totalEmploymentData.push([item]);
        break;
    case "chart3":
        april.push([item.Postcode, convertInt(item.April)]);
        may.push([item.Postcode, convertInt(item.May)]);

        break;
    case "chart4":
        totalSeekerData.push(["Females", item.GENDER_F]);
        totalSeekerData.push(["Males", item.GENDER_M]);


        break;
    case "chart6":
        age1.push(["Under 25", item.AGE_U25]);
        age1.push(["Age 25-35", item.AGE_25_34]);
        age1.push(["Age 35-44", item.AGE_35_44]);
        age1.push(["Age 45-54", item.AGE_45_54]);
        age1.push(["Age 55 and above", item.AGE_55_PLUS]);



        break;
    case "chart7":
        totalMigrantData.push(["Born in Australia", item.BORN_AU]);
        totalMigrantData.push(["Born overseas", item.BORN_OTH]);




        break;

    case "chart8":
        totalCrimeData.push(["2015", item.Year_2015]);
        totalCrimeData.push(["2016", item.Year_2016]);
        totalCrimeData.push(["2017", item.Year_2017]);
        totalCrimeData.push(["2018", item.Year_2018]);
        totalCrimeData.push(["2019", item.Year_2019]);

        break;
    case "chart9":
        totalIndustryData.push([item.Industry, item.Total]);
        break;
     case "chart10":
       totalLifeData.push(["2010", item.Year_2010]);
        totalLifeData.push(["2011", item.Year_2011]);
        totalLifeData.push(["2012", item.Year_2012]);
        totalLifeData.push(["2013", item.Year_2013]);
        totalLifeData.push(["2014", item.Year_2014]);
        totalLifeData.push(["2015", item.Year_2015]);
        totalLifeData.push(["2016", item.Year_2016]);
        totalLifeData.push(["2017", item.Year_2017]);
        totalLifeData.push(["2018", item.Year_2018]);

        break;
     case "chart11":

        totalHarmData.push(["2011", item.Year_2011]);
        totalHarmData.push(["2012", item.Year_2012]);
        totalHarmData.push(["2013", item.Year_2013]);
        totalHarmData.push(["2014", item.Year_2014]);
        totalHarmData.push(["2015", item.Year_2015]);
        totalHarmData.push(["2016", item.Year_2016]);
        totalHarmData.push(["2017", item.Year_2017]);
        totalHarmData.push(["2018", item.Year_2018]);

        break;
     case "chart11a":

        totalBurdenData.push(["2011", item.Year_2011]);
        totalBurdenData.push(["2012", item.Year_2012]);
        totalBurdenData.push(["2013", item.Year_2013]);
        totalBurdenData.push(["2014", item.Year_2014]);
        totalBurdenData.push(["2015", item.Year_2015]);
        totalBurdenData.push(["2016", item.Year_2016]);
        totalBurdenData.push(["2017", item.Year_2017]);
        totalBurdenData.push(["2018", item.Year_2018]);

        break;
     case "chart11b":

        totalObesityData.push(["2011", item.Year_2011]);
        totalObesityData.push(["2012", item.Year_2012]);
        totalObesityData.push(["2013", item.Year_2013]);
        totalObesityData.push(["2014", item.Year_2014]);
        totalObesityData.push(["2015", item.Year_2015]);
        totalObesityData.push(["2016", item.Year_2016]);
        totalObesityData.push(["2017", item.Year_2017]);
        totalObesityData.push(["2018", item.Year_2018]);

        break;

     case "chart12":


        totalEnvData.push(["2017", item.Year_2017]);
        totalEnvData.push(["2018", item.Year_2018]);
         totalEnvData.push(["2019", item.Year_2019]);

        break;

     case "chart12a":


        totalCommData.push(["2017", item.Year_2017]);
        totalCommData.push(["2018", item.Year_2018]);
         totalCommData.push(["2019", item.Year_2019]);

        break;

     case "chart12b":


        totalRecData.push(["2017", item.Year_2017]);
        totalRecData.push(["2018", item.Year_2018]);
         totalRecData.push(["2019", item.Year_2019]);

        break;

     case "chart12c":


        totalSafetyData.push(["2017", item.Year_2017]);
        totalSafetyData.push(["2018", item.Year_2018]);
         totalSafetyData.push(["2019", item.Year_2019]);

        break;


     case "chart12d":


        totalLibData.push(["2017", item.Year_2017]);
        totalLibData.push(["2018", item.Year_2018]);
         totalLibData.push(["2019", item.Year_2019]);

        break;

     case "chart13":


        totalSpaceData.push(["2017", item.Year_2017]);
        totalSpaceData.push(["2018", item.Year_2018]);
         totalSpaceData.push(["2019", item.Year_2019]);

        break;



    }
}


function buildNumberData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}

function buildSeekerData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}

function buildAgeData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}

function buildCrimeData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}


function buildSpaceData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}



function buildHarmData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}

function buildObesityData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}
function buildBurdenData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}

function buildLifeData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }
    });
}

function buildIndustryData(data, category, chart) {


    $.each(data, function (index, item) {





        chartType(item, chart);








    });
}

function buildEnvData(data, category, chart) {


    $.each(data, function (index, item) {






        if (item.Council === category) {

            chartType(item, chart);







        }








    });
}
function buildCommData(data, category, chart) {


    $.each(data, function (index, item) {





        if (item.Council === category) {

            chartType(item, chart);







        }




    });
}
function buildRecData(data, category, chart) {


    $.each(data, function (index, item) {




        if (item.Council === category) {

            chartType(item, chart);







        }






    });
}
function buildSafetyData(data, category, chart) {


    $.each(data, function (index, item) {



        if (item.Council === category) {

            chartType(item, chart);







        }







    });
}
function buildLibData(data, category, chart) {


    $.each(data, function (index, item) {




        if (item.Council === category) {

            chartType(item, chart);







        }






    });
}


function toTitleCase(str) {
    str = String(str).toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function drawChart3() {

    chart3 = Highcharts.chart('container3', {
        chart: {
            type: 'column'
        },

        title: {
            text: 'Jobkeeper applications received for every postcode in ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from ATO',
            align: 'center'
        },
        xAxis: [{
                type: 'category',
                crosshair: true,
                title: {
                    text: 'Postcodes in ' + toTitleCase(selectedCouncil)
                },

        },



        ],
        plotOptions: {
            column: {
                pointPadding: 0.1,

                groupPadding: 0.2,


            }
        },
        tooltip: {

            shared: true,
            useHTML: true,


            formatter: function () {
                var s = '';

                $.each(this.points, function (i, point) {
                    s += '</br><span style="color:' + point.color + '">●</span>Applications in ' + point.series.name + ' :' + point.y;
                });

                return s;
            },

            // formatter: function ()
            // {

            // 	return 'The total costs for ' + this.point.name + ' is ' + '$' + numberConvert(this.y);
            // }
        },

        yAxis: [{


                title: {
                    text: 'Total Applications'
                },
            },


        ],




        series: [{
                name: 'April',

                data: april
						},

            {
                name: 'May',

                data: may
						},



        ],

    });
}

function drawChart6() {

    chart6 = Highcharts.chart('container6', {
        chart: {
            type: 'bar'
        },

        title: {
            text: 'Jobseeker applications by various age groups in ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from Department of Education, Skills and Employment',
            align: 'center'
        },
        xAxis: [{
                type: 'category',
                crosshair: true,
                title: {
                    text: 'Age group in ' + toTitleCase(selectedCouncil)
                },

        },



        ],
        plotOptions: {
            column: {
                pointPadding: 0.1,

                groupPadding: 0.2,


            }
        },
        tooltip: {
            pointFormat: 'Percentage application received : <b>{point.y:.1f}%'
        },

        yAxis: [{


                title: {
                    text: 'Total Applications'
                },
            },


        ],




        series: [{
                name: 'Under 25',

                data: age1
						},
//         {
//             name: '25-34 years',

//             data: age2
// 		},
//         {
//             name: '35-44 years',

//             data: age2
// 		},
//         {
//             name: '45-54 years',

//             data: age4
// 		},
//         {
//             name: '55 years and above',

//             data: age5
// 		},



        ],

    });
}

function drawChart4() {

    chart4 = Highcharts.chart('container4', {
        chart: {
            type: 'pie'
        },

        title: {
            text: 'Jobseeker applications by Gender for ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from Department of Education, Skills and Employment',
            align: 'center'
        },
        xAxis: {
            type: 'Postcode',
            crosshair: true
        },
        tooltip: {
            pointFormat: 'Percentage application received : <b>{point.percentage:.1f}%'
        },

        yAxis: [{


                title: {
                    text: 'Total Applications'
                },
            },


        ],




        series: [{


                name: 'Total number of Jobseeker applications for :',
                data: totalSeekerData,


        },



        ],

    });
}

function drawChart7() {

    chart7 = Highcharts.chart('container7', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
            //type: 'pie'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },

        title: {
            text: 'Percentage of people by place of their birth in ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from Department of Education, Skills and Employment',
            align: 'center'
        },
        xAxis: {
            type: 'Postcode',
            crosshair: true
        },
        tooltip: {
            pointFormat: 'Percentage  : <b>{point.percentage:.1f}%'
        },

        yAxis: [{


                title: {
                    text: 'Total Applications'
                },
            },


        ],




        series: [{
                type: 'pie',
                name: 'Jobseekers by place of birth',
                innerSize: '50%',

                name: 'Total number of Jobseeker applications for :',
                data: totalMigrantData,


        },



        ],

    });
}



function drawChart8() {


    chart8 = Highcharts.chart('container8', {
        chart: {
            type: 'spline'
        },

        title: {
            text: 'Domestic Violence cases per 100,000 in last 5 years for ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from BOCSAR',
            align: 'center'
        },
        xAxis: {
            type: 'category',

            crosshair: true
        },
        yAxis: [{


                title: {
                    text: 'Domestic Violence Cases'
                },
            },


        ],




        series: [{


                name: 'Cases per 100,000',
                data: totalCrimeData

        },


        ],

    });
}

function drawChart9() {


    chart9 = Highcharts.chart('container9', {
        chart: {
            type: 'areaspline'
        },

        title: {
            text: 'Total number of people employed per Indutry in 2019',
            align: 'center'
        },
        subtitle: {
            text: 'Data source from ATO',
            align: 'center'
        },
        xAxis: {
            type: 'category',

            crosshair: true
        },
        yAxis: [{


                title: {
                    text: 'People Employed'
                },
            },


        ],




        series: [{


                name: 'Total people employed',
                data: totalIndustryData

        },


        ],

    });
}

function drawChart10() {


    chart10 = Highcharts.chart('container10', {
        chart: {
            type: 'spline',


        },

        title: {
            text: 'Life Expectancy  ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from eHealthNSW',
            align: 'center'
        },
        xAxis: {
            type: 'category',

            crosshair: true
        },
        yAxis: [{


                title: {
                    text: 'Number of years'
                },
            },


        ],




        series: [{


                name: 'Years',
                data: totalLifeData

        },


        ],

    });
}
function drawChart11() {


    chart11 = Highcharts.chart('container11', {
        chart: {
            type: 'spline'
        },

        title: {
            text: 'Burden of Disease  ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from eHealthNSW',
            align: 'center'
        },
        	tooltip:
					{
						enabled: true,

						shared: true,
						useHTML: true
					},
        xAxis: {
            type: 'category',

            crosshair: true
        },
        yAxis: [{


                title: {
                    text: 'Number of people per 10k population'
                },
            },


        ],




        series: [{


                name: 'Self Harm',
                data: totalHarmData

        },
        {


                name: 'Diabetes presence',
                data: totalBurdenData

        },
        {


                name: 'Hostpitalisations due to Obesity',
                data: totalObesityData

        },


        ],

    });
}

function drawChart12() {


    chart12 = Highcharts.chart('container12', {
        chart: {
            type: 'spline'
        },

        title: {
            text: 'Expenditure  ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from Office of Local Government',
            align: 'center'
        },
        	tooltip:
					{
						enabled: true,

						shared: true,
						useHTML: true
					},
        xAxis: {
            type: 'category',

            crosshair: true
        },
        yAxis: [{


                title: {
                    text: 'k $'
                },
            },


        ],




        series: [{


                name: 'Environment expenses',
                data: totalEnvData

        }
        ,
        {


                name: 'Community expenses',
                data: totalCommData

        },
        {


                name: 'Recreation expenses',
                data: totalRecData

        },
         {


                name: 'Safety',
                data: totalSafetyData

        },
         {


                name: 'Library',
                data: totalLibData

        },


        ],

    });
}

function drawChart13() {


    chart13 = Highcharts.chart('container13', {
        chart: {
            type: 'spline'
        },

        title: {
            text: 'Open public spaces per capita  ' + toTitleCase(selectedCouncil),
            align: 'center'
        },
        subtitle: {
            text: 'Data source from OLG',
            align: 'center'
        },
        xAxis: {
            type: 'category',

            crosshair: true
        },
        yAxis: [{


                title: {
                    text: 'Area in hectares'
                },
            },


        ],




        series: [{


                name: 'Years',
                data: totalSpaceData

        },


        ],

    });
}

function createMapUrl(status, council) {
    // council = "LIVERPOOL CITY COUNCIL";
    var mapUrl = url;
    if ((!status || status === 'All') && (!council || council === 'All')) {
        return mapUrl;
    }
    if ((!status || status === 'All')) {
        mapUrl = "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=COUNCIL_NAME='" + council + "' &outFields=PLANNING_PORTAL_APP_NUMBER&returnGeometry=true&f=geojson";
        return mapUrl;
    }

    if (!council || council === 'All') {
        mapUrl = "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=STATUS ='" + status + "'&outFields=PLANNING_PORTAL_APP_NUMBER&returnGeometry=true&f=geojson";
        return mapUrl;
    }

    mapUrl = "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=COUNCIL_NAME='" + council + "'AND STATUS ='" + status + "'&outFields=PLANNING_PORTAL_APP_NUMBER&returnGeometry=true&f=geojson";
    return mapUrl;


}

function createStatusUrl(status, council) {
    // council = "LIVERPOOL CITY COUNCIL";
    var mapUrl = url;
    if ((!status || status === 'All') && (!council || council === 'All')) {
        return mapUrl;
    }
    if ((!status || status === 'All')) {
        mapUrl = "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=COUNCIL_NAME='" + council + "'&outFields=PLANNING_PORTAL_APP_NUMBER,COUNCIL_NAME,STATUS,TYPE_OF_DEVELOPMENT,APPLICATION_TYPE&returnGeometry=true&f=pjson";
        return mapUrl;
    }

    if (!council || council === 'All') {
        mapUrl = "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=STATUS ='" + status + "'&outFields=PLANNING_PORTAL_APP_NUMBER,COUNCIL_NAME,STATUS,TYPE_OF_DEVELOPMENT,APPLICATION_TYPE&returnGeometry=true&f=pjson";
        return mapUrl;
    }


    mapUrl = "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=COUNCIL_NAME='" + council + "' AND STATUS ='" + status + "'&outFields=PLANNING_PORTAL_APP_NUMBER,COUNCIL_NAME,STATUS,TYPE_OF_DEVELOPMENT,APPLICATION_TYPE&returnGeometry=true&f=pjson";
    return mapUrl;


}

function GetCouncilList(fetchUrl) {

    var deffer = $.Deferred();

    //throw new Error("my error message");
    $.ajax({
        url: fetchUrl,
        type: "GET",
        headers: {
            "Accept": "application/json;odata=verbose"
        }
        // return data format

    }).done(function (data) {


        deffer.resolve(data);

    });
    return deffer.promise();
}

function spinner(ref) {

    $(ref).html('<div class="spinner-border text-primary show" role="status"><span class="sr-only">Loading...</span> </div>');

}

function councilDropdown(data)

{

    //create a council array var uniqueArray = ;
    var councils = [];

    var listItems = "<option value= 'All'>All</option>";

    $.each(JSON.parse(data).features, function (index, item) {


        councils.push(item.attributes.COUNCIL_NAME);

    });

    var councils = councils.sort(function (a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });


    $.each(Array.from(new Set(councils)), function (index, item) {

        if (item != 'All') {
            // item = toTitleCase(item);
            listItems += "<option value='" + item +
                "'>" + item + "</option>";
        }
    });




    $('#councils').html(listItems);


}

function statusDropdown(data)

{
    var dastatus = [];

    var listItems = "<option value= 'All'>All</option>";

    $.each(JSON.parse(data).features, function (index, item) {



        dastatus.push(item.attributes.STATUS);

    });


    $.each(Array.from(new Set(dastatus)), function (index, item) {

        if (item != 'All') {
            listItems += "<option value='" + item +
                "'>" + item + "</option>";
        }
    });




    $('#status').html(listItems);


}

function daList(data)

{

    //create a council array var uniqueArray = ;


    var listItems = [];
    var count = (JSON.parse(data).features).length;

    if (count > 0) {
        listItems = "<strong>" + count + " results found </strong>";
        $.each(JSON.parse(data).features, function (index, item) {


            listItems += "<div class='card mt-2'>" + "<div class='card-header'><h5><span class='badge badge-light'>" + item.attributes.STATUS + "</span></h4></div>" + "<div class='card-body'><h6 class='card-title'>" + item.attributes.TYPE_OF_DEVELOPMENT + "</h6>" + "</div><div class='card-footer bg-transparent '><small style='color:#5c348b;'>" + item.attributes.APPLICATION_TYPE + "</small></div></div>";


        });
    }
    else {

        listItems = "<div class='card'><h4>No results found</h4></div>";

    }




    $('#daDesc').html(listItems).addClass('p-3 overflowVert');


}


function initMap(councilUrl) {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: -33.5, lng: 151.209 }
    });
    var bounds = new google.maps.LatLngBounds();
    var image = 'assets/house.png';

    // Create an array of alphabetical characters used to label the markers.



    var infowindow = new google.maps.InfoWindow();

    if (!councilUrl) { councilUrl = url; }

    map.data.loadGeoJson(councilUrl, null, function (features) {



        var markers = features.map(function (feature) {
            var appNum = feature.getProperty('PLANNING_PORTAL_APP_NUMBER');
            var marker = new google.maps.Marker({
                icon: image,
                position: feature.getGeometry().get(0)
            });


            marker.addListener('click', function () {
                //      infowindow.open(map, marker);
                load_content(map, infowindow, marker, appNum);


            });
            bounds.extend(marker.getPosition());

            return marker;
        });


        map.fitBounds(bounds);

        var options = {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
            gridSize: 80,
            maxZoom: 12,
        };
        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers, options);

    });



    map.data.setMap(null);

}


function load_content(map, infowindow, marker, id) {
    $.ajax({
        url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/0/query?where=PLANNING_PORTAL_APP_NUMBER='" + id + "'&outFields=PLANNING_PORTAL_APP_NUMBER,COUNCIL_NAME,STATUS,TYPE_OF_DEVELOPMENT,APPLICATION_TYPE&f=pjson",
        dataType: 'json',
        success: function (data) {

            //  console.log(data.features[0].attributes);
            var result = formatResult(data);
            infowindow.open(map, marker);

            infowindow.setContent(result);

        }
    });
}

function formatResult(data) {



    var style = '<div class="card  "><div class="card-header"><h6 >' + data.features[0].attributes.COUNCIL_NAME + '<span class="badge ml-2 badge-light">' + data.features[0].attributes.STATUS + '</span></h6></div>' +
        '<div class="card-body"><h6 style="color:#5c348b;" class="card-title">Type of development :' + data.features[0].attributes.TYPE_OF_DEVELOPMENT + '</h6> </div>' +

        '<div class="card-footer ">Application Type: ' + data.features[0].attributes.APPLICATION_TYPE + '</div>';


    return style;
}

function numberConvert(num) {

    let parse = parseInt(num);
    var dollar;
    if (parse < 0 ? dollar = '-$' : dollar = '$');
    num = Math.abs(parse)


    if (num >= 1000000000) {
        return dollar + (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return dollar + (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return dollar + (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return dollar + (num);
}

function convertInt(cost) {
    return parseInt(cost);
}

function totalsInfographic(category) {
    $.each(liquorData, function (index, item) {

        if (item.Council === category) {
            var $this = $("#totalApps");
            $this.html(item.Total);

            animate($this, 1);
        }
    });
    $.each(rankData, function (index, item) {

        if (item.Council === category) {
            var $this = $('#totalCnr');
            $this.html(item.Rank);
            animate($this, 0);
        }

    });
    $.each(migrantData, function (index, item) {

        if (item.Council === category) {
            var $this = $('#totalMig');
            if (parseInt((item.BORN_OTH)) >= parseInt(item.BORN_AU)) {
                $this.html("The council has a diverse population with majority of its residents made up of migrants");
            }
            else {
                $this.html("The councils population predominantly comprises of people born in Australia");
            }

            //animate($this, 0);
        }

    });


    $.each(crimeData, function (index, item) {

        if (item.Council === category) {
            var $this = $('#totalCrm');
            var cal = Math.ceil(((parseInt(item.Year_2019) - parseInt(item.Year_2015)) / parseInt(item.Year_2015)) * 100);

            if (cal < 0) {
                $this.html("<p>The population in " + toTitleCase(selectedCouncil) + " is coping well with Domestic Violence cases</p><div class='icon mt-2 icon-lg icon-shape icon-shape-success shadow rounded-circle'><i class='ni ni-bold-up mr-2'></i></div><span class='p-4 h5 '>" + cal + "% down </span>");
            }
            else {
                $this.html("<p>The population in " + toTitleCase(selectedCouncil) + "is not coping well with Domestic Violence cases</p><div class='icon mt-2 icon-lg icon-shape icon-shape-danger shadow rounded-circle'><i class='ni ni-bold-down mr-2'></i></div><span class='p-4 h5'>" + cal + "% up</span>");
            }

            //animate($this, 0);
        }

    });

       $.each(spaceData, function (index, item) {

        if (item.Council === category) {
            var $this = $('#totalSpace');
             var cal = Math.ceil(((item.Year_2019 - item.Year_2017) / item.Year_2017) * 100);

            if (cal > 0) {
                $this.html("<p>The percentage of Open Public spaces in " + toTitleCase(selectedCouncil) + " </p>  <div class='icon mt-2 icon-lg icon-shape icon-shape-success shadow rounded-circle'><i class='ni ni-bold-up mr-2'></i></div><span class='p-4 h5 '>" + cal + "% up </span>");
            }
             else if (cal == 0) {
                $this.html("<p>The percentage of Open Public spaces in " + toTitleCase(selectedCouncil) + " </p>  <div class='icon mt-2 icon-lg icon-shape icon-shape-info shadow rounded-circle'><i class='ni ni-satisfied mr-2'></i></div><span class='p-4 h5 '>remain unchanged </span>");
            }

            else {
                $this.html("<p>The percentage of Open Public spaces in " + toTitleCase(selectedCouncil) + " </p> <div class='icon mt-2 icon-lg icon-shape icon-shape-danger shadow rounded-circle'><i class='ni ni-bold-down mr-2'></i></div><span class='p-4 h5'>" + cal + "% down </span>");
            }

            //animate($this, 0);
        }

    });

           $.each(amenitiesData, function (index, item) {

        if (item.Council === category) {
             $('#library').html(item.library);
               $('#halls').html(item.halls);
                 $('#pools').html(item.pools);
                  $('#toilets').html(item.toilets);

                   $('#cases').html(item.cases);
                    $('#testing').html(item.testing);

                     $('#community').html(item.community);


                      $('#crimes').html(Math.ceil(item.crimes));
                       $('#crimes_public').html(item.crimes_public);
                        $('#rank').html(item.rank);


                 $('#yourcouncil').html(toTitleCase(item.Council));
                  $('#yourcouncil1').html(toTitleCase(item.Council));
                   $('#yourcouncil2').html(toTitleCase(item.Council));


            //animate($this, 0);
        }

    });




}

function animate(ref, int) {

    var $this = $(ref);
    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 1500,
        easing: 'swing',
        step: function () {
            if (int == 1) {
                $this.text(Math.ceil(this.Counter) );
            }
            else {
                $this.text(Math.ceil(this.Counter));
            }

        }
    });

}
