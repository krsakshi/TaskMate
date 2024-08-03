<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id'])) {
    $id = $data['id'];
    $sql = "DELETE FROM tasks WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Task deleted successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
} else {
    echo json_encode(["message" => "Invalid input"]);
}

$conn->close();
?>
