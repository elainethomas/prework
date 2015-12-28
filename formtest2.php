<?php //formtest.php
if (isset ($_POST ['name'])) $name = $_POST ['name'];
else $name = "(Not entered)";

echo <<<_END
<html>
	<head>
		<title>Your Dog's Name</title>
	</head>
	<body>
		Your dog is named $name <br>
		<form method="post" action= "formtest2.php">
			What is your dog's name?
			<input type="text" name="name">
			<input type="submit">
		</form>
	</body>
</html>
_END;
?>