$(function() {
	/* BEGIN Creating chessboard */
	if ($('#chessboard_container').length > 0) {
		var letters = Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
		var light_square = true;
		$('#chessboard_container').html('<table class="chessboard"></table>');
		for (var i = 1; i <= 8; i++) { // Ranks
			$('.chessboard').append('<tr class="rank r' + i + '"></tr>');
			$('.r' + i).prepend('<td>' + (9 - i) + '</td>'); // Rank number (left)
			for (var j = 1; j <= 8; j++) { // Files
				$('.r' + i).append('<td class="file f' + j + ' ' + (light_square ? 'light' : 'dark') 
						+ '" title="' + letters[j - 1] + (9 - i) + '"></td>'); // Square
				light_square = !light_square;
			}
			$('.r' + i).append('<td>' + (9 - i) + '</td>'); // Rank number (right)
			light_square = !light_square;
		}
		$('.chessboard').prepend('<tr class="files"></tr>');
		$('.chessboard').append('<tr class="files"></tr>');
		$('.files').prepend('<td></td>');
		for (i in letters) {
			$('.files').append('<td>' + letters[i] + '</td>');
		}
		$('.files').append('<td></td>');
	}
	/* END Creating chessboard */
	
	$('.chessboard .file').click(function() {
		var sn = 'Q' + $(this).attr('title');
		if ($(this).hasClass('queen')) {
			$(this).removeClass('queen conflict');
			$('.' + sn).remove();
		}
		else {
			if ($('.chessboard .queen').length < 8) {
				$(this).addClass('queen');
				$('.current_queens').append('<li class="' + sn + '">' + sn + '</li>');
			}
		}
		check();
	});

	$('#clear_board').click(function() {
		$('.chessboard .queen').click();
	});

	$('#undo').click(function() {
		var sn = $('.current_queens li:last-child').text().slice(1, 3);
		$('.chessboard .queen[title=' + sn + ']').click();
	});
});

function check() {
	for (var i = 1; i <= 8; i++) { // Ranks
		for (var j = 1; j <= 8; j++) { // Files
			if ($('.chessboard .r' + i + ' .f' + j).hasClass('queen')) {
				conflict = false;
				var x, y;
				// Horizontal
				x = 1;
				while (!conflict && x <= 8) {
					conflict = x != i && $('.chessboard .r' + x + ' .f' + j).hasClass('queen');
					x++;
				}
				// Vertical
				y = 1;
				while (!conflict && y <= 8) {
					conflict = y != j && $('.chessboard .r' + i + ' .f' + y).hasClass('queen');
					y++;
				}
				// North-west
				x = i - 1; y = j - 1;
				while (!conflict && x > 0 && y > 0) {
					conflict = $('.chessboard .r' + x + ' .f' + y).hasClass('queen');
					x--;
					y--;
				}
				// North-east
				x = i - 1; y = j + 1;
				while (!conflict && x > 0 && y < 9) {
					conflict = $('.chessboard .r' + x + ' .f' + y).hasClass('queen');
					x--;
					y++;
				}
				// South-east
				x = i + 1; y = j + 1;
				while (!conflict && x < 9 && y < 9) {
					conflict = $('.chessboard .r' + x + ' .f' + y).hasClass('queen');
					x++;
					y++;
				}
				// South-west
				x = i + 1; y = j - 1;
				while (!conflict && x < 9 && y > 0) {
					conflict = $('.chessboard .r' + x + ' .f' + y).hasClass('queen');
					x++;
					y--;
				}
				conflict ? $('.chessboard .r' + i + ' .f' + j).addClass('conflict') : $('.chessboard .r' + i + ' .f' + j).removeClass('conflict');
			}
		}
	}
	$('.chessboard .queen').length == 8 && $('.chessboard .conflict').length == 0 ? $('.chessboard .queen').addClass('success') : $('.chessboard .success').removeClass('success');
}