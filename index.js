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
        const oreRiunione = calculateOreRiunione(
            regolaOreLezione,
            regolaOreRiunione,
            calcoloOreLezione,
        )
        const oreIntegerValue = Math.trunc(oreRiunione)
        const oreDecimalValue = +((oreRiunione - oreIntegerValue) * 60).toFixed(0)

        let result = `${oreIntegerValue} ore`
        if (oreDecimalValue) {
            result += `, ${oreDecimalValue} minuti`
        }

        document.getElementById('result').innerText = result
    } else {
        document.getElementById('result').innerText = '? ore'
    }
}