<?php
if (function_exists('mail')) {
    echo 'The mail() function is enabled on your server.';
} else {
    echo 'The mail() function is not enabled on your server.';
}
?>