<?php

if($_POST)
{
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];
    $para = 'rodrigueznoeliasabrina@gmail.com';
    $titulo = 'MTS Contacto web';
     
    $msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Telefono: $telefono\n Mensaje:\n $mensaje";
    $headers = 'MIME-Version: 1.0' . "\r\n" .'Content-type: text/html; charset=utf-8' . "\r\n" .'From: ' . $email . "\r\n";
    mail($para, $titulo, $msjCorreo,$headers);
?>
    <script>
     window.location.href='https://mtsconstrucciones.000webhostapp.com/';
    </script>
<?php } ?>