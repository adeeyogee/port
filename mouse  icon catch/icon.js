document.onmousemove = function () {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="https://icons.iconarchive.com/icons/rafiqul-hassan/blogger/32/Key-icon.png" id="icon">')
    
    const ico = document.getElementById('icon')
    ico.style.position = 'fixed'
    
    document.onmousemove = function(event) {
        
        ico.style.left = event.clientX + 20+ 'px'
        ico.style.top = event.clientY + 'px'
}
}




