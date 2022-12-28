import { uuid } from 'uuidv4';
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("new-task-title")

form?.addEventListener('submit', e => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;

  input.value

})