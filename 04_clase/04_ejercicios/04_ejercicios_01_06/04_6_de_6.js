let brujitas = ["doremi", "hazuki", "aiko", "poppu", "onpu", "momoko", "hana"];
let aux;

for (let i = 0; i < brujitas.length; i++) {
    for (let j = 0; j < brujitas.length-1; j++) {
        if(brujitas[j+1] < brujitas[j]){
            aux = brujitas[j+1];
            brujitas[j+1] = brujitas[j];
            brujitas[j] = aux;
        }
    }  
}

console.log(brujitas);