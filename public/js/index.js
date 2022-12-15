const headuserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');
const userUVidElement = document.querySelector('#UVid');
const userEmailElement = document.querySelector('#Email');

const localUserName = localStorage.getItem('userName');
const localUserEmail = localStorage.getItem('userEmail');
const localUserUVid = localStorage.getItem('userUVid');


const setUserNameInnerHtml = (name) => {
  headuserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.textContent = name;
};

const setUserUVidInnerHtml = (UVid) => {
  userUVidElement.textContent = UVid;
};

const setUserEmailInnerHtml = (Email) => {
  userEmailElement.textContent = Email;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

if (localUserEmail) {
  setUserUVidInnerHtml(localUserEmail);
}

if (localUserUVid) {
  setUserEmailInnerHtml(localUserUVid);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};

userUVidElement.onclick = () => {
  const userUVid = prompt('학번을 입력해 주세요.');
  localStorage.setItem('userUVid', userUVid);

  setUserUVidInnerHtml(userUVid);
};

userEmailElement.onclick = () => {
  const userEmail = prompt('이메일을 입력해 주세요.');
  if (checkemail(userEmail)) {
    localStorage.setItem('userEmail', userEmail);
    setUserEmailInnerHtml(userEmail);
  }else {
    setUserEmailInnerHtml('이메일을 등록하세요');
  }

};

function checkemail() {

  var email = localStorage.textContent;

  var emailvaild = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailvaild.test(email)==false) {

  alert("이메일형식이 올바르지 않습니다.");

  return false;
  };

};
