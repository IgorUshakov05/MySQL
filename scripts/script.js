const textArea = document.getElementById('textarea');
const btnCanal = document.getElementById('btn2')
const btnSend = document.getElementById('send')
const title = document.getElementById('titleDataBase')
const password = document.getElementById('passwordDataBase')
const error = document.getElementById('error')
const btnResult = document.getElementById('btnResult')

btnResult.addEventListener('click', () => {
    window.open(`https://www.google.com/search?q=${document.getElementsByClassName('error')[0].textContent}`, '_blank');
})

textArea.oninput = () => {
    if (textArea.value.trim() === '') {
        btnSend.setAttribute("disabled", "");
        btnCanal.setAttribute("disabled", "");
    }
    else {
        btnSend.removeAttribute("disabled");
        btnCanal.removeAttribute("disabled");
    }

}

import {condLoSt} from './conditionalLocalStorage.js'
let dataBaseName = condLoSt();
console.log(dataBaseName)

btnCanal.addEventListener('click', () => {
    textArea.focus();
    for (let i  = textArea.value.length - 1; i >= 0; i--) {
        setTimeout(() => {
        let text = textArea.value.toString().slice(0,-1)
        textArea.value = text
        }, 500)
    }
})




    btnSend.addEventListener('click', () => {
        document.getElementById('butt').style.display = "block";
        btnSend.setAttribute("disabled", "");
        let data = {
            dataBaseName: title.value,
            password: password.value,
            data: textArea.value
        }
        console.log(data)

        function showErr(err) {
            btnResult.style.display = "block"
            if (err == "Данные приняты") {
                error.style.color="#35a43c"
                error.innerHTML = err
            }
            else {
                error.style.color="red"
            error.innerHTML = "ERROR: " + err

            }
            if (document.getElementById('table').childNodes) {
                document.getElementById('table').replaceChildren()
            }

        }


        function showRes(result) {
            console.table(result)
            btnResult.style.display = "none"
            error.innerHTML = ""
            if (document.getElementById('table').childNodes.length) {
                document.getElementById('table').replaceChildren()
            }
            let hera = result[0]
            let thead = document.createElement('thead')
            let head = document.createElement('tr')
            //Создание заголовкач
            for (let value of Object.keys(hera)) {
                let headTitile = document.createElement('th')
                headTitile.innerHTML = value.toUpperCase();
                thead.appendChild(headTitile)
            }

            document.getElementById('table').prepend(thead)

            //Тело таблицы

            for (let i = 0; i < result.length; i++) {
                let zapis = `<tr class="tar">`;
                for (let value of Object.keys(hera)) {
                    zapis += `<td>${result[i][value]}</td>`
                }
                zapis += `</tr>`
                document.getElementById('table').insertAdjacentHTML('beforeend', zapis);
            }
        }

        axios.post("/post", data)
            .then((res) => {
                console.log(res)
                if (typeof res.data !== "object") {
                    showErr(res.data)
                } else {
                    showRes(res.data)
                }

            })
            .catch(err => {
                showErr("Данные приняты")
            })
            .finally((res) => {
                btnSend.removeAttribute("disabled");
            })
    })

