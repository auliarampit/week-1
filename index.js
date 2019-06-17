let data = [
    {
        name: 'Aulia Rahmat',
        phone: 082277289593,
        
    },
    {
        name: 'Zidni',
        phone: 0828800000,
        
    },
    {
        name: 'Ari',
        phone: 0822000000,
        
    }
]
console.log(data)
console.log("\n")

let newData = {
    name: 'avam',
    phone: 082299887799
}
data.push(newData)
console.log(data)
console.log("\n")

data.splice(1,1,)
console.log(data)
console.log("\n")

data[0].name = "Rahmat"
console.log(data)
console.log("\n")