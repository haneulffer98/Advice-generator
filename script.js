let advice = document.getElementById("advice");
let advid = document.getElementById("advid");
let btn = document.getElementById("btn");

async function get_adv() {
  const url = "https://api.adviceslip.com/advice";
  let response = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  });

  return response.json();
}

btn.addEventListener("click", () => {
  get_adv().then((data) => {
    advice.textContent = `"${data["slip"]["advice"]}"`;
    advid.innerHTML = `${data["slip"]["id"]}`;
  });
});
