$(document).ready(() => {
    $(".btn").click(() => {
        $("#square").animate({
            position: "relative",
            left: "1000px",
            top: "190px"
        }, 3000);
    });
})