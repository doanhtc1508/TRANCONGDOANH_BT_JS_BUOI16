function taoTheDiv(){
    // var result = document.getElementById ("result").style.display="block" ;
    var content ="" ;
    for (var i = 0;i < 10 ; i++){
        var leDiv = `<div div style= "background-color:blue">lẻ</div>`;
        var chanDiv =  `<div div style= "background-color:red">Chẵn</div>`;
        if (i % 2 !== 0){
            content += leDiv ;
        }else {
            content += chanDiv ;
        }
    }
    document.getElementById("result").innerHTML = content ;
}