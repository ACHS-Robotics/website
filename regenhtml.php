<?php
session_start();
 
if(!(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true)){// make sure user is logged in
  header("location: login.php");
  exit;
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $year = '2020';//default to 2020
    if(!empty(trim($_POST["year"]))){
        $year = trim($_POST["year"]);
    }
$html = file_get_contents('start.html');//this is the html "code" that will be written to the file. start.html contains some one time stuff like <head> and css
$imgslist = "var imgs = [";
$imgslistnospace = "var imgsns = [";// spaghetti? sorry i dont speak italian
$cycle = ["gallery_thin","gallery_wide","gallery_thin","gallery_wide","gallery_thin","gallery_wide","gallery_wide","gallery_wide","gallery_wide"];// css cycle
$cycle2 = ["_thumbs_square","_thumbs","_thumbs_square","_thumbs","_thumbs_square","_thumbs","_thumbs","_thumbs","_thumbs"];// filename cycle. these cycles give the page the square/8:5 structure
$c = 0;//cycle index

if ($handle = opendir('imgAliases/'.$year)) {
    while (false !== ($entry = readdir($handle))) {
        if (!is_dir('imgAliases/'.$entry) && $entry != '.DS_Store') {//ds store because i have a mac and that file always gets generated and cant be removed
            $c = 0;
            $html .= "\n<div class = \"gallery_label\">".file_get_contents('imgAliases/'.$year.'/'.$entry)."</div>\n";
            if ($handle2 = opendir('images/'.$entry)) {
                while (false !== ($entry2 = readdir($handle2))) {
                    if (!is_dir('images/'.$entry2) && $entry2 != '.DS_Store') {
//                        $html .= "<div onclick=\"mediashow('".$entry."/".$entry2."')\" class=\"".$cycle[$c]."\"><img src=\"images/".$entry.$cycle2[$c]."/".$entry2."\"></div>\n";
                        $html .= "<div onclick=\"mediashow(this)\" class=\"".$cycle[$c]."\"><img src=\"images/".$entry.$cycle2[$c]."/".$entry2."\"></div>\n";
                        $imgslistnospace .= str_replace(' ','%20',"\"".$entry.'/'.$entry2.'",');
                        $imgslist .= "\"".$entry.'/'.$entry2.'",';
                        $c = ($c+1)%count($cycle);
                                
                    }
                }
                closedir($handle2);
            }
        }
    }
    closedir($handle);
}

$html .= "<script>\nvar path = \"images/\";//var path = \"gallery".$year."/\";\n".substr($imgslist,0,strlen($imgslist)-1)."];\n".substr($imgslistnospace,0,strlen($imgslistnospace)-1)."];\n";
$html .= file_get_contents('end.html');
$f = fopen('gallery'.$year.'.html','w');
fwrite($f,$html);
fclose($f);
echo "Mission passed, <br /><a href=\"gallery".$year.".html\">View gallery</a>";}
?> 

<form action="" method="post">
    <div>
        <label>Year</label>
        <input type="text" name="year" value="2020">
    </div>    
    <div class="form-group">
        <input type="submit" class="btn" value="Confirm">
    </div>
</form>
<br />
regenerates the html file for the gallery
<br />
<a href="admin.php">Admin Portal</a>
<br />

