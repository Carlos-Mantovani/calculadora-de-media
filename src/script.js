var nome = "Carlos";
var notas = [10, 5, 9, 2];
var somaDasNotas = 0;

for(i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

var notaFinal = somaDasNotas/notas.length;
var notaFinal = notaFinal.toFixed(0);

console.log("Bem-vindo " + nome);
console.log(notaFinal);

var passouDeAno;

if (notaFinal > 5) {
  passouDeAno = true;
  passou = 'Aprovado';
}else{
  passouDeAno = false;
  passou = 'Reprovado';
}

console.log(`O aluno ${nome} passou de ano? ${passouDeAno}`);

document.body.innerHTML += `<section class="informacoes">
<p> Bem vindo ${nome}</p>
<p> Sua nota foi: ${notaFinal}</p>
<p>${passou}</p>
</section>`

//Revisão
//Variáveis, strings, console.log, toFixed, operações, matemáticas, concatenação