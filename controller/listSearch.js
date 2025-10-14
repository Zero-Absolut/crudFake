

import * as listModel from "../fakeModel/fakeGet.js";

export function listSerach(req, res) {
    const paramSerach = req.parametro.nome;

    const resultado = listModel.arrayFake(paramSerach);

    if (resultado !== null) {
        res.status(200).json({ mensagem: `O nome encontrado é: ${resultado}` });
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
