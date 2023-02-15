document.getElementById('check').addEventListener('click', check)
document.getElementById('full').addEventListener('click', toggleScreen)
function check() {
    console.log('fullScreenEnabled: ')
    console.log(document.fullscreenEnabled)  // can fullscreen, true
    console.log('fullScreenElement: ')
    console.dir(document.fullscreenElement) // elements in fullscreen, null
}

function toggleScreen() {
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen()
    } else {
       if  (document.fullscreenEnabled) {
        document.exitFullscreen()
       }
    }
}

const img = document.getElementById('img')
img.addEventListener('click', toggleScreen)

function toggleScreen() {
    if (!document.fullscreenElement) {
        img.requestFullscreen()
    } else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen()
        }
    }
}