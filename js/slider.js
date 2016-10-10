/* list of object with properties for url and text description of the design pic */
var designList = [
    { url: 'images/slider/1.png', text: "Branding: Logo design" },
    { url: 'images/slider/2.png', text: "3D render and modeling" },
    { url: 'images/slider/3.png', text: "Modeling and design" },
    { url: 'images/slider/4.png', text: "Digital illustration" },
    { url: 'images/slider/5.png', text: "Vector art" },
    { url: 'images/slider/6.png', text: "Vector art" },
    { url: 'images/slider/7.png', text: "Vector art" }

];

/* index is initial position, following 2 functions for when right or left buttons is
 * clicked to increse or decrease index, thus making the slider responsive
 */
var index = 0;

$("#right-button").click(function() {
	index++;

	if(index >= designList.length){
		index = 0;
	}

	$("#img-slider").attr("src", ""+designList[index].url+"");
	$("#title-slider").text(designList[index].text);
});


$("#left-button").click(function() {

	if(index === 0){
		index = designList.length;
	}

	index--;

	$("#img-slider").attr("src", ""+designList[index].url+"");
	$("#title-slider").text(designList[index].text);
});
