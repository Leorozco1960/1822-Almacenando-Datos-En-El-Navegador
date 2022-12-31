import { createTask } from "./addTask.js";

export const readTasks = () => {
  const List = document.querySelector("[data-list]");
  console.log(List);
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

  taskList.forEach((task) => {
    List.appendChild(createTask(task));
  });
};
