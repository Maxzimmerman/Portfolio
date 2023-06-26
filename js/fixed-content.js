$(function () {
    $(".overview-about").hover(function () {
        $(".overview-item-about").animate({
            width: "40px"
        }, 200)
        $(".overview-link-about").animate({
            marginLeft: "50px"
        }, 200)
    }, function () {
        $(".overview-item-about").animate({
            width: "10px"
        }, 200)
        $(".overview-link-about").animate({
            marginLeft: "12px"
        }, 200)
    })

    $(".overview-experience").hover(function () {
        $(".overview-item-experience").animate({
            width: "40px"
        }, 200)
        $(".overview-link-experience").animate({
            marginLeft: "50px"
        }, 200)
    }, function () {
        $(".overview-item-experience").animate({
            width: "10px"
        }, 200)
        $(".overview-link-experience").animate({
            marginLeft: "12px"
        }, 200)
    })

    $(".overview-projects").hover(function () {
        $(".overview-item-projects").animate({
            width: "40px"
        }, 200)
        $(".overview-link-projects").animate({
            marginLeft: "50px"
        }, 200)
    }, function () {
        $(".overview-item-projects").animate({
            width: "10px"
        }, 200)
        $(".overview-link-projects").animate({
            marginLeft: "12px"
        }, 200)
    })
})