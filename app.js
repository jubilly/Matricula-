$(document).ready(function() {
    $("#button").click(function() {
        var a = $("#nota1").val();
        var numero1 = parseInt(a);
        var b = $("#nota2").val();
        var numero2 = parseInt(b);
        var c = $("#nota3").val();
        var numero3 = parseInt(c);
        var medianumerador;
        var media;
        if(numero1>=0 && numero2 >=0 && numero3 >=0){
            medianumerador = numero1+numero2+numero3;
            media = medianumerador/3;
            console.log(media);
            var media1 = parseFloat(media);
            $('#divcriacao').append("<br><label> A média final é: " + media1 + "</label>");
            if(medianumerador == 0 || medianumerador < 12){
                $('#divcriacao').append('<div id = "reprovado"><br><label> Você foi reprovado kk</label><div>');
            }
            if(medianumerador>= 21){
                $('#divcriacao').append("<br><label> Você foi aprovado</label>");
            }
            if(medianumerador >=12 && medianumerador <= 20){
                $('#divcriacao').append("<br><label>Você está de recuperação</label>");
            }
            
        }
    
    });
});