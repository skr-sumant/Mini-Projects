const percentageSelect = document.getElementById("percentage");
const presentInput = document.getElementById("present-input");
const totalInput = document.getElementById("total-input");
const btn = document.getElementById("btn");
const outputDiv = document.getElementById("output-div");
const footer = document.getElementById("footer");
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

btn.addEventListener("click", () => {
  let present = parseInt(presentInput.value);
  let total = parseInt(totalInput.value);
  let percentage = parseInt(percentageSelect.value);

  if (present < 0 || total <= 0 || present > total) {
    outputDiv.innerText = "Proper values please ¯\\_(ツ)_/¯";
  } else if (present / total >= percentage / 100) {
    const daysAvailableToBunk = daysToBunkCalc(present, total, percentage);
    outputDiv.innerHTML = daysToBunkText(daysAvailableToBunk, present, total);
  } else {
    const attendanceNeeded = requiredAttendance(present, total, percentage);
    outputDiv.innerHTML = daysToAttendText(attendanceNeeded, present, total, percentage);
  }
});

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

function requiredAttendance(present, total, percentage) {
  return Math.ceil(((percentage * total - 100 * present) / (100 - percentage)) + 1);
}

function daysToBunkCalc(present, total, percentage) {
  return Math.floor((100 * present - percentage * total) / percentage);
}

function daysToBunkText(daysAvailableToBunk, present, total) {
  const currentAttendance = ((present / total) * 100).toFixed(2);
  const futureAttendance = ((present / (daysAvailableToBunk + total)) * 100).toFixed(2);
  return `You can bunk for <strong>${daysAvailableToBunk}</strong> more days.<br>Current Attendance: <strong>${present}/${total}</strong> -> <strong>${currentAttendance}%</strong><br>Attendance Then: <strong>${present}/${daysAvailableToBunk + total}</strong> -> <strong>${futureAttendance}%</strong>`;
}

function daysToAttendText(attendanceNeeded, present, total, percentage) {
  const currentAttendance = ((present / total) * 100).toFixed(2);
  const futureAttendance = (((attendanceNeeded + present) / (attendanceNeeded + total)) * 100).toFixed(2);
  return `You need to attend <strong>${attendanceNeeded}</strong> more classes to attain ${percentage}% attendance<br>Current Attendance: <strong>${present}/${total}</strong> ->  <strong>${currentAttendance}%</strong><br>Attendance Required: <strong>${attendanceNeeded + present}/${attendanceNeeded + total}</strong> -> <strong>${futureAttendance}%</strong>`;
}