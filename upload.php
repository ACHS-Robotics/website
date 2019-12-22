<?php
$OK = false;
session_start();
if(!(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true)){
    header("location: fail.html");
    exit;
} else {
 $OK = true;
}
echo phpinfo();

if(isset($_POST['submit'])){
 
 // Count total files
 $countfiles = count($_FILES['file']['name']);
echo "<html>";
 // Looping all files
 for($i=0;$i<$countfiles;$i++){
  $filename = $_FILES['file']['name'][$i];
 
  // Upload file
  if (move_uploaded_file($_FILES['file']['tmp_name'][$i],'temp/'.$filename)){
      echo $filename;
  } else {
      echo $_FILES['file']['tmp_name'][$i]." fail ".$filename;
  }

    }
} 
?>

<form method='post' action='' enctype='multipart/form-data'>
 
 <input type="file" name="file[]" multiple>
 <input type='submit' name='submit' value='upload'>

</form>

</html>