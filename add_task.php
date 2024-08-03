<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['task'])) {
    $task = $data['task'];
    $sql = "INSERT INTO tasks (task) VALUES ('$task')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Task added successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
} else {
    echo json_encode(["message" => "Invalid input"]);
}

$conn->close();
?>
