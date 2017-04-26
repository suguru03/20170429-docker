<?
$conn = new mysqli('db', getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'));
?>

<h1>MySQL</h1>
<?  if ($conn->connect_error) { ?>
	<p>Failed: <?= $conn->connect_error ?></p>
<? } else { ?>
	<p>OK!</p>
<? } ?>

