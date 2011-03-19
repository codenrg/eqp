<?php header('Content-type: text/html; charset=utf-8'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" dir="ltr">
	<head>
		<title>Eight queens puzzle</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="Content-Style-Type" content="text/css" />
		<link rel="stylesheet" href="css/reset.css" type="text/css" />
		<link rel="stylesheet" href="css/styles.css" type="text/css" />
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
		<script type="text/javascript" src="js/game.js"></script>
	</head>
	<body>
		<div id="container">
			<h1>Eight queens puzzle</h1>
			<div id="chessboard_container"></div>
			<div id="stats">
				<input type="button" value="Clear board" id="clear_board" />
				<input type="button" value="Undo placement" id="undo" />
				<h3>Current queens</h3>
				<ol class="current_queens"></ol>
			</div>
		</div>
	</body>
</html>
