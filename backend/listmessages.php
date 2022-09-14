<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include("connect.php");

$query = $mysqli->prepare("SELECT * FROM contacts");
$query->execute();
$results = $query->get_result();

while($a = $results->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>