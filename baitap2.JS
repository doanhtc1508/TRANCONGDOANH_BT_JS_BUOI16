function timSoXSoY () {
    var soX = +document.getElementById("soX").value ;
    var soN = +document.getElementById ("soN").value ;

     
    var sum = 0 ;
    var t  = 1  ;
   for (var i = 1 ; i <= soN ; i++ ){
        t = t * soX ;
        sum = sum + t ;

   }
    document.getElementById ("ketQua2").innerHTML = ` ${sum}`
   
}