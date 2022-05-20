function taoTheDiv(){
    // var result = document.getElementById ("result").style.display="block" ;
    var content ="" ;
    for (var i = 1 ;i <= 10 ; i++){
        var leDiv = `<div div style= "background-color:blue">Div lẻ ${i}</div>`;
        var chanDiv =  `<div div style= "background-color:red">Div Chẵn ${i}</div>`;
        if (i % 2 === 0){
            content += chanDiv ;
        }else {
            content += leDiv ;
        }
    }
    document.getElementById("result").innerHTML = content ;
}