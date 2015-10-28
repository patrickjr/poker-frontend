<?php
  $server = $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'];
  header('Location: http://'.$server.'/example/index.html');
?>