
var txtnum = document.querySelector('#txtnum')
var sel = document.querySelector('#sel')
var saida = document.querySelector('#saida02')
var tab = []

function adicionar(){
    if (txtnum.value.length == 0 || txtnum.value < 1 || txtnum.value > 100 || tab.indexOf(Number(txtnum.value)) != -1){
        alert('[ERRO] Valor invalido ou ja adicionado.')
    } else{
        saida.innerText = ""
        let num = Number(txtnum.value)        
        let new_opt = document.createElement("option")
        new_opt.text = `Valor ${num} adicionado`
        sel.appendChild(new_opt)
        tab.push(num)
        tab.sort()
    }
    txtnum.value = ""
    txtnum.focus()
}

function analisar(){
    if (tab.length == 0){
        alert('Adicione valores antes de analisar.')
    } else{
        saida.innerText = ""
        var paragrafo = []
        
        for (let c = 1; c <= 5; c++){
            let new_p = document.createElement('p')
            new_p.setAttribute("id", `p${c}`)
            saida.appendChild(new_p)
            paragrafo.push(document.getElementById(`p${c}`))
        }
    
        function somar(){
            let soma = 0
            for (let i in tab){
                soma+=tab[i]
            }
            return soma
        }
    
        paragrafo[0].appendChild(document.createTextNode(`No total tem ${tab.length} números adicioados.`))
        paragrafo[1].appendChild(document.createTextNode(`O maior valor adicionado foi ${tab[tab.length-1]}`))
        paragrafo[2].appendChild(document.createTextNode(`O menor valor adicionado foi ${tab[0]}`))
        paragrafo[3].appendChild(document.createTextNode(`Somando todos os valores tem ${somar()}`))
        paragrafo[4].appendChild(document.createTextNode(`A media desses valores é ${somar() / (tab.length)}`))
    }
}

function limpar(){
    sel.innerText = ""
    saida.innerText = ""
    tab = []
}
