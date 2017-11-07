$(document).ready(function() {
	$('.buttons').on('click', function() {
		var $target = $(event.target).text();
		$('#screen').append($target);
		if ($target === 'C') {
			$('#screen').empty();
			let screenDisplay = $('#screen > span').text();
			console.log(screenDisplay);

		}
	});
});
$(function () {
  let $screen = $(".screen")
  screen =$Scren[0];
  let $outcome = $(". ")


}
