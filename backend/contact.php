<?php
header('Access-Control-Allow-Origin: *');

include("connect.php");


// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);


$name = $_POST['name'];
$email = $_POST['email'];
$pnumber = $_POST['pnumber'];
$message = $_POST['message'];

echo $name;

$query = $mysqli->prepare("INSERT INTO `contacts` (`full_name`, `email`, `phone_number`, `message`) VALUES (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email, $pnumber, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>