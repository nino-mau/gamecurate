<?php 
require_once 'db-functions.php';

session_start();

// If Form is submited execute function to add user
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $formData = [
        'username' => trim($_POST['loginUsername']) ?? '',
        'pwd' => trim($_POST['loginPassword']) ?? '',
        'remember' => trim($_POST['remember']) ?? ''
    ];

    if ($formData) {
        loginUser($formData);
    } else {
        header('Location: /games-finder/src/views/login.php');
    }
}


?>

<p>test</p>
<?php 
$test = $_POST['remember'] ?? '';

if ($test) {
    echo 'test is true';
} else if (! $test) {
    echo "test isn't true";
} else {
    echo "test isn't false or true";
}

$test2 = $_POST['loginUsername'];
echo $test;
echo $test2;
?>