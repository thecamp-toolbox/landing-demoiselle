


$(document).ready ( function(){
	toSVG(initmap);
})

function initmap() {
	setTimeout( function() 
	  {
	    $('#zone1').toggleClass('selected');
	  }, 1000);
};

function toSVG(callback) {
	jQuery('img.svg').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    jQuery.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

	});

	callback();
};

$('#collapseOne').on('show.bs.collapse', function () {
	$('.selected').toggleClass('selected');
	$('#zone1').toggleClass('selected');
});
$('#collapseTwo').on('show.bs.collapse', function () {
	$('.selected').toggleClass('selected');
	$('#zone2').toggleClass('selected');
});
$('#collapseThree').on('show.bs.collapse', function () {
	$('.selected').toggleClass('selected');
	$('#zone3').toggleClass('selected');
});
$('#collapseFour').on('show.bs.collapse', function () {
	$('.selected').toggleClass('selected');
	$('#zone4').toggleClass('selected');
});

$('#zone1').click( function(){
  console.log('zone1');
});