$(document).ready(function() {
	// wire up the clicking
	// for now, let's just click the 4th panel and have it do its thing
	
	$('#right_panel').click(function() {
		$(this).animate({ top: '550px' });
	});
});

function route_answer(answer) {
	alert(answer);
}