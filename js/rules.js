// Отправка заявки 
$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "functions/check_rules.php"
    })
    .done(function (msg) {
        if(msg==='Admin') {
            var adminP =  document.getElementById("admin-panel");
            if(adminP.classList.contains("close")) {
                console.log('yes');
                console.log(adminP.classList);
                adminP.classList.remove("close");
                console.log(adminP.classList);
            }
        }
        if(msg==='User') {
            console.log('no');
            if(!adminP.classList.contains("close")) {
                adminP.classList.add('close');
            }
        }
    })
});