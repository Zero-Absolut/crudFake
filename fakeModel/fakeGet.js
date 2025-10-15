let dadosUsuarios = [
    { id: 1, nome: "Mateus" },
    { id: 2, nome: "Felipe" },
    { id: 3, nome: "Bruno" },
    { id: 4, nome: "Luiz" },
    { id: 5, nome: "Fernando" }
];
let nextId = 5; 

export function arrayFake(nam) {
    
    for (var i = 0; i < dadosUsuarios.length; i++) {
    
        if (dadosUsuarios[i].nome === nam) {
            return dadosUsuarios[i]; 
        }
    }
    return null;
}

export function inserArrayFake(nam) {
    
    const novoUsuario = {
        id: nextId,  
        nome: nam    
    };
    
    
    dadosUsuarios.push(novoUsuario);
    
    
    nextId = nextId + 1; 
    
    return true; 
}

export function updateNewName(idUpdate){

    let found = false;

    dadosUsuarios.forEach(userName => {
        if(userName.id === idUpdate.id){
            userName.nome = idUpdate.nome;
            found = true;
        }
    });
    console.log(dadosUsuarios);

    return found;
}

export function deleteArr(name){
  
    let start = 0;
    let flagController = false;

    for(let i = 0; i < dadosUsuarios.length; i++){
        if(dadosUsuarios[i].nome === name){
            start = i;
            flagController = true;
            break;
        }
    }
   dadosUsuarios.splice(start, 1);

   if(flagController){
        return true;
   }else{
    return false;
   }

    
}