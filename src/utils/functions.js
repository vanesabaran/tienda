export const reducirStringPopUp = (string) => {
    return string.slice(0, string.length - 2)
}

export const guardarSiglaPopUp = (string) => {
    return string.slice(string.length - 2)
}

export const reducirYConcatenar = (string, corte) => {
    return string.slice(0, corte).concat("...")
}

export const convertirPrimerLetraMayuscula = (string) => {
    const primerLetramayuscula = string[0].toUpperCase() + string.slice(1)
    return primerLetramayuscula
}


