<?php

    $host="your.host.net";
    $user="user";
    $pw = "2023fun";
    $db = "fundb";

    $con=mysqli_connect($host,$user,$pw,$db);

    if (!$con)
    {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
