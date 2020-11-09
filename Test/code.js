

var viz;
var workbook;
var activeSheet;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/JavaScriptMapDemo/Map",
        options = {
            hideTabs: true,
            onFirstInteractive: function ()

                {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet();
                    console.log("options is working");

                }

        };

    viz = new tableau.Viz(containerDiv, url, options);
}


function barChart(){

    // var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("West");
    console.log('Bar Chart Activated');
    var chart = document.getElementById("barChart");
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;
};

document.getElementById("bubbleChart").addEventListener('click', hideViz);

function hideViz(){
    var vizDiv = document.getElementById("vizContainer");
    vizDiv.style.display = 'none';
    var chartID = document.getElementById("chartType");
    chartID.style.display = 'none';
};


//Region Button Click
document.getElementById("Western").addEventListener('click', regionalChart);
document.getElementById("Eastern").addEventListener('click', regionalChart);
document.getElementById("Central").addEventListener('click', regionalChart);
document.getElementById("Southern").addEventListener('click', regionalChart);

function regionalChart(region, regionID){
   var vizDiv = document.getElementById("vizContainer");
   vizDiv.style.display = 'block';
   var workbook = viz.getWorkbook();
    workbook.activateSheetAsync(region);
    console.log(region + " " + "is  Activated");
    var chart = document.getElementById(regionID);
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;

};






// function SouthMap(){
//     var workbook = viz.getWorkbook();
//     workbook.activateSheetAsync("South");
//     console.log('South Map Activated');
//     var chart = document.getElementById("southMap");
//     var chartID = document.getElementById("chartType");
//     chartID.innerHTML = 'You have Chosen to see ' + chart.value;
// };


// function centralMap(){

//     var workbook = viz.getWorkbook();
//     workbook.activateSheetAsync("Central");
//     console.log('Central Chart Activated');
//     var chart = document.getElementById("Central");
//     var chartID = document.getElementById("chartType");
//     chartID.innerHTML = 'You have Chosen to see ' + chart.value;
// };


// Worksheet Resizing

// function vizResize() {
//     var width = document.getElementById("resizeWidth").value;
//     var height = document.getElementById("resizeHeight").value;

//     // gets the width and height value

//     viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
// }


// Dashboard Resizing

// function vizResize() {
//     var width = document.getElementById("resizeWidth").value;
//     var height = document.getElementById("resizeHeight").value;
//     var sheet = viz.getWorkbook().getActiveSheet();

//     sheet.changeSizeAsync(
//         {"behavior": "EXACTLY", "maxSize": { "height": height, "width": width }})
//         .then(viz.setFrameSize(parseInt(width, 10), parseInt(height, 10)));
// }









//Original Size

// function originalSize() {
//     // viz.setFrameSize(parseInt(1300, 10), parseInt(700, 10));
//     var workbook = viz.getWorkbook();
//     workbook.revertAllAsync();
// }



//End of Test








//Switching Sheets

// function barChart(){

//     // var workbook = viz.getWorkbook();
//     workbook.activateSheetAsync("West");
//     console.log('Bar Chart Activated');
//     var chart = document.getElementById("barChart");
//     var chartID = document.getElementById("chartType");
//     chartID.innerHTML = 'You have Chosen to see ' + chart.value;
// };


// function BubbleChart(){
//     var workbook = viz.getWorkbook();
//     workbook.activateSheetAsync("Bubble Chart");
//     console.log('Bubble Chart Activated');
//     var chart = document.getElementById("bubbleChart");
//     var chartID = document.getElementById("chartType");
//     chartID.innerHTML = 'You have Chosen to see ' + chart.value;
// };

//This is because the Bubble chart and BW Chart do not have region filter

// var bubbleChart = document.getElementById("bubbleChart");
// var boxAndWhisker = document.getElementById("boxAndWhisker");



// bubbleChart.addEventListener('click', function(){
//     var regionDiv = document.getElementById("filterSelection");
//     regionDiv.style.display = 'none';
// });

// boxAndWhisker.addEventListener('click', function(){
//     var regionDiv = document.getElementById("filterSelection");
//     regionDiv.style.display = 'none';
// });








// function boxAndWhisker(){
//     var workbook = viz.getWorkbook();
//     workbook.activateSheetAsync("BW");
//     console.log('Box and Whisker Chart Activated');
//     var chart = document.getElementById("boxAndWhisker");
//     var chartID = document.getElementById("chartType");
//     chartID.innerHTML = 'You have Chosen to see ' + chart.value;
// };


// //Filters
// //wEST Filter
// //Promise should be used here

// function westFilter(){
//     // workbook.activateSheetAsync("Bar Chart");
//     activeSheet.applyFilterAsync(
//         "Region",
//         "West",
//         tableau.FilterUpdateType.REPLACE
//     );
// };



// //EAST Filter

// function eastFilter(){

//     activeSheet.applyFilterAsync(
//         "Region",
//         "East",
//         tableau.FilterUpdateType.REPLACE
//     )
// };




// //SOUTH Filter

// function southFilter(){
   
//     activeSheet.applyFilterAsync(
//         'Region',
//         'South',
//         tableau.FilterUpdateType.ADD
//     )
// };



// //radio button Activation

// function radioButton()
// {
//     const rbs = document.querySelectorAll('input[name = "region"]');
//     //double quote is needed in a single quote to ensure specitifity
//     let selectedValue;
//     for(const radiobutton of radiobuttons){
//         if (radiobutton.checked){
//             selectedValue = radiobutton.value;
//             break;
//         }
//     }


// };








