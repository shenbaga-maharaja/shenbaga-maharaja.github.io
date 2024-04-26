<?php
$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $access_key = $_POST['access_key'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Construct email content
    $email_content = "Access Key: $access_key\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Number: $number\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Message: $message\n";
    
    // Send email
    $to = "shenbagamaharaja.a@gmail.com";
    $headers = "From: $email";
    
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        $response['success'] = true;
    } else {
        // Email sending failed
        $response['success'] = false;
    }
} else {
    // Invalid request method
    $response['success'] = false;
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
