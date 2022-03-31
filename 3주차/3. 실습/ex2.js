// id를 사용할 경우 대문자는 사용하지 말 것
const userId = document.querySelector("#user-id");
const userPassword = document.querySelector("#user-password");

const userData = {
  id: "ajou",
  password: "1234",
};

userId.addEventListener("keypress", (event) => {
  if (event.key === "Enter") login();
});

userPassword.addEventListener("keypress", (event) => {
  if (event.key === "Enter") login();
});

function login() {
  if (userId.value === userData.id && userPassword.value === userData.password)
    alert("로그인 성공");
  else alert("로그인 실패");
}
