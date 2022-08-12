<?php
header("Content-Type: text/html;charset=utf-8");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$function = $request->function;
$function();
function mostrar()
{

	global $request;

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db_market";


	$conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

	$sql_1 = "SELECT * FROM  productos";
	$result = $conn->query($sql_1);
	if ($result->num_rows > 0) {

		$i = 0;
        // output data of each row
        while ($row = $result->fetch_assoc()) {

            $userData[$i] = $row;
            $i++;
        }
        echo json_encode($userData);
	} else {
	
		echo '0';
	}
	$conn->close();
}



