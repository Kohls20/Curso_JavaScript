

let amigo = {
    nome:"José",
    sexo:"m", 
    peso: 76.9,
    engordar(p=0){
        console.log("Engordou")
        this.peso += p
    }
}

amigo.engordar(5.1)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)


