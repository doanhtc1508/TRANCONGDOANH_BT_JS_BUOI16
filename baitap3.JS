function tinhGiaiThua(){
    var x = +document.getElementById ("numberX").value ;
    var sum = 1 ;
    if (x=== 0 || x=== 1){
        sum = sum ;
    }else{
        for (var i = x ; i >= 1 ; i-- ){
            sum = sum * i ;
        }
    }
    document.getElementById ("sum").innerHTML = `${sum}`
}
