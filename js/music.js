const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [{
            name: "中文慢版伤感串烧嗨曲 (DJ版)",
            artist: "进恩哥资源仓库",
            url: "https://cn-beijing-data.aliyundrive.net/VjkIJEij%2F2291058720%2F64f47501982424bf3eb943c7bb057ef54ffc0710%2F64f47501ad87e6da25c548abb38124c4d8d702ef?di=bj29&dr=2291058720&f=64f47501982424bf3eb943c7bb057ef54ffc0710&pds-params=%7B%22ap%22%3A%2276917ccccd4441c39457a04f6084fb2f%22%7D&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27%25E6%259C%25AA%25E7%259F%25A5%25E6%25AD%258C%25E6%2589%258B%2520-%2520%25E4%25B8%25AD%25E6%2596%2587%25E6%2585%25A2%25E7%2589%2588%25E4%25BC%25A4%25E6%2584%259F%25E4%25B8%25B2%25E7%2583%25A7%25E5%2597%25A8%25E6%259B%25B2%2520%2528DJ%25E7%2589%2588%2529.mp3&security-token=CAIS8gF1q6Ft5B2yfSjIr5bXPMDVqOtbg4qOZHbmhzQ2P71evqbBkzz2IHhMf3NpBOkZvvQ1lGlU6%2Fcalq5rR4QAXlDfNT3xGgvSqFHPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41Uh1jgjtPzkkpfFtkGF1GeXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLs0ARrv4r1fMUqW2X543AUgFLhy2KKMPY99xpFgh9a7j0iCbSGyUu%2FhqAAT%2BpaLzqGwAM7R6KeM20ptB%2FotXKV5bj2ik96UiPStt3yKH1d2c578scA1pSE4gcBADOIvQKNfP6dmMyyK9zilDWtYGLHmQPnJ30tWIxeTLio%2BD8ulWaFKTP2vsItGlMrZ%2BfDCgHdJK%2FQVPOgPZI0DuLY%2B%2B41Q6Xh71kS9uhF5BYIAA%3D&u=d3ed949ded944cc583622e8ee8c5084b&x-oss-access-key-id=STS.NUbwzaE4z4HefPWc4c32rQcjq&x-oss-expires=1713021845&x-oss-signature=C1NhtUHvUAQn%2BVcyX6USlzLyJ%2BBGEzc95NUVdDGBpQQ%3D&x-oss-signature-version=OSS2",
            cover: "https://jinenyy.vip/bizhi",
            lrc: "data:application/octet-stream;base64,WzAwOjAwLjAwMF0g5L2c6K+NIDog5bC557qmClswMDowMS4wMDBdIOS9nOabsiA6IOmSsembtwpbMDA6NDcuNjNd5rW35rWq5peg5aOw5bCG5aSc5bmV5rex5rex5re55rKhClswMDo1NC41OF3mvKvov4flpKnnqbrlsL3lpLTnmoTop5LokL0KWzAxOjAxLjQ1XeWkp+mxvOWcqOaipuWig+eahOe8nemamemHjOa4uOi/hwpbMDE6MDguMThd5Yed5pyb5L2g5rKJ552h55qE6L2u5buTClswMToxNC42Ml3nnIvmtbflpKnkuIDoibIg5ZCs6aOO6LW36Zuo6JC9ClswMToyMS4xNl3miaflrZDmiYvlkLnmlaPoi43ojKvojKvng5/ms6IKWzAxOjI4LjQyXeWkp+mxvOeahOe/heiGgCDlt7Lnu4/lpKrovr3pmJQKWzAxOjM1LjYxXeaIkeadvuW8gOaXtumXtOeahOe7s+e0ogpbMDE6NDEuOTNd5oCV5L2g6aOe6L+c5Y67IOaAleS9oOemu+aIkeiAjOWOuwpbMDE6NDguNjdd5pu05oCV5L2g5rC46L+c5YGc55WZ5Zyo6L+Z6YeMClswMTo1NS42Nl3mr4/kuIDmu7Tms6rmsLQg6YO95ZCR5L2g5rWB5reM5Y67ClswMjowMi44N13lgJLmtYHov5vlpKnnqbrnmoTmtbflupUKWzAyOjIzLjIxXea1t+a1quaXoOWjsOWwhuWknOW5lea3sea3sea3ueayoQpbMDI6MzAuNTVd5ryr6L+H5aSp56m65bC95aS055qE6KeS6JC9ClswMjozNy41Ml3lpKfpsbzlnKjmoqblooPnmoTnvJ3pmpnph4zmuLjov4cKWzAyOjQ0LjIwXeWHneacm+S9oOayieedoeeahOi9ruW7kwpbMDI6NTAuNTBd55yL5rW35aSp5LiA6ImyIOWQrOmjjui1t+mbqOiQvQpbMDI6NTcuMzNd5omn5a2Q5omL5ZC55pWj6IuN6Iyr6Iyr54Of5rOiClswMzowNC4xOF3lpKfpsbznmoTnv4XohoAg5bey57uP5aSq6L696ZiUClswMzoxMS40NV3miJHmnb7lvIDml7bpl7TnmoTnu7PntKIKWzAzOjE3Ljg1Xeeci+S9oOmjnui/nOWOuyDnnIvkvaDnprvmiJHogIzljrsKWzAzOjI0Ljc3XeWOn+adpeS9oOeUn+adpeWwseWxnuS6juWkqemZhQpbMDM6MzEuNTVd5q+P5LiA5ru05rOq5rC0IOmDveWQkeS9oOa1gea3jOWOuwpbMDM6MzkuMzBd5YCS5rWB5Zue5pyA5Yid55qE55u46YGHCg==",
            theme: "#171513"
        },
            {
            name: "情歌连奏 (纯音乐)",
            artist: "Billy",
            url: "https://cn-beijing-data.aliyundrive.net/Zi5v3keK%2F84975524%2F6496e85ebaf5d77dcd074d649ed4abcca351fafe%2F6496e85e8d740319c743459e96f5642e3a4ce431?di=bj29&dr=2291058720&f=64f478b3c1492a7465864414bbdf95e3dc9f6215&pds-params=%7B%22ap%22%3A%2276917ccccd4441c39457a04f6084fb2f%22%7D&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Billy%2520-%2520%25E6%2583%2585%25E6%25AD%258C%25E8%25BF%259E%25E5%25A5%258F%2520%2528%25E7%25BA%25AF%25E9%259F%25B3%25E4%25B9%2590%2529.mp3&security-token=CAISvgJ1q6Ft5B2yfSjIr5b4A8zngqUX4pK9Y2Tot2M4fMl6vrKcrzz2IHhMf3NpBOkZvvQ1lGlU6%2Fcalq5rR4QAXlDfNSDifADSqFHPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41Uh1jgjtPzkkpfFtkGF1GeXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLs0ARrv4r1fMUqW2X543AUgFLhy2KKMPY99xpFgh9a7j0iCbSGyUu%2FhcRm5sw9%2Byfo34lVYneUzKBSReT64IClLcc%2BmqdsRIvJzWstJ7Gf9LWqChvSgk4TxhhcNFKSTQrInFCB0%2BcRObJl16ioUADevXtuMkagAEJ3FjUUSO0zjwoaIA9ozatilLOYPRn7n4zzY8WEnKgXCeGi8fbjSWxcHZCHrtT3MjqPTVpyGILIWTxCk2jgx9jZHSFoHUt2RifR%2Fr5B4x5TxlIJMPJZy3xrd8iXbK1jx6SWEfxYk%2BCUOj1R5THSEMzpzR1Q0B37LHDWKWmMO4F%2FCAA&u=d3ed949ded944cc583622e8ee8c5084b&x-oss-access-key-id=STS.NUMHvSoz6UPVaBYScmpFVQw7M&x-oss-expires=1713021669&x-oss-signature=v4ATuUEXplor7fxwQltNyopBk%2FoFCWiUFmhmg2xxVSU%3D&x-oss-signature-version=OSS2",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
            theme: "#171513"
        },
       ]
});

/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});