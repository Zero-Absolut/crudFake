const listaNomesArray = [
    "Mateus",
    "Felipe",
    "Bruno",
    "Luiz",
    "Fernando"
];

export function arrayFake(nam) {
    for (var i = 0; i < listaNomesArray.length; i++) {
        if (listaNomesArray[i] === nam) {
            return listaNomesArray[i];
        }
    }
    return null;
}

export function inserArrayFake(nam) {
    listaNomesArray.push(nam);
    return true;
}
