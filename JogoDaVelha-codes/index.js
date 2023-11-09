type = "text/javascript";
src = "http://code.jquery.com/jquery-1.7.2.min.js";

let vez = "X";
let vencedor = "";

function casasIguais(a, b, c) {
  let bgA = $("#casa" + a).text();
  let bgB = $("#casa" + b).text();
  let bgC = $("#casa" + c).text();
  if (bgA == bgB && bgB == bgC && bgA != "") {
    if (bgA == "X") vencedor = "X";
    else vencedor = "O";
    return true;
  } else {
    return false;
  }
}

function verificaFimDeJogo() {
  if (
    casasIguais(1, 2, 3) ||
    casasIguais(4, 5, 6) ||
    casasIguais(7, 8, 9) ||
    casasIguais(1, 4, 7) ||
    casasIguais(2, 5, 8) ||
    casasIguais(3, 6, 9) ||
    casasIguais(1, 5, 9) ||
    casasIguais(3, 5, 7)
  ) {
    $("#resultado").html(`O jogador ${vencedor} venceu!`);
    $("#btn").attr("disabled", "disabled");
    $("#posicao").attr("disabled", "disabled");
  }
}

function jogada() {
  const valorInput = $("#posicao").val();
  if (valorInput > 0 && valorInput < 10) {
    $(`#casa${valorInput}`).text(vez);
    if (vez === "X") {
      vez = "O";
    } else {
      vez = "X";
    }
  }
  verificaFimDeJogo();
  $("#posicao").val("");
}

//essas estão comentadas pois tinha feito em live junto com o chat e a segunda foi do artigo que usei de referencia
//$(jogada){
// $('btn').click(function(){
//   console.log(event.currentTarget())
// })
//}

// $('.casa').click(function() {
//     let bg = $(this);
//     if(bg == 'none' || bg == '') {
//         var fig = 'url(' + vez.toString() +'.png)';
//         $(this).css('background', fig);
//         vez = (vez == 1? 2:1);
//         verificaFimDeJogo();
//     }
// });
