﻿$(document).ready(function () {
    // Activate Carousel with a specified interval
    $("#demo").carousel({ interval: 500 });

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#demo").carousel(0);
    });
    $(".item2").click(function () {
        $("#demo").carousel(1);
    });
    $(".item3").click(function () {
        $("#demo").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
        $("#demo").carousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $("#demo").carousel("next");
    });
});