let i = 0
let next =()=>{
    i++
    if(i>6)i=1
    document.getElementById("1").src=i+".jpg"
}
let preveos=()=>{
    i--
    if(i<1)i=6
    document.getElementById("1").src=i+".jpg"

}
setInterval(()=>{
    next()
},6000)