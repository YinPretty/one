$(document).ready(function () {

    $(".border-top2-frist").on('click',function () {
        $(this).children(".border-top2-second").fadeToggle(300);
    });
    //左部菜单显示与隐藏
    $(".left-menu-first").on('click', function () {
        $(this).next().slideToggle();
        $(this).siblings(".left-menu-first").next().slideUp();
    });
    $(".left-menu-second").on('click', function () {
        $(this).next().slideToggle();
        $(this).siblings(".left-menu-second").next().slideUp();
    });
    //左部菜单图标转换

    $(".left-menu-first").on('click',function () {
        $(this).children(".fa").toggleClass("fa-angle-up");
        $(this).children(".fa").toggleClass("fa-angle-down")
    });
    $(".left-menu-second").on('click',function () {
        $(this).children(".fa").toggleClass("fa-minus");
        $(this).children(".fa").toggleClass("fa-plus");
    });

    //表格上部页内页面
    $(".title1-drs").on('click',function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-drs").css("display","block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-dfm,.title1-1-ddn,.title1-1-sjyc").css("display","none");
        $(this).css("border-top","2px solid red");
        $(this).siblings(".title1").css("border-top","1px solid #cccccc")
    });
    $(".title1-dpz").on('click',function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz").css("display","block");
        $(this).css("border-top","2px solid red");
        $(this).siblings(".title1").css("border-top","1px solid #cccccc")
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-drs,.title1-1-dfm,.title1-1-ddn,.title1-1-sjyc").css("display","none");
    });
    $(".title1-dfm").on('click',function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dfm").css("display","block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-drs,.title1-1-ddn,.title1-1-sjyc").css("display","none");
        $(this).css("border-top","2px solid red");
        $(this).siblings(".title1").css("border-top","1px solid #cccccc")
    });
    $(".title1-ddn").on('click',function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-ddn").css("display","block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-dfm,.title1-1-drs,.title1-1-sjyc").css("display","none");
        $(this).css("border-top","2px solid red");
        $(this).siblings(".title1").css("border-top","1px solid #cccccc")
    });
    $(".title1-sjyc").on('click',function () {
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-sjyc").css("display","block");
        $(this).parent(".titles").parent(".right-bottom-top").siblings(".title1-1-dpz,.title1-1-dfm,.title1-1-ddn,.title1-1-drs").css("display","none");
        $(this).css("border-top","2px solid red");
        $(this).siblings(".title1").css("border-top","1px solid #cccccc")
    });
    //分页
    $(".page-1").on('click',function () {
        // $(this).parent("li").parent(".pagination").parent(".Page").parent(".pages").siblings(".table1").children(".table").children(".table1-main-page1").toggleClass("show");
        // $(this).parent("li").parent(".pagination").parent(".Page").parent(".pages").siblings(".table1").children(".table").children(".table1-main-page2,.table1-main-page3").toggleClass("hidden");
        $(this).css("background","rgb(41,128,189)");
        $(this).css("color","rgb(255,255,255)");
        // $(this).parent("li").siblings("li").children(".page-2,.page-3").css("background","rgb(255,255,255)");
        // $(this).parent("li").siblings("li").children(".page-2,.page-3").css("color","rgb(18,150,219)");
    });
    $(".page-2").on('click',function () {
        // $(this).parent("li").parent(".pagination").parent(".Page").parent(".pages").siblings(".table1").children(".table").children(".table1-main-page2").toggleClass("show");
        // $(this).parent("li").parent(".pagination").parent(".Page").parent(".pages").siblings(".table1").children(".table").children(".table1-main-page1,.table1-main-page3").toggleClass("hidden");
        $(this).css("background","rgb(41,128,189)");
        $(this).css("color","rgb(255,255,255)");
        // $(this).parent("li").siblings("li").children(".page-1,.page-3").css("background","rgb(255,255,255)");
        // $(this).parent("li").siblings("li").children(".page-3,.page-1").css("color","rgb(18,150,219)");
    });
    $(".page-3").on('click',function () {
        // $(this).parent("li").parent(".pagination").parent(".Page").parent(".pages").siblings(".table1").children(".table").children(".table1-main-page3").toggleClass("show");
        // $(this).parent("li").parent(".pagination").parent(".Page").parent(".pages").siblings(".table1").children(".table").children(".table1-main-page1,.table1-main-page2").toggleClass("hidden");
        $(this).css("background","rgb(41,128,189)");
        $(this).css("color","rgb(255,255,255)");
        // $(this).parent("li").siblings("li").children(".page-2,.page-1").css("background","rgb(255,255,255)");
        // $(this).parent("li").siblings("li").children(".page-2,.page-1").css("color","rgb(18,150,219)");
    });
    $(".page-3").click(function () {
        $(".table1-main-page3").fadeIn(200);
        $(".table1-main-page2,.table1-main-page1").css("display","none");
        $(".page-2,.page-1").css("background","rgb(255,255,255)");
        $(".page-2,.page-1").css("color","rgb(18,150,219)");
    });
    $(".page-2").click(function () {
        $(".table1-main-page2").fadeIn(200);
        $(".table1-main-page3,.table1-main-page1").css("display","none");
        $(".page-3,.page-1").css("background","rgb(255,255,255)");
        $(".page-3,.page-1").css("color","rgb(18,150,219)");
    });
    $(".page-1").click(function () {
        $(".table1-main-page1").fadeIn(200);
        $(".table1-main-page3,.table1-main-page2").css("display","none");
        $(".page-2,.page-3").css("background","rgb(255,255,255)");
        $(".page-2,.page-3").css("color","rgb(18,150,219)");
    });
    //系统弹窗
    $(".picadd-add").click(function () {
        $(".popup").fadeToggle(200);
    });
    $(".close-pic").click(function () {
        $(".popup").fadeToggle(200);
    });
    // $(".picadd-add").on('click',function () {
    //    $(this).parent(".border-right").siblings(".popup").fadeToggle(200);
    // });

});