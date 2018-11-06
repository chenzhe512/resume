!function () {
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop

            let currentTop = window.scrollY
            let targetTop = top - 80
            //console.log(currentTop)
            //console.log(targetTop)
            let s = targetTop - currentTop
            var coords = { y: currentTop };
            var t = Math.abs((s / 100) * 300)
            if (t > 500) {
                t = 500
            }
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.In)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();

            /*let n = 25  //一共动多少次
            let duration = 20 //多长时间动一次
            let currentTop = window.scrollY
            let targetTop = top - 80
            let distance = (targetTop - currentTop)/n
            console.log(duration)
            console.log(currentTop)
            console.log(targetTop)
            console.log(distance)
            let i = 0
    
            let id = setInterval(()=> {
                if (i === n){
                    window.clearInterval(id)
                    return 
                }
                i = i + 1
                window.scrollTo(0,currentTop + distance * i)
            },duration)*/
        }
    }
}.call()



