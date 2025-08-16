// backlink.js

// Yahan apne target links daalo
const links = [
  "https://example.com/",
  "https://www.wikipedia.org/",
  "https://www.github.com/",
  "https://www.stackoverflow.com/"
];

let completed = 0;

function create_backlink() {
  completed = 0;
  document.getElementById("show_results").innerHTML = "";
  updateProgress(0);

  links.forEach((url, index) => {
    // ek hidden image banate hain ping karne ke liye
    const img = new Image();
    img.onload = img.onerror = function () {
      completed++;
      updateProgress((completed / links.length) * 100);

      // result show karo
      const div = document.createElement("div");
      div.textContent = completed + ". " + url;
      document.getElementById("show_results").appendChild(div);
    };
    img.src = url + "?rand=" + Math.random(); // cache avoid
  });
}

function updateProgress(percent) {
  const bar = document.getElementById("show_progressbar");
  bar.innerHTML = `
    <div style="background:#4caf50;height:25px;width:${percent}%;color:#fff;text-align:center;">
      ${Math.floor(percent)}%
    </div>
  `;
}

function clear_all() {
  completed = 0;
  document.getElementById("show_results").innerHTML = "";
  document.getElementById("show_progressbar").innerHTML = "";
  document.getElementById("MyURL").value = "";
}