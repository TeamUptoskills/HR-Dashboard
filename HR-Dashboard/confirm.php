<?php
if (isset($_GET['email']) && isset($_GET['otp'])) {
    require 'db.php';

    $email = $_GET['email'];
    $otp = $_GET['otp'];

    $sql = "SELECT otp FROM users WHERE email = ? AND otp = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $otp);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->close();

        // Clear the OTP after successful confirmation
        $sql = "UPDATE users SET otp = NULL WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);

        if ($stmt->execute()) {
            echo "Registration confirmed! You can now log in.";
        } else {
            echo "Error: " . $stmt->error;
        }
    } else {
        echo "Invalid OTP or email.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>