const output = document.getElementById("output");

document.getElementById("helloBtn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const text = await res.text();
  output.textContent = text;
});

document.getElementById("statusBtn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:3000/api/status");
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});
