import { evalPage, mmbToggle}from "../model/model.js";

function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    //console.log(hashTag + " " + pageID);
    evalPage(pageID);
    // This MMisOpen states that the mobile menu is open, when the navigation id "myTopnav" has the class responsive added to it, indicating that it is opened up.
    let MMisOpen = document.getElementById("myTopnav").classList.contains("responsive");
    if (MMisOpen) {
        mmbToggle();
    }
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function(){
    initURLListener();
    // Allows the mobile menu to open up when the user clicks on the hamburger button in the mobile menu.
    $(".mmb").click(function() { 
        mmbToggle();
    });
})