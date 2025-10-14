export function listVerify(req, res, next){
    const name = req.query.name;

    if(!name || name.length < 3){
        res.end("O nome não pode ser vazio ou ter menos de 3 caracteres");
    }else{
        req.parametro = {nome: name};

        next();
    }
}