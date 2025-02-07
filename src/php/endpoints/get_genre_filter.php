<?php 
/** -- Handle receiving genre filter data from games-list page -- */
session_start();

header("Content-Type: application/json"); // Ensure JSON response
header("Access-Control-Allow-Origin: *"); // Enable CORS if needed

$filterValue = json_decode(file_get_contents("php://input"), true);

if ($filterValue) {
    echo json_encode(['message' => "Data received", 'data' => $filterValue]);
    $_SESSION['gamesListGenreFilter'] = $filterValue;
} else {
    json_encode(['error' => "No data received"]);
}
