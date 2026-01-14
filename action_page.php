<?php
$fname = $_GET["fname"];
$mail = $_GET["mail"];
$number=$_GET["lnumber"]
$subject = $_GET["subject"];
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,100);

// send email
mail("support@inqorpharmaceuticals.in","My subject",$fame,$mail,$number,$subject);

echo welcome $fname your mail has been sent to support@inqorpharmaceuticals.in
?>
