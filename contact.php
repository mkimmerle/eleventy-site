<?php
/* Set e-mail recipient */
$myemail  = "mkimmerle@yahoo.com";
$subject  = "Portfolio Website Feedback";

/* Check all form inputs using check_input function */
$name = check_input($_POST['name'], "Please enter your name");
$email    = check_input($_POST['email'], "Please enter a valid e-mail address");
$phone    = check_input($_POST['phone'], "Please enter your telephone number");
$comments = check_input($_POST['comments'], "Please provide questions or comments");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* Let's prepare the message for the e-mail */
$message = "

Name: $name
E-mail: $email
Phone: $phone

Comments:

$comments


";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: thanks.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>

