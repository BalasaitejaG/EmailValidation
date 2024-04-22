submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked!");
  resultCont.innerHTML = `<img width="40px" src="/images/loading.svg" alt="">`;
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${config.API_KEY}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (config.API_KEY of Object.keys(result)) {
    if (result[config.API_KEY] !== "" && result[config.API_KEY] !== " ") {
      str = str + `<div>${config.API_KEY}: ${result[config.API_KEY]}</div>`;
    }
  }
  console.log(str);
  resultCont.innerHTML = str;
});
