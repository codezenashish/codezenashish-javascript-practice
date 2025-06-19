const requestUrl = "https://randomuser.me/api";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);
    const userNameData = Object.values(data.results[0].name);
    const userName = document.getElementById("userName");
    userName.innerText = userNameData.join(" ");

    const dataImageUrl = data.results[0].picture.large;

    const imageUrl = document.getElementById("imageUrl");
    imageUrl.src = dataImageUrl;
  }
};

xhr.send();
