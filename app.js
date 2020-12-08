const clock = document.getElementById('clock')

function clockTime() {
    const time = new Date()
    const h = time.getHours().toString()
    const m = time.getMinutes().toString()
    const s = time.getSeconds().toString()

    if(h.length < 2) {
        h = '0' + h
    } if(m.length < 2) {
        m = '0' + m
    } if(s.length < 2) {
        s = '0' + s
    }

    const clockString = h + ':' + m + ':' + s
    clock.textContent = clockString 
}
setInterval(clockTime, 1000)