const planner = document.getElementById("planner");
const workHours = [
  "9 AM", "10 AM", "11 AM", "12 PM",
  "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"
];

workHours.forEach((hour, index) => {
  const block = document.createElement("div");
  block.className = "time-block";

  const hourLabel = document.createElement("div");
  hourLabel.className = "hour";
  hourLabel.textContent = hour;

  const textArea = document.createElement("textarea");
  textArea.id = `task-${index}`;
  textArea.rows = 2;

  const savedTask = localStorage.getItem(`task-${index}`);
  if (savedTask) textArea.value = savedTask;

  const saveBtn = document.createElement("button");
  saveBtn.className = "saveBtn";
  saveBtn.textContent = "Save";

  saveBtn.onclick = () => {
    localStorage.setItem(`task-${index}`, textArea.value);
    saveBtn.textContent = "✔ Saved!";
    setTimeout(() => saveBtn.textContent = "Save", 1500);
  };

  block.appendChild(hourLabel);
  block.appendChild(textArea);
  block.appendChild(saveBtn);

  planner.appendChild(block);
});
