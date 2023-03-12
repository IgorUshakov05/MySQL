
const abs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function generate() {
    let stroke = ""
    for (let i = 0; i < 5; i++) {
        let x =  Math.floor(Math.random() * (26 - 1) + 1);
        stroke += abs[x]+x;
    }
    return stroke
}
export function condLoSt() {
    if (localStorage.getItem('keyDataBaseName') !== null) {
        console.log("Ключ есть")

    }
    else {
        localStorage.setItem('keyDataBaseName', generate())
        console.log("Ключ сгенерирован")
    }
    return localStorage.getItem('keyDataBaseName')
}
