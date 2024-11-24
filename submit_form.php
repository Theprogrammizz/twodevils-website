<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if ($name && $email && $subject && $message) {
        $to = "0twodevils0@gmail.com";
        $email_subject = "Contact Form Submission: $subject";
        $email_body = "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Subject: $subject\n";
        $email_body .= "Message:\n$message";

        $headers = "From: noreply@yourdomain.com";

        if (mail($to, $email_subject, $email_body, $headers)) {
            echo "Message sent successfully!";
        } else {
            error_log("Mail function failed.");
            echo "Failed to send message. Check error log for details.";
        }
    } else {
        echo "Please complete all fields.";
    }
} else {
    echo "Invalid request.";
}
?>


