
let formato = localStorage.getItem('itemList')

formato = formato ? formato.split(',') : []
showItem()


function addItem() {
    let item = document.getElementById('item').value
    item  = item.split(',')
    for (let i = 0; i < item.length; i++) {
        if(item[i]){
            formato.push(item[i])
            showItem()
        }
    }
   
}

function showItem() {
    document.getElementById('item').value = ''
    let html = ''
    for (let i = 0; i < formato.length; i++) {
        html += `<div class="col-10 mb-3"> ${formato[i]} </div>`
        html += `<div class="col"> <a href="#" class="btn btn-danger" onclick="deleteItem(${i})"> X </a> </div>`
    }

    localStorage.setItem('itemList', formato)
    document.getElementById('formato').innerHTML = html
}

function deleteItem(item) {
    formato.splice(item, 1)
    showItem()
}

