<?php 
require_once 'db-functions.php';

session_start();

// If Form is submited execute function to add user
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $formData = [
        'username' => trim($_POST['registerUsername']) ?? '',
        'email' => trim($_POST['registerEmail']) ?? '',
        'pwd' => trim($_POST['registerPassword']) ?? '',
        'confirmPwd' => trim($_POST['registerConfirmPassword']) ?? ''
    ];
    
    registerUser($formData);
}

$dbh = getDatabaseConnection();

$stmt = $dbh->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>


<h2>Liste des Utilisateurs</h2>
<table border="1">
    <tr>
        <!-- On affiche les entetes de la table -->
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
    </tr>
    <!-- On parcourt le tableau $users et on affiche chaque utilisateur -->
    <?php foreach ($users as $user): ?>
        <!-- On affiche les informations de l'utilisateur -->
        <tr>
            <td><?= $user['id'] ?></td>
            <td><?= htmlspecialchars($user['username']) ?></td>
            <td><?= htmlspecialchars($user['email']) ?></td>
            <td><?= htmlspecialchars($user['password']) ?></td>
        </tr>
    <?php endforeach; ?>
</table>