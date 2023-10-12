const quote = document.querySelector("#quote");
const btn = document.querySelector("#getQoute");
const writer = document.querySelector("#writer");
const loading = document.querySelector("#loading");

fetch("https://api.themotivate365.com/stoic-quote")
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("quote" + crypto.randomUUID(), JSON.stringify(data));

    writer.textContent = data.author;
    quote.textContent = data.quote;
  });

btn.addEventListener("click", () => {
  loading.classList.remove("hidden");

  fetch("https://api.themotivate365.com/stoic-quote")
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("quote" + crypto.randomUUID(), JSON.stringify(data));

      writer.textContent = data.author;
      quote.textContent = data.quote;
    })
    .finally(() => {
      loading.classList.add("hidden");
    });
});
