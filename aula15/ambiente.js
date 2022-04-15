let num = [5,8,2,9,3]
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/

let pos = num.indexOf(1)
if(pos == -1){
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
