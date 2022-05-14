function timN () {
    var n = 0 ;
    var sum = 0 ;
    while(sum <= 10000) {
        
        n++ ;
        sum += n ;
    }
    document.getElementById("ketQua").innerHTML = `${n}`
}
