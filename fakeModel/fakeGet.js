export function arrayFake(req, res ){

        const listaNomesArray = [
        "Mateus",
        "Felipe",
        "Bruno",
        "Luiz",
        "Fernando"
    ];

    const paramSerach = req.parametro.nome;
    const encounter = false;

    

    for(var i = 0; i < listaNomesArray.length; i++){
        if(listaNomesArray[i] === paramSerach){
            encounter = true;
            res.end(`O nome encontrado é: ${listaNomesArray[i]}`);
            break;
        }

       
    }
     if(!encounter){
            res.end("Nenhum nome encontrado");
        }
}