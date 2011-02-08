$(document).ready(function() {
	// wire up the clicking
	// for now, let's just click the 4th panel and have it do its thing
	
	$('#answer_yes').click(function() {
		// update the background
		$('#comic').css({'background-image': 'url(images/yes_bg.png)'});
		reveal();
	});
	
	$('#answer_no').click(function() {
		$('#comic').css({'background-image': 'url(images/no_bg.png)'});
		reveal();
	});
});

function reveal() {
	$('#right_panel').animate({ top: '550px' });
}
