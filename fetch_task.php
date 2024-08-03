<?php
include 'db.php';

$sql = "SELECT * FROM tasks";
$result = $conn->query($sql);

$tasks = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tasks[] = $row;
    }
}

echo json_encode($tasks);

$conn->close();
?>
