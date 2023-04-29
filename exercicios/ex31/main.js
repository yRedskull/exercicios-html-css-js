// async


function rand(){
    return Math.random() * (5000 - 500) + 500
}

function espera(fase, random) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof fase !== "string") {
                reject("Cai no ERRO")
                return
            }
            resolve(fase.toUpperCase() + " Passei na promise")
            return 
        }, random);
    }
    )
    
}

async function executa() {
    const fase1 = await espera("fase 1", rand())
    console.log(fase1)
    const fase2 = await espera("fase 2", rand())
    console.log(fase2)
    const fase3 = await espera("fase 3", rand())
    console.log(fase3)
    const fase4 = await espera("fase 4", rand())
    console.log(fase4)
}

executa()