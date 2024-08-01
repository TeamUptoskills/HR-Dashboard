<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        function validateEmail() {
            const email = document.getElementById('email').value;
            const emailError = document.getElementById('emailError');
            const invalidDomains = [
                'gmail.com', 'ymail.com', 'yahoo.com', 'hotmail.com',
                'outlook.com', 'live.com', 'aol.com', 'msn.com',
                'comcast.net', 'verizon.net', 'att.net', 'icloud.com',
                'me.com', 'mac.com', 'mail.com', 'gmx.com', 'zoho.com',
                'protonmail.com', 'hushmail.com', 'fastmail.com',
                'tutanota.com', 'inbox.com', 'mail.ru', 'yandex.com',
                'qq.com', '126.com', '163.com', 'sina.com', 'yeah.net',
                'aliyun.com', 'foxmail.com', 'rediffmail.com', 'indiatimes.com',
                'bigstring.com', 'care2.com'
            ];

            const emailDomain = email.split('@')[1];

            if (invalidDomains.includes(emailDomain)) {
                emailError.textContent = "Please use a corporate or official email address.";
                emailError.style.display = 'block';
                return false;
            } else {
                emailError.textContent = "";
                emailError.style.display = 'none';
                return true;
            }
        }

        function validatePassword() {
            const password = document.getElementById('password').value;
            const passwordError = document.getElementById('passwordError');
            const regex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d.*\d.*\d.*\d).{5,}$/;

            if (!regex.test(password)) {
                passwordError.textContent = "Password must be at least 5 characters long, include at least one uppercase letter, one special character, and four digits.";
                passwordError.style.display = 'block';
                return false;
            } else {
                passwordError.textContent = "";
                passwordError.style.display = 'none';
                return true;
            }
        }

        function validateForm() {
            const emailValid = validateEmail();
            const passwordValid = validatePassword();
            return emailValid && passwordValid;
        }
    </script>
</head>
<body>
    <div class="container">
        <h2>Register</h2>

        <?php
        $error = "";
        $success = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            require 'db.php';

            $fullname = $_POST['fullname'];
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // List of non-corporate email domains
            $invalid_domains = [
                'gmail.com', 'ymail.com', 'yahoo.com', 'hotmail.com',
                'outlook.com', 'live.com', 'aol.com', 'msn.com',
                'comcast.net', 'verizon.net', 'att.net', 'icloud.com',
                'me.com', 'mac.com', 'mail.com', 'gmx.com', 'zoho.com',
                'protonmail.com', 'hushmail.com', 'fastmail.com',
                'tutanota.com', 'inbox.com', 'mail.ru', 'yandex.com',
                'qq.com', '126.com', '163.com', 'sina.com', 'yeah.net',
                'aliyun.com', 'foxmail.com', 'rediffmail.com', 'indiatimes.com',
                'bigstring.com', 'care2.com'
            ];

            $email_domain = substr(strrchr($email, "@"), 1);

            if (in_array($email_domain, $invalid_domains)) {
                $error = "Please use a corporate or official email address.";
            } else {
                // Check if email already exists
                $sql = "SELECT * FROM users WHERE email = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("s", $email);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows > 0) {
                    $error = "This email is already registered. Please use a different email address.";
                } else {
                    // Generate OTP
                    $otp = rand(100000, 999999);
                    $sql = "INSERT INTO users (fullname, username, email, password, otp) VALUES (?, ?, ?, ?, ?)";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param("sssss", $fullname, $username, $email, $hashed_password, $otp);

                    if ($stmt->execute()) {
                        // Send confirmation email with OTP
                        $subject = "Email Verification";
                        $message = "Your OTP is $otp. Click the link to confirm your registration: ";
                        $message .= "http://yourdomain.com/confirm.php?email=$email&otp=$otp";
                        $headers = "From: no-reply@yourdomain.com";

                        if (mail($email, $subject, $message, $headers)) {
                            $success = "Registration successful! Please check your email to confirm your registration.";
                        } else {
                            $error = "Error sending confirmation email.";
                        }
                    } else {
                        $error = "Error: " . $stmt->error;
                    }
                }

                $stmt->close();
            }

            $conn->close();
        }
        ?>

        <?php if (!empty($error)): ?>
            <div class="message error-message">
                <?php echo $error; ?>
            </div>
        <?php elseif (!empty($success)): ?>
            <div class="message success-message">
                <?php echo $success; ?>
            </div>
        <?php endif; ?>

        <form action="register.php" method="post" onsubmit="return validateForm();" autocomplete="off">
            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" autocomplete="off" required><br><br>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" autocomplete="off" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" autocomplete="off" onblur="validateEmail();" required>
            <div id="emailError" class="error-message"></div><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" autocomplete="new-password" onblur="validatePassword();" required>
            <div id="passwordError" class="error-message"></div><br><br>
            <button type="submit">Register</button>
        </form>
    </div>
</body>
</html>
