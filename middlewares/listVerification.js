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

    
    const name = dataUser.name;

    
    if (!name || name.length < 3) {
        
        return res.status(400).json({ 
            mensagem: "O nome não pode ser vazio e nem conter menos de 3 caracteres."
        });
    }

    
    next();
}

export function updateName(req, res, next){
    if(!req.params.id){
        return res.status(400).json({erroMensage: "Nenhum parametro para busca"});

    }else{
        next();
    }
}