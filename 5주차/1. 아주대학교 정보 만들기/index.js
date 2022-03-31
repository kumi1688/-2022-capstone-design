const url =
  "https://raw.githubusercontent.com/kumi1688/cap-data-repo/main/5th/ajou.json";

async function getData() {
  const result = await axios.get(url);
  return result.data;
}

async function makeItem() {
  // 1. 데이터 가져오기
  const data = await getData();

  // 2. 가져온 데이터에서 로고 집어넣기
  const logoElement = document.querySelector("img");
  logoElement.src = data["로고"];

  // 3. 이름 넣기
  const nameElement = document.querySelector(".row .name");

  const name =
    data["이름"]["한글"] +
    "<br>" +
    data["이름"]["영문"] +
    "<br>" +
    data["이름"]["한문"];

  nameElement.innerHTML = name;

  // 4. 교훈 넣기
  const lessonElement = document.querySelector("#lesson");
  const lesson = data["교훈"];
  lessonElement.innerHTML = lesson;

  // 5. 상징 넣기
  const symbolElement = document.querySelector("#symbol");
  const symbol = data["상징"];
  symbolElement.innerHTML = symbol;

  // 6. 슬로건 넣기
  const sloganElement = document.querySelector("#slogan");
  const slogan = data["슬로건"];
  sloganElement.innerHTML = slogan;

  // 7. 국가
  const nationElement = document.querySelector("#nation");
  const nation =
    "<img src='https://w.namu.la/s/43a07e65f573eb41fffe67ac0d1008fa73b5c7a04a004ff9004ddf0680524c5c5bd8a30c724fd7966bd7d3a2f60d0bd17c3cc159dd41f704f9b6dc188a21346ddd85bcfd45d956393278a191441f3d484ad0c9af411820498c30fd9dd45aa457' ></img>" +
    data["국가"];
  nationElement.innerHTML = nation;

  // 8. 분류
  const typeElement = document.querySelector("#type");
  const type =
    '<img src="https://w.namu.la/s/4d691bc7805d409beb3223c96233b387d31aff8234eae323c5b3eea423b2614d387f0fe529fbf2c94b588ea2a1c961a63f562d19bc5f55193e859f771816f392947b8263a7a8b23223079de613d0335b1ee522169c3249bff2a453b8ce419651"></img>' +
    data["분류"];

  typeElement.innerHTML = type;

  // 9. 개교
  const openElement = document.querySelector("#open");
  const open = data["개교"];
  openElement.innerHTML = open;

  // 10. 설립주체
  const founderElement = document.querySelector("#founder");
  const korea =
    "<img src='https://w.namu.la/s/66ddcaa4fd4bd8f08c4c6cdbaeb623369a65e4280ba3aac5395cbf8507d5fc64892f63b6426348a375123d8a74912b57a27e9e62bf05b7e00e3d6173dbe08ac497be3da6b0eab84db72edd685b25483101f96c7facc2bd203b44203f20d37c5a'></img>" +
    data["설립주체"][0];
  const france =
    "<img src='https://w.namu.la/s/72b199b7a46164a8212cca27275b74666c1512f572192f752309984a1790b9fe1cc0ac20691105663f9839720a10a21b40ecd65d10f710371c4c18d518a6db58de7eeb0c03bed198f0661374d06bd56d46b5c389fa57db9f97abbc48008b79f2'></img>" +
    data["설립주체"][1];
  const founder = korea + france;
  founderElement.innerHTML = founder;

  // 11.주소
  const addressElement = document.querySelector("#address");
  const address = data["주소"];
  addressElement.innerHTML = address;

  // 12. 대학생
  const studentsElement = document.querySelector("#students");
  const students = data["재학생"]["학부"] + "명";
  studentsElement.innerHTML = students;

  // 13. 대학원생
  const gradStudentsElement = document.querySelector("#grad-students");
  const gradStudents = data["재학생"]["대학원"] + "명";
  gradStudentsElement.innerHTML = gradStudents;

  // 14. 교직원
  const staffElement = document.querySelector("#staff");
  const staff = data["교직원"] + "명";
  staffElement.innerHTML = staff;

  // 15. 면적
  const areaElement = document.querySelector("#area");
  const area = data["면적"]["값"] + "&#13217";
  areaElement.innerHTML = area;
}

makeItem();
