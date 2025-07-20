// 背景图片 Cookies 
function setBgImg(bg_img) {
    if (bg_img) {
        Cookies.set('bg_img', bg_img, {
            expires: 36500
        });
        return true;
    }
    return false;
}

// 获取背景图片 Cookies
function getBgImg() {
    var bg_img_local = Cookies.get('bg_img');
    if (bg_img_local && bg_img_local !== "{}") {
        return JSON.parse(bg_img_local);
    } else {
        setBgImg(bg_img_preinstall);
        return bg_img_preinstall;
    }
}

var bg_img_preinstall = {
    "type": "1", // 1:默认背景 2:每日一图 3:随机风景 4:随机动漫
    "path": "http://jinenyy.vip/wallpaper", //自定义图片
};


// 更改背景图片
function setBgImgInit() {
    var bg_img = getBgImg();
    $("input[name='wallpaper-type'][value=" + bg_img["type"] + "]").click();

    switch (bg_img["type"]) {
        case "1":
            var pictures = new Array();
            pictures[0] = './img/1.jpeg';
            pictures[1] = './img/2.jpeg';
            pictures[2] = './img/3.jpeg';
            pictures[3] = './img/4.jpeg';
            pictures[4] = './img/5.jpeg';
            pictures[5] = './img/6.jpeg';
            pictures[6] = './img/7.jpeg';
            pictures[7] = './img/8.jpeg';
            pictures[8] = './img/9.jpeg';
            pictures[9] = './img/10.jpeg';
            pictures[10] = './img/11.jpeg';
            pictures[11] = './img/12.jpeg';
            pictures[12] = './img/13.jpeg';
            pictures[13] = './img/14.jpeg';
            pictures[14] = './img/15.jpeg';
            pictures[15] = './img/16.jpeg';
            pictures[16] = './img/17.jpeg';
            pictures[17] = './img/18.jpeg';
            pictures[18] = './img/19.jpeg';
            pictures[19] = './img/20.jpeg';
            pictures[20] = './img/21.jpeg';
            pictures[21] = './img/22.jpeg';
            pictures[22] = './img/23.jpeg';
            pictures[23] = './img/24.jpeg';
            pictures[24] = './img/25.jpeg';
            pictures[25] = './img/26.jpeg';
            pictures[26] = './img/27.jpeg';
            pictures[27] = './img/28.jpeg';
            pictures[28] = './img/29.jpeg';
            pictures[29] = './img/30.jpeg';
            pictures[30] = './img/31.jpeg';
            pictures[31] = './img/32.jpeg';
            pictures[32] = './img/33.jpeg';
            pictures[33] = './img/34.jpeg';
            pictures[34] = './img/35.jpeg';
            pictures[35] = './img/36.jpeg';
            pictures[36] = './img/37.jpeg';
            pictures[37] = './img/38.jpeg';
            pictures[38] = './img/39.jpeg';
            pictures[39] = './img/40.jpeg';
            pictures[40] = './img/41.jpeg';
            pictures[41] = './img/42.jpeg';
            pictures[42] = './img/43.jpeg';
            pictures[43] = './img/44.jpeg';
            pictures[44] = './img/45.jpeg';
            pictures[45] = './img/46.jpeg';
            pictures[46] = './img/47.jpeg';
            pictures[47] = './img/48.jpeg';
            pictures[48] = './img/49.jpeg';
            pictures[49] = './img/50.jpeg';
            pictures[50] = './img/51.jpeg';
            pictures[51] = './img/52.jpeg';
            pictures[52] = './img/53.jpeg';
            pictures[53] = './img/54.jpeg';
            pictures[54] = './img/55.jpeg';
            pictures[55] = './img/56.jpeg';
            pictures[56] = './img/57.jpeg';
            pictures[57] = './img/58.jpeg';
            pictures[58] = './img/59.jpeg';
            pictures[59] = './img/60.jpeg';
            pictures[60] = './img/61.jpeg';
            pictures[61] = './img/62.jpeg';
            pictures[62] = './img/63.jpeg';
            pictures[63] = './img/64.jpeg';
            pictures[64] = './img/65.jpeg';
            pictures[65] = './img/66.jpeg';
            pictures[66] = './img/67.jpeg';
            pictures[67] = './img/68.jpeg';
            pictures[68] = './img/69.jpeg';
            pictures[69] = './img/70.jpeg';
            pictures[70] = './img/71.jpeg';
            pictures[71] = './img/72.jpeg';
            pictures[72] = './img/73.jpeg';
            pictures[73] = './img/74.jpeg';
            pictures[74] = './img/75.jpeg';
            pictures[75] = './img/76.jpeg';
            pictures[76] = './img/77.jpeg';
            pictures[77] = './img/78.jpeg';
            pictures[78] = './img/79.jpeg';
            pictures[79] = './img/80.jpeg';
            pictures[80] = './img/81.jpeg';
            pictures[81] = './img/82.jpeg';
            pictures[82] = './img/83.jpeg';
            pictures[83] = './img/84.jpeg';
            pictures[84] = './img/85.jpeg';
            pictures[85] = './img/86.jpeg';
            pictures[86] = './img/87.jpeg';
            pictures[87] = './img/88.jpeg';
            pictures[88] = './img/89.jpeg';
            pictures[89] = './img/90.jpeg';
            pictures[90] = './img/91.jpeg';
            pictures[91] = './img/92.jpeg';
            pictures[92] = './img/93.jpeg';
            pictures[93] = './img/94.jpeg';
            pictures[94] = './img/95.jpeg';
            pictures[95] = './img/96.jpeg';
            pictures[96] = './img/97.jpeg';
            pictures[97] = './img/98.jpeg';
            pictures[98] = './img/99.jpeg';
            pictures[99] = './img/100.jpeg';
            pictures[100] = './img/101.jpeg';
            
            var rd = Math.floor(Math.random() * 100);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            break;
        case "2":
            $('#bg').attr('src', 'https://api.dujin.org/bing/1920.php'); //必应每日
            break;
        case "3":
            $('#bg').attr('src', 'https://api.ixiaowai.cn/gqapi/gqapi.php'); //随机风景
            break;
        case "4":
            $('#bg').attr('src', 'https://api.ixiaowai.cn/api/api.php'); //随机动漫
            break;
    }
}

$(document).ready(function () {
    // 壁纸数据加载
    setBgImgInit();
    // 设置背景图片
    $("#wallpaper").on("click", ".set-wallpaper", function () {
        var type = $(this).val();
        var bg_img = getBgImg();
        bg_img["type"] = type;

        if (type === "1") {
            setBgImg(bg_img);
            var pictures = new Array();
            pictures[0] = './img/1.jpeg';
            pictures[1] = './img/2.jpeg';
            pictures[2] = './img/3.jpeg';
            pictures[3] = './img/4.jpeg';
            pictures[4] = './img/5.jpeg';
            pictures[5] = './img/6.jpeg';
            pictures[6] = './img/7.jpeg';
            pictures[7] = './img/8.jpeg';
            pictures[8] = './img/9.jpeg';
            pictures[9] = './img/10.jpeg';
            pictures[10] = './img/11.jpeg';
            pictures[11] = './img/12.jpeg';
            pictures[12] = './img/13.jpeg';
            pictures[13] = './img/14.jpeg';
            pictures[14] = './img/15.jpeg';
            pictures[15] = './img/16.jpeg';
            pictures[16] = './img/17.jpeg';
            pictures[17] = './img/18.jpeg';
            pictures[18] = './img/19.jpeg';
            pictures[19] = './img/20.jpeg';
            pictures[20] = './img/21.jpeg';
            pictures[21] = './img/22.jpeg';
            pictures[22] = './img/23.jpeg';
            pictures[23] = './img/24.jpeg';
            pictures[24] = './img/25.jpeg';
            pictures[25] = './img/26.jpeg';
            pictures[26] = './img/27.jpeg';
            pictures[27] = './img/28.jpeg';
            pictures[28] = './img/29.jpeg';
            pictures[29] = './img/30.jpeg';
            pictures[30] = './img/31.jpeg';
            pictures[31] = './img/32.jpeg';
            pictures[32] = './img/33.jpeg';
            pictures[33] = './img/34.jpeg';
            pictures[34] = './img/35.jpeg';
            pictures[35] = './img/36.jpeg';
            pictures[36] = './img/37.jpeg';
            pictures[37] = './img/38.jpeg';
            pictures[38] = './img/39.jpeg';
            pictures[39] = './img/40.jpeg';
            pictures[40] = './img/41.jpeg';
            pictures[41] = './img/42.jpeg';
            pictures[42] = './img/43.jpeg';
            pictures[43] = './img/44.jpeg';
            pictures[44] = './img/45.jpeg';
            pictures[45] = './img/46.jpeg';
            pictures[46] = './img/47.jpeg';
            pictures[47] = './img/48.jpeg';
            pictures[48] = './img/49.jpeg';
            pictures[49] = './img/50.jpeg';
            pictures[50] = './img/51.jpeg';
            pictures[51] = './img/52.jpeg';
            pictures[52] = './img/53.jpeg';
            pictures[53] = './img/54.jpeg';
            pictures[54] = './img/55.jpeg';
            pictures[55] = './img/56.jpeg';
            pictures[56] = './img/57.jpeg';
            pictures[57] = './img/58.jpeg';
            pictures[58] = './img/59.jpeg';
            pictures[59] = './img/60.jpeg';
            pictures[60] = './img/61.jpeg';
            pictures[61] = './img/62.jpeg';
            pictures[62] = './img/63.jpeg';
            pictures[63] = './img/64.jpeg';
            pictures[64] = './img/65.jpeg';
            pictures[65] = './img/66.jpeg';
            pictures[66] = './img/67.jpeg';
            pictures[67] = './img/68.jpeg';
            pictures[68] = './img/69.jpeg';
            pictures[69] = './img/70.jpeg';
            pictures[70] = './img/71.jpeg';
            pictures[71] = './img/72.jpeg';
            pictures[72] = './img/73.jpeg';
            pictures[73] = './img/74.jpeg';
            pictures[74] = './img/75.jpeg';
            pictures[75] = './img/76.jpeg';
            pictures[76] = './img/77.jpeg';
            pictures[77] = './img/78.jpeg';
            pictures[78] = './img/79.jpeg';
            pictures[79] = './img/80.jpeg';
            pictures[80] = './img/81.jpeg';
            pictures[81] = './img/82.jpeg';
            pictures[82] = './img/83.jpeg';
            pictures[83] = './img/84.jpeg';
            pictures[84] = './img/85.jpeg';
            pictures[85] = './img/86.jpeg';
            pictures[86] = './img/87.jpeg';
            pictures[87] = './img/88.jpeg';
            pictures[88] = './img/89.jpeg';
            pictures[89] = './img/90.jpeg';
            pictures[90] = './img/91.jpeg';
            pictures[91] = './img/92.jpeg';
            pictures[92] = './img/93.jpeg';
            pictures[93] = './img/94.jpeg';
            pictures[94] = './img/95.jpeg';
            pictures[95] = './img/96.jpeg';
            pictures[96] = './img/97.jpeg';
            pictures[97] = './img/98.jpeg';
            pictures[98] = './img/99.jpeg';
            pictures[99] = './img/100.jpeg';
            pictures[100] = './img/101.jpeg';
            var rd = Math.floor(Math.random() * 100);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "2") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.dujin.org/bing/1920.php'); //必应每日
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "3") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.ixiaowai.cn/gqapi/gqapi.php'); //随机风景
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "4") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.ixiaowai.cn/api/api.php'); //随机动漫
            iziToast.show({
                message: '壁纸设置成功',
            });
        }
    });
});
