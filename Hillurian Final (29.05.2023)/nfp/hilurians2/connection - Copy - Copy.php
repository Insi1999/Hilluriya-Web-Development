<?php

    $host="localhost";
    $user="user";
    $pw = "abc@1234";
    $db = "abcdb";

    $con=mysqli_connect($host,$user,$pw,$db);

    if (!$con)
    {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
