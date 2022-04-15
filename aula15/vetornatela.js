let valores = [5,3,4,8,7,0]
valores.sort()

console.log(valores)
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} contem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} contem o valor ${valores[pos]}`)
}

