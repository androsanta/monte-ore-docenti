function getRegolaOreLezione() {
    const { value, placeholder } = document.getElementById('regolaOreLezione')
    return +(value || placeholder)
}

function getRegolaOreRiunione() {
    const { value, placeholder } = document.getElementById('regolaOreRiunione')
    return +(value || placeholder)
}

function getCalcoloOreLezione() {
    const { value } = document.getElementById('calcoloOreLezione')
    return value ? +(value) : null
}

function calculateOreRiunione(oreLezione, oreRiunione, oreLezioneToCalculate) {
    return oreLezioneToCalculate * (oreRiunione / oreLezione)
}

function onInputChange() {
    const regolaOreLezione = getRegolaOreLezione()
    const regolaOreRiunione = getRegolaOreRiunione()
    const calcoloOreLezione = getCalcoloOreLezione()
    if (typeof calcoloOreLezione === 'number') {
        let result = calculateOreRiunione(
            regolaOreLezione, regolaOreRiunione, calcoloOreLezione)
        result = result.toFixed(result - Math.floor( result ) === 0 ? 0 : 2)
        document.getElementById( 'result' ).innerText = `${result} ore`
    } else {
        document.getElementById('result').innerText = '? ore'
    }
}