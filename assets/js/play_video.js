window.onload = function() {
    onload1();
    onload2();
    onload3();
    onload4();
}

function onload1(){
    var local1 = document.getElementById('videoID');  //获取，函数执行完成后local内存释放
    local1.autoplay = true; // 自动播放
    local1.loop = true; // 循环播放
    local1.muted=true; // 关闭声音，如果为false,视频无法自动播放
    if(local1.paused){  //判断是否处于暂停状态
        local1.play();  //开启播放
    } else {
        local1.pause();  //停止播放
    }
}

function onload2(){
    var local1 = document.getElementById('videoID1');  //获取，函数执行完成后local内存释放
    local1.autoplay = true; // 自动播放
    local1.loop = true; // 循环播放
    local1.muted=true; // 关闭声音，如果为false,视频无法自动播放
    if(local1.paused){  //判断是否处于暂停状态
        local1.play();  //开启播放
    } else {
        local1.pause();  //停止播放
    }
}

function onload3(){
    var local1 = document.getElementById('videoID2');  //获取，函数执行完成后local内存释放
    local1.autoplay = true; // 自动播放
    local1.loop = true; // 循环播放
    local1.muted=true; // 关闭声音，如果为false,视频无法自动播放
    if(local1.paused){  //判断是否处于暂停状态
        local1.play();  //开启播放
    } else {
        local1.pause();  //停止播放
    }
}

function onload4(){
    var local1 = document.getElementById('videoID2');  //获取，函数执行完成后local内存释放
    local1.autoplay = true; // 自动播放
    local1.loop = true; // 循环播放
    local1.muted=true; // 关闭声音，如果为false,视频无法自动播放
    if(local1.paused){  //判断是否处于暂停状态
        local1.play();  //开启播放
    } else {
        local1.pause();  //停止播放
    }
}


function btn(){
    var local=document.getElementById('videoID');  //获取，函数执行完成后local内存释放
    if(local.paused){  //判断是否处于暂停状态
        local.play();  //开启播放
    } else {
        local.pause();  //停止播放
    }
}