export function listVerify(req, res, next){
    const name = req.query.name;

    if(!name || name.length < 3){
        res.end("O nome não pode ser vazio ou ter menos de 3 caracteres");
    }else{
        req.parametro = {nome: name};

        next();
    }
}

export function insertName(req, res, next) {
    const dataUser = req.body;

    // 1. Acessamos o nome
    const name = dataUser.name;

    // 2. Verificamos a falha (Validação)
    if (!name || name.length < 3) {
        // MUDANÇA CRUCIAL:
        // Usar 400 Bad Request para erro do cliente
        // Chamar .json() para ENVIAR a resposta e encerrar o ciclo
        return res.status(400).json({ // Use 'return' para garantir que não chame 'next()'
            mensagem: "O nome não pode ser vazio e nem conter menos de 3 caracteres."
        });
    }

    // 3. Se a validação for bem-sucedida,
    // apenas chama next() para ir para a próxima função (o controlador ou outro middleware).
    // NÃO definimos o status de sucesso aqui.
    next();
}