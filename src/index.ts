import { v4 as uuidV4 } from 'uuid';
type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)
form?.addEventListener('submit', e => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask);
  saveTask()
  addListItem(newTask);
  input.value = ''
})

function addListItem(task: Task) {
  const item = document.createElement('li')
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTask()
  })
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  item.classList.add('list-group-item');
  checkbox.classList.add('p-2', 'm-2');
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}


function saveTask() {
  localStorage.setItem('Tasks', JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const jsonTask = localStorage.getItem('Tasks');
  if (jsonTask === null) return [];
  return JSON.parse(jsonTask)
}