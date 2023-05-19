const input = document.querySelector('.input-task')
const button = document.querySelector('.button-addtask')
const completeList = document.querySelector('.list-tasks')


let myList = []

function adNewTask() {
    myList.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    showTasks()
}

function showTasks() {
    let newLi = ''

    myList.forEach((item, index)  => {
        newLi = newLi + `
        <li class = "task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="" onclick="taskComplete(${index})" />
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="" onclick="deleteItem(${index})" />
        </li>`
    })

    completeList.innerHTML = newLi

    localStorage.setItem('lista', JSON.stringify(myList))
}

function taskComplete(index) {
    myList[index].concluida = !myList[index].concluida

    showTasks()
}

function deleteItem(index) {
    myList.splice(index, 1)

    showTasks()
}

function reloadScreen(){
    const myListLocalStorage = localStorage.getItem('lista')
    if (myListLocalStorage) {
    myList = JSON.parse(myListLocalStorage)}

    showTasks()
}

reloadScreen()

button.addEventListener('click', adNewTask)