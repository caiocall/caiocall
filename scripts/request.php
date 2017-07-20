<?php

if($_POST['id'] === "contact-form-text-form") {
	$to = "djcaiocall@hotmail.com"; // Your e-mail address here.
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$headers .= 'From: ' . $to . "\r\n" .
			   'Reply-To: ' . $to;
	$data_array = json_decode($_POST['data']);
	$body = "";
	foreach ($data_array as $key => $value) {
		$body .= $value->name.': '.$value->value.'<br>';
	}
	$subject = "E-mail enviado pelo site caiocall"; // Your e-mail address here.
	mail($to, $subject, $body, $headers); // E-Mail subject here.
}

?>