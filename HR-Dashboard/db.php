<?php
$servername = "localhost";
$username = "employerdbuser";
$password = "O0).C46MST1M";
$dbname = "employerdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>