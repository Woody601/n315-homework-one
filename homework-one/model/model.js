export function evalPage(pageID) {
    if(pageID != "") {
        $.get(`pages/${pageID}/${pageID}.html`, function(data) {
            //console.log("data " + pageID);
            $("#app").html(data);
        });
    }
    else {
        $.get(`pages/home/home.html`, function(data) {
            //console.log("data " + pageID);
            $("#app").html(data);    
        });
    }
}
    
export function mmbToggle() {
    var elem = document.getElementById("myTopnav");
    elem.classList.toggle("change");
    elem.classList.toggle("responsive");
  }