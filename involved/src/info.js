let info = document.getElementById("info");

let $xhr = $.getJSON('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyBgfiDlTi-VtbLrQ0CjcV6z2KbVX_h7kwA');


$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return error;
    }
