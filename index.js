submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  resultCont.innerHTML = `<img width="40px" src="/images/loading.svg" alt="">`;
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${API_KEY}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (let key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }
  console.log(str);
  resultCont.innerHTML = str;
});
