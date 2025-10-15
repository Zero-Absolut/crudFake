

import * as listModel from "../fakeModel/fakeGet.js";

export function listSerach(req, res) {
    const paramSerach = req.parametro.nome;

    const resultado = listModel.arrayFake(paramSerach);

    if (resultado !== null) {
        res.status(200).json({ "id": resultado.id,
            "nome": resultado.nome
         });
    } else {
        res.status(404).json({ mensagem: "Nenhum nome encontrado" });
    }
}

export function insertDatabase(req, res) {
    const nameUser = req.body.name;

    const inserido = listModel.inserArrayFake(nameUser);

    if (inserido) {
        
        res.status(200).json({ mensagem: "Nome inserido com sucesso!!!" });
    } else {
        res.status(500).json({ mensagem: "Erro ao inserir nome" });
    }
}

export function validateUpdateName(req, res){


    const idDoUsuario = parseInt(req.params.id); 
    
    
    const novoNome = req.body.nome; 


    const dadosParaUpdate = {
        id: idDoUsuario,
        nome: novoNome 
    };

    const update = listModel.updateNewName(dadosParaUpdate);

    if(update){
        res.status(200).json({mensageSucess: "Usuário alterado com sucesso"});
    }else{
        res.status(500).json({erroMensageUpdate: "Erro ao alterar usuário"});
    }
}

export function deleteName(req, res) {
    const nameAsDelete = req.query.name?.trim(); 

    

    if (!nameAsDelete) {
        return res.status(400).json({ erroMensage: "Nome inválido ou não informado" });
    }

    const statusDelete = listModel.deleteArr(nameAsDelete);

    if (statusDelete) {
        res.status(200).json({
            statusMenssage: "Nome deletado com sucesso",
            nome: nameAsDelete
        });
    } else {
        res.status(404).json({
            menssageError: "Erro ao deletar nome escolhido"
        });
    }
}
