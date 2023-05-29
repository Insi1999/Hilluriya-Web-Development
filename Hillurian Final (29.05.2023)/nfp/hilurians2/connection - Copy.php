<?php

    $host="your.host.com";
    $user="user";
    $pw = "fun";
    $db = "fundb";

    $con=mysqli_connect($host,$user,$pw,$db);

    if (!$con)
    {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
