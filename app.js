const fs = require("fs")
const prompt = require("prompt-sync")({sigint:true})
const Table = require("cli-table")
const db = "config.json"

const saveData = (data) => {
  fs.writeFileSync(db, JSON.stringify(data))
}

const getData = () => {
  return JSON.parse(fs.readFileSync(db))
}

let choose = prompt("Todo app CLI 1.Tambah todo ,2.List todo pilih:")
if(choose == 1){
  let todo = prompt("Masukan todo?")
  let data = getData()
  const ids = data.todos?.map(row => {return row.id})
  const max = Math.max(...ids)
  let key = "todos"
  console.log(max)
  const todoItem = {
    "id": max??0,
    "name":todo,
    "status":"todo"
  }
  data[key].push(todoItem)
  saveData(data)
}

if(choose == 2){
  let table = new Table({
    head: ['Todo', 'status']
    , colWidths: [20, 30]});
  let data = getData()
  data.todos.map(todo => {
    table.push(
      [todo.name, todo.status]
    );
  })

  console.log(table.toString());
}
