<?php

  $destinatario = 'agustinmatiasf@gmail.com';
  // esto es al correo al que se enviara el msj
  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $email = $_POST['correo'];
  $telefono = $_POST['telefono'];
  $mensaje = $_POST['mensaje'];

  $header = "Enviado desde el portfolio FloresAM";
  $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

  mail($destinatario, $mensajeCompleto, $telefono, $email, $header);

?>