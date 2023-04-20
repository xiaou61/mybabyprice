window.onload = function () {
    // 获取love-you对象（点击首页的按钮弹出一个框）
    // let love_you_btn = document.querySelector('#love-you-btn');
    // love_you_btn.addEventListener('click', function () {
    //     // 获取love-you的弹出框
    //     let notification = document.querySelector('.notification-love-you');
    //     notification.style.left = '50px';
    //     let timer = setTimeout(() => {
    //         notification.style.left = '-430px';
    //         clearTimeout(timer);
    //     }, 3000)
    // })

    // 倒计时 runTimer 
    let runTimer = null;
    // 总结部分的字体添加动效果
    const res_words_animation = 'tracking-in-contract-bck-top-res-section';
    // 倒计时的字体进入动效
    const timer_in_animation = 'tracking-in-contract-bck-bottom';
    // video部分的字体进入动效
    const video_in_animation = 'focus-in-expand';

    // fullpage
    var myFullpage = new fullpage('#fullpage', {
        verticalCentered: true,
        // 导航小圆点
        navigation: true,
        //是否显示横向幻灯片的导航
        // slidesNavigation: true,
        // slidesNavPosition: 'top',

        // sectionsColor: ['#ffffff', '#4BBFC3', '#7BAABE', '#7BAABE', '#4BBFC3'],

        afterLoad: function (origin, destination, direction) {
            // 到相识计时器的部分的时候
            if (destination.index == 4) {
                let timer_animation = document.querySelector('.timer-main');
                timer_animation.classList.remove('hide-res');
                timer_animation.classList.add('show-res');
                timer_animation.classList.add(timer_in_animation);
            }

            // 到相爱计时器的部分的时候
            if (destination.index == 6) {
                let timer_animation = document.querySelector('.timer-main-love');
                timer_animation.classList.remove('hide-res');
                timer_animation.classList.add('show-res');
                timer_animation.classList.add(timer_in_animation);
            }

            // 到第一个video的部分的时候
            if (destination.index == 1) {
                let gaga_video = document.querySelector('#gaga-video-words');
                gaga_video.classList.remove('hide-res');
                gaga_video.classList.add('show-res');
                gaga_video.classList.add(video_in_animation);
                // 打开bgm
                let bgm = document.getElementById('bgm');
                bgm.play();
            }

            // 到第二个video的部分的时候
            if (destination.index == 2) {
                let zz_video = document.querySelector('#zz-video-words');
                zz_video.classList.remove('hide-res');
                zz_video.classList.add('show-res');
                zz_video.classList.add(video_in_animation);
                // 打开bgm
                let bgm = document.getElementById('bgm');
                bgm.play();
            }

            // 到总结的部分的时候
            if (destination.index == 5) {
                let res_content = document.querySelector('#res-content');
                res_content.classList.remove('hide-res');
                res_content.classList.add('show-res');
                res_content.classList.add(res_words_animation)
            }

            // 监听箭头是否到最后一个部分（相册）
            if (destination.index == 7) {
                // 去除最后一个部分的向下小箭头 
                let arrow_down = document.querySelector('.arrow-down');
                arrow_down.style.opacity = '0';

                // 给中心文字添加动画
                let centerWords = document.querySelector('.photos-content');
                centerWords.classList.remove('hide-opacity');
                centerWords.classList.add('move-in');

                // 添加背景点进入页面的动画
                let bg_pic_animation = document.querySelectorAll('.bg-pic');
                for (let item of [...bg_pic_animation]) {
                    item.classList.remove('hide-res');
                    item.classList.add('show-res');
                    item.classList.add('bg-move-in-pgae');
                }

                // 添加照片进入页面的动画
                let pic_box_animation = document.querySelectorAll('.pic-box');
                for (let item of [...pic_box_animation]) {
                    item.classList.remove('hide-res');
                    item.classList.add('show-res');
                    item.classList.add('slide-in-bck-bl-photos-list');
                }

            }

        },
        onLeave: function (origin, destination, direction) {
            // 离开相识计时器的部分的时候
            if (origin.index == 4) {
                let timer_run = setTimeout(() => {
                    let timer_animation = document.querySelector('.timer-main');
                    timer_animation.classList.remove('show-res');
                    timer_animation.classList.remove(timer_in_animation);
                    timer_animation.classList.add('hide-res');
                    clearTimeout(timer_run);
                }, 700)
            }

            // 离开相爱计时器的部分的时候
            if (origin.index == 6) {
                let timer_run_love = setTimeout(() => {
                    let timer_animation = document.querySelector('.timer-main-love');
                    timer_animation.classList.remove('show-res');
                    timer_animation.classList.remove(timer_in_animation);
                    timer_animation.classList.add('hide-res');
                    clearTimeout(timer_run_love);
                }, 700)
            }

            // 离开第一个video的部分的时候
            if (origin.index == 1) {
                let gaga_video_timer = setTimeout(() => {
                    let gaga_video = document.querySelector('#gaga-video-words');
                    gaga_video.classList.remove('show-res');
                    gaga_video.classList.remove(video_in_animation);
                    gaga_video.classList.add('hide-res');
                    clearTimeout(gaga_video_timer);
                }, 700)
                // 打开bgm
                let bgm = document.getElementById('bgm');
                bgm.pause();
            }

            // 离开第二个video的部分的时候
            if (origin.index == 2) {
                let zz_video_timer = setTimeout(() => {
                    let zz_video = document.querySelector('#zz-video-words');
                    zz_video.classList.remove('show-res');
                    zz_video.classList.remove(video_in_animation);
                    zz_video.classList.add('hide-res');
                    clearTimeout(zz_video_timer);
                }, 700)
                // 打开bgm
                let bgm = document.getElementById('bgm');
                bgm.pause();
            }

            // 离开总结的部分的时候
            if (origin.index == 5) {
                let timer = setTimeout(() => {
                    // 去除动画
                    let res_content = document.querySelector('#res-content');
                    res_content.classList.remove('show-res');
                    res_content.classList.remove(res_words_animation);
                    res_content.classList.add('hide-res');
                    clearTimeout(timer);
                }, 700)
            }

            // 离开相册的部分的时候（相册）
            if (origin.index == 7) {
                // 恢复最后一个部分的向下小箭头 
                let arrow_down = document.querySelector('.arrow-down');
                arrow_down.style.opacity = '1';

                let pic_box_animation_timer = setTimeout(() => {
                    // 删除中心文字动画
                    let centerWords = document.querySelector('.photos-content');
                    centerWords.classList.remove('move-in');
                    centerWords.classList.add('hide-opacity');

                    // 删除背景点进入页面的动画
                    let bg_pic_animation_cancel = document.querySelectorAll('.bg-pic');
                    for (let item of [...bg_pic_animation_cancel]) {
                        item.classList.remove('show-res');
                        item.classList.remove('bg-move-in-pgae');
                        item.classList.add('hide-res');
                    }

                    // 删除照片进入页面的动画
                    let pic_box_animation_cancel = document.querySelectorAll('.pic-box');
                    for (let item of [...pic_box_animation_cancel]) {
                        item.classList.remove('show-res');
                        item.classList.remove('slide-in-bck-bl-photos-list');
                        item.classList.add('hide-res');
                    }
                    clearTimeout(pic_box_animation_timer);
                }, 700)
            }

        }

    });

    // owl 轮播图
    let owl_instance = $('.owl-carousel');
    owl_instance.owlCarousel({
        // 每页显示一个
        items: 1,
        loop: true,
        // 幻灯片间距
        margin: 100,
        // 导航的图标
        // nav: true,
        // navText: ["<img src='imgs/owl/btn_pre.svg'/>", "<img src='imgs/owl/btn_next.svg'/>"],
        // 导航栏的点
        dots: true,

    })
    // 自定义 owl 的左右箭头点击事件
    $('.owl-btn-pre-cus').click(function () {
        owl_instance.trigger('prev.owl.carousel');
    })
    $('.owl-btn-next-cus').click(function () {
        owl_instance.trigger('next.owl.carousel');
    })

    // 计时器
    function timerRunningMarchine() {
        // 相识时间
        let startDate = '2019/9/1 20:00:00';
        let startTimeStamp = new Date(startDate).getTime();

        // 相爱时间
        let startDate_love = '2022/12/28 23:34:00';
        let startTimeStamp_love = new Date(startDate_love).getTime();

        runTimer = setInterval(() => {
            // console.log('与你相识！！');
            // 获取当前时间
            let nowTime = new Date().getTime();
            // 相识时间戳(s)
            let disTime = nowTime - startTimeStamp;

            // console.log('与你相爱！！');
            // 相爱时间戳(s)
            let disTime_love = nowTime - startTimeStamp_love;

            // 显示的相识时间
            let timer_know = runningTime(disTime);
            // 相识时间
            let timer = document.getElementById('timer');
            timer.innerText = timer_know.days + "天" + timer_know.hours + "小时" + timer_know.minutes + "分钟" + timer_know.seconds + "秒";

            // 显示的相爱时间
            let timer_love_time = runningTime(disTime_love);
            // 相爱时间
            let timer_love = document.getElementById('timer-love');
            timer_love.innerText = timer_love_time.days + "天" + timer_love_time.hours + "小时" + timer_love_time.minutes + "分钟" + timer_love_time.seconds + "秒";

        }, 1000)

        function runningTime(disTime) {
            //天数
            var days = Math.floor(disTime / (24 * 60 * 60 * 1000))
            //小时数
            var day_ms = disTime % (24 * 60 * 60 * 1000) //计算天数后剩余的毫秒数
            var hours = Math.floor(day_ms / (60 * 60 * 1000))
            //分钟数
            var day_hour = day_ms % (60 * 60 * 1000) //计算小时数后剩余的毫秒数
            var minutes = Math.floor(day_hour / (60 * 1000))
            //秒数
            var day_min = day_hour % (60 * 1000) //计算分钟数后剩余的毫秒数
            var seconds = Math.round(day_min / 1000)

            return {
                days,
                hours,
                minutes,
                seconds
            }
        }

    }
    // 启动计时器
    timerRunningMarchine();

    // 进入相册
    let goAlbum = document.querySelector('#go-album');
    goAlbum.onclick = function () {
        location.href = 'album.html';
    }

    console.log('say something !!! come on !!');    
    
    console.log('送你一个小心心：');
    console.log('    ❤️ ❤️           ❤️ ❤️ ');
    console.log('  ❤️ ❤️ ❤️ ❤️       ❤️ ❤️ ❤️ ❤️');
    console.log('❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️');
    console.log('❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️');
    console.log('❤️ ❤️ ❤️ l o v e y o u ❤️ ❤️ ❤️');
    console.log('  ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️');
    console.log('   ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️');
    console.log('     ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️');
    console.log('       ❤️ ❤️ ❤️ ❤️ ❤️ ❤️');
    console.log('         ❤️ ❤️ ❤️ ❤️');
    console.log('           ❤️ ❤️');
    console.log('            ❤️');

}