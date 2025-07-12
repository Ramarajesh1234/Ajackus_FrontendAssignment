function deleteEmployee(id) {
  const card = document.querySelector(`.employee-card[data-id='${id}']`);
  if (card) {
    card.remove();
  }
}

function editEmployee(id) {
  alert("Edit feature for employee ID: " + id);
}

document.getElementById("searchInput").addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".employee-card").forEach((card) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});
