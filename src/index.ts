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
const tasks: Task[] = []
form?.addEventListener('submit', e => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  addListItem(newTask);
  input.value = ''
})

function addListItem(task: Task) {
  const item = document.createElement('li')
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.type = "checkbox"
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    console.log(task)
  })
  item.classList.add('list-group-item');
  checkbox.classList.add('p-2', 'm-2');
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}