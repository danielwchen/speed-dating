var w = 300,
    h = 300;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions_f = ['Stated Preference','Perceived Preference of Society','True Preference'];
var LegendOptions_m = ['Stated Preference','Perceived Preference of Society','True Preference'];

//Data
var d_f = [
    [//women self
        {axis:"Attractiveness",value:.18020372},
        {axis:"Sincerity",value:.1822223},
        {axis:"Intelligence",value:.20971004},
        {axis:"Shared Interests",value:.12650632},
        {axis:"Fun",value:.17299108},
        {axis:"Ambition",value:.12818476}
    ],
    // [//women men look for
    //     {axis:"Attractiveness",value:.35600632},
    //     {axis:"Sincerity",value:.11284535},
    //     {axis:"Intelligence",value:.12478439},
    //     {axis:"Shared Interests",value:.12626766},
    //     {axis:"Fun",value:.19051636},
    //     {axis:"Ambition",value:.09114387}
    // ],
    [//women other women look for
        {axis:"Attractiveness",value:0.2950641},
        {axis:"Sincerity",value:0.12615385},
        {axis:"Intelligence",value:0.14846154},
        {axis:"Shared Interests",value:0.12397436},
        {axis:"Fun",value:0.17301282},
        {axis:"Ambition",value:0.13314103}
    ],[//women true preference
        {axis:"Attractiveness",value:0.29136048},
        {axis:"Sincerity",value:0.062738552},
        {axis:"Intelligence",value:0.082452089},
        {axis:"Shared Interests",value:0.244857297},
        {axis:"Fun",value:0.261661364},
        {axis:"Ambition",value:0.056930219}
    ]
];

var d_m = [
    [//men self
        {axis:"Attractiveness",value:0.272488},
        {axis:"Sincerity",value:0.163796},
        {axis:"Intelligence",value:0.19387418},
        {axis:"Shared Interests",value:0.109024},
        {axis:"Fun",value:0.17536836},
        {axis:"Ambition",value:0.08759782}
    ],
    // [//men women look for
    //     {axis:"Attractiveness",value:0.25012218},
    //     {axis:"Sincerity",value:0.15126255},
    //     {axis:"Intelligence",value:0.15126255},
    //     {axis:"Shared Interests",value:0.11123745},
    //     {axis:"Fun",value:0.18015164},
    //     {axis:"Ambition",value:0.14305273}
    // ],
    [//men other men look for
        {axis:"Attractiveness",value:0.3448125},
        {axis:"Sincerity",value:0.12075},
        {axis:"Intelligence",value:0.138625},
        {axis:"Shared Interests",value:0.12175},
        {axis:"Fun",value:0.1875625},
        {axis:"Ambition",value:0.0841875}
    ],[//men true preference
        {axis:"Attractiveness",value:0.361513249},
        {axis:"Sincerity",value:0.040552217},
        {axis:"Intelligence",value:0.048031608},
        {axis:"Shared Interests",value:0.232961937},
        {axis:"Fun",value:0.229650376},
        {axis:"Ambition",value:0.087290613}
    ]
];

//Options for the Radar chart, other than default
var mycfg = {
    w: w,
    h: h,
    maxValue: 0.4,
    levels: 4,
    ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart1", d_f, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#visualization')
    .selectAll('svg')
    .append('svg')
    .attr("width", w+300)
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)')
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("% importance of attribute in potential partner");

//Initiate Legend
var legend = svg.append("g")
        .attr("class", "legend")
        .attr("height", 100)
        .attr("width", 200)
        .attr('transform', 'translate(90,20)')
    ;
//Create colour squares
legend.selectAll('rect')
    .data(LegendOptions_f)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i){ return colorscale(i);})
;
//Create text next to squares
legend.selectAll('text')
    .data(LegendOptions_f)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function(d) { return d; })
;

RadarChart.draw("#chart2", d_m, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#visualization')
    .selectAll('svg')
    .append('svg')
    .attr("width", w+300)
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)')
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("% importance of attribute in potential partner");

//Initiate Legend
var legend = svg.append("g")
        .attr("class", "legend")
        .attr("height", 100)
        .attr("width", 200)
        .attr('transform', 'translate(90,20)')
    ;
//Create colour squares
legend.selectAll('rect')
    .data(LegendOptions_m)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i){ return colorscale(i);})
;
//Create text next to squares
legend.selectAll('text')
    .data(LegendOptions_m)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function(d) { return d; })
;