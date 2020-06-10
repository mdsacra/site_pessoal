window.addEventListener('load', function(){
    var height = window.innerHeight
    console.log(height)
    var body = document.getElementById('body')
    var getHeight = body.getElementsByClassName('defineHeight')
    for (i = 0; i < getHeight.length; i++) {
        getHeight[i].style.height = `${height+5}px`
    }
})