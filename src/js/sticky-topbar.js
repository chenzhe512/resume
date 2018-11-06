!function () {
    var view = document.querySelector('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
            //this.bindEvents.call(this)
        },
        bindEvents: function () {
            var view = this.view
            //这个this需要两次判断，首先this.bindEvents.call(this)，然后controller.init(controller,view)
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                    //this.如果直接写this的话，this指的是用户滚动元素，也就是触发事件的元素
                } else {
                    this.deactive()
                }
            })  //不用.bind(this))
            //箭头函数没有this，内外this一样
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }

    controller.init(view)
    //controller.init.call(controller,view)  如果是通过一个对象来调用一个函数，那么相当于这个对象就是这个函数的this
    //决定了第7行的this是controller
}.call()


