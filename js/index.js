$(function(){
    $('.nav').hover(function(){
        $(this).addClass('bb');
    },function(){
        $(this).removeClass('bb');
    })

    $('.san').click(function(){
        $('.daohang').css('right','0');
        $('.bj').show();
    })

    $('.x').click(function(){
        $('.daohang').css('right','-260px');
        $('.bj').hide();
    })
    $('.sa').hover(function(){
        $(this).children('.jt').show(500);
    },function(){
        $('.jt').hide(500);
    })
    // 播放音乐动画
    $('.sj').click(function(){
        $(this).parents('.music-1')
               .siblings('.music')
               .children('.nn')
                .toggleClass('nn2');
        $(this).parents('.music-1')
                .siblings('.music')
                .children('.mm')
                 .toggleClass('mm2');
            $(this).children('.t2').toggle();
            $(this).children('.t1').toggle();
    })
    // 播放声音

    $(".sj1").click(function() {
        // 让其他音乐停止
        var music = document.getElementById("bgMusic");
        var music2 = document.getElementById("bgMusic2");
        var music3 = document.getElementById("bgMusic3");
        music2.pause();
        music3.pause();
        // 暂停按钮切换
        $('#t3').css('display','block');
        $('#t4').css('display','none');
        $('#t5').css('display','block');
        $('#t6').css('display','none');
        // 播放动画停止
        $('#m2').removeClass('mm2');
        $('#n2').removeClass('nn2');
        $('#m3').removeClass('mm3');
        $('#n3').removeClass('nn3');
         // 判断是否播放
        if(music.paused) {
            music.play();
        } else {
           music.pause();  // 暂停
        }
    });
    $(".sj2").click(function() {
         // 让其他音乐停止
        var music1 = document.getElementById("bgMusic");
        var music = document.getElementById("bgMusic2");
        var music3 = document.getElementById("bgMusic3");
        music1.pause();
        music3.pause();
          // 暂停按钮切换
        $('#t1').css('display','block');
        $('#t2').css('display','none');
        $('#t5').css('display','block');
        $('#t6').css('display','none');
         // 播放动画停止
         $('#m1').removeClass('mm2');
         $('#n1').removeClass('nn2');
         $('#m3').removeClass('mm2');
         $('#n3').removeClass('nn2');
         // 判断是否播放
        if(music.paused) {
            music.play();
        } else {
           music.pause();  // 暂停
        }
    });
    $(".sj3").click(function() {
         // 让其他音乐停止
        var music1 = document.getElementById("bgMusic");
        var music2 = document.getElementById("bgMusic2");
        var music = document.getElementById("bgMusic3");
        music1.pause();
        music2.pause();
        // 暂停按钮切换
        $('#t1').css('display','block');
        $('#t2').css('display','none');
        $('#t3').css('display','block');
        $('#t4').css('display','none');
         // 播放动画停止
         $('#m1').removeClass('mm2');
         $('#n1').removeClass('nn2');
         $('#m2').removeClass('mm2');
         $('#n2').removeClass('nn2');
        // 判断是否播放
        if(music.paused) {
            music.play();
        } else {
           music.pause();  // 暂停
        }
    });
    
    // 点击播放视频
        $('.kk>span').eq(0).click(function(){
            $('.shipin1').show();
            $('.v-vd').trigger('play');
            $('.v-vd').attr('src',("http://usamusic.cn/video/Zitong-bokeli-liuxingyanchang.mp4"))
        })
        $('.kk>span').eq(1).click(function(){
            $('.shipin1').show();
            $('.v-vd').trigger('play');
            $('.v-vd').attr('src',("http://usamusic.cn/video/yu-bokeli-yinyuezhizuoquanjiang.mp4"))
        })
        $('.kk>span').eq(2).click(function(){
            $('.shipin1').show();
            $('.v-vd').trigger('play');
            $('.v-vd').attr('src',("http://usamusic.cn/video/qianzhenghao.mp4"))
        })
        $('.kk>span').eq(3).click(function(){
            $('.shipin1').show();
            $('.v-vd').trigger('play');
            $('.v-vd').attr('src',("http://usamusic.cn/video/yuqi.mp4"))
        })
   
    $('.v-close').click(function(){
        $('.shipin1').hide();
        $('.v-vd').trigger('pause');
    })
})
