    var ol = document.getElementsByTagName('ol')[0]
    var olLis = ol.children
    var ul = document.getElementsByTagName('ul')[0]
    var ulLis = ul.children

    var right = document.getElementById('right')
    var left = document.getElementById('left')
    var box = document.getElementById('box')


//    自动播放
    var timeId = setInterval(function () {


//       数字标志计数 到最后一个就重置为0
        number++
        if(number == 4){
            number = 0
        }

//       控制当前数字标志只显示一个红色
        for(var j = 0;j<olLis.length;j++){
            olLis[j].style.background = 'white'
        }
        olLis[number].style.background = 'red'

//
        if(index == 4){
            ul.style.left = '0px'
            index = 0
        }
        index++

        var target = -index*200
        console.log(target)
        moveTo(ul,target)


    },1000)

    box.onmouseover = function () {
        clearInterval(timeId)
    }
    box.onmouseout = function () {
        clearInterval(timeId)
        timeId = setInterval(function () {


//       数字标志计数 到最后一个就重置为0
            number++
            if(number == 4){
                number = 0
            }

//       控制当前数字标志只显示一个红色
            for(var j = 0;j<olLis.length;j++){
                olLis[j].style.background = 'white'
            }
            olLis[number].style.background = 'red'

//
            if(index == 4){
                ul.style.left = '0px'
                index = 0
            }
            index++

            var target = -index*200
            console.log(target)
            moveTo(ul,target)


        },1000)
    }


    //  鼠标移入让当前元素变红 其他元素变白 图片移动到们对应位置
    for(var i = 0;i<olLis.length;i++){
        olLis[i].index = i
        olLis[i].onmouseover = function () {
            for(var j = 0;j<olLis.length;j++){
                olLis[j].style.background = 'white'
            }
            this.style.background = 'red'
            var count = this.index
//      设置目标位置
            var target = -count*200
//      调用函数到达目标位置
            moveTo(ul,target)
//           让鼠标移入和点击事件同步
            index = number = this.index

        }
    }

    //    定义变量
    var index = 0  //用来控制图片li的切换
    var number = 0  //控制数字标志的样式

    right.onclick = function () {

//       数字标志计数 到最后一个就重置为0
        number++
        if(number == 4){
            number = 0
        }

//       控制当前数字标志只显示一个红色
        for(var j = 0;j<olLis.length;j++){
            olLis[j].style.background = 'white'
        }
        olLis[number].style.background = 'red'

//
        if(index == 4){
            ul.style.left = '0px'
            index = 0
        }
        index++

        var target = -index*200
        console.log(target)
        moveTo(ul,target)
    }

    left.onclick = function () {
        number--
        if(number < 0 ){
            number = olLis.length-1
        }
        //       控制当前数字标志只显示一个红色
        for(var j = 0;j<olLis.length;j++){
            olLis[j].style.background = 'white'
        }
        olLis[number].style.background = 'red'


        if(index == 0){
            ul.style.left = -200*(ulLis.length-1) + 'px'
            index = ulLis.length-1
        }
        index--
        var target = -index*200
        moveTo(ul,target)

    }