//desenvolvimento do conteudo ministrado pelo Grande Felipe
//primeiro desafio de logica
//criar sistema de gerenciamento de nome e xp de heroi e respectivo nivel de acordo com o seu valor de xp

//mensagem de boas vindas
console.log("Seja Bem Vindo a nosso desafio, Vamos iniciar escolhendo um nome para o seu heroi ")

//entrada de nome de heroi ENTRADA DE DADOS
let nickname = "Daniel"

//adicionar verificador para nao ter nome repetido/
//(aqui me deparei com uma duvida em relacao ao funcionamento da criacao de uma lista de nome ja utilizados dentro da variavel nomeJaUtilizado)
let nomeJaUtilizado = "Daniel"
let nomeInvalido = nomeJaUtilizado === nickname

if (nickname === nomeJaUtilizado){
console.log("ATENCAO!!! Nome ja em utilizacao! Por Favor utilize outro nome:"  )

//Esta estrutura foi finalizada na ultima linha do programa devido ao nome repetido aparecer no ranqueamento
}else{
    console.log("Seja bem vindo " + nickname)

//confirmacao do nome
console.log(nickname + " Parabens! Seu heroi foi criado com sucesso")


//constante de repeticao (criada para nao precisar escrever toda mes a mesma mensagem para cada nivel de experiencia)
const nivel = "Parabens voce chegou ao nivel de"

//estrutura de repeticao para adicionar XP aumentando a XP do personagem
for (i = 0; i <= 7000; i +=2000)

if (i <= 1000 ){
    console.log(nickname + " "+
    nivel + " " +
    "FERRO. ")
}else if (i <= 2000){
    console.log(nickname + " "+
    nivel + " " +
    "BRONZE. ")
}else if (i <= 5000){
    console.log(nickname + " "+
    nivel + " " +
    "PRATA. ")
}else if (i <= 7000){
    console.log(nickname + " "+
    nivel + " " +
    "OURO. ")
}else if (i <=8000){
    console.log(nickname + " "+
    nivel + " " +
    "PLATINA. ")
}else if (i <=9000){
    console.log(nickname + " "+
    nivel + " " +
    "ASCENDENTE. ")
}else if (i <=10000){
    console.log(nickname + " "+
    nivel + " " +
    "IMORTAL. ")
}else{
    console.log(nickname + " "+
    nivel + " " +
    "RADIANTE. ")
}
//mensagem final
console.log("O heroi de nome: " + 
nickname + " " +
"esta com  " + i +
" Valor de XP."
)}
//finalizado com chaves da condicao IF de verificacao de nome repetido, pois mesmo com nome repetido na logica do ranqueamento o nome era apresentado.