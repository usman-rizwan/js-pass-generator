var copyItm = document.getElementById("copyItm")
var passMethod = "abcdefghijklmnopqrstuvwxyz";
var upperPassMethod = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*)(+=._-";
var printPass = document.getElementById("pass-h");
var inputCheck = document.getElementById("check-input");
var randomPass = "";
function genPass() {
  copyItm.disabled = false
  for (var i = 0; i < 3; i++) {
    var randNum = Math.floor(Math.random() * passMethod.length);
    var randNum2 = Math.floor(Math.random() * upperPassMethod.length);
    var specialNum = Math.floor(Math.random() * specialChar.length);
    // console.log(randNum);
    randomPass +=
      passMethod[randNum] +
      upperPassMethod[randNum2] +
      specialChar[specialNum] +
      Math.floor(Math.random() * 9);
    printPass.value = randomPass;
  }

  console.log(randomPass);
  randomPass = "";
}
function funnyPass() {
  copyItm.disabled = false
  var funnyArr = ['admin', 'incorrect', 'Hello World!', 'qwerty', 'password', '12345', 'qwerty123', '1q2w3e', '12345678', '111111', '1234567890', 'Bhupendar Jogi', 'developer456', 'prettier', 'javascript', 'bootsrtrap']
  var randNum = Math.floor(Math.random() * funnyArr.length);
  // console.log(randNum);
  randomPass +=
    funnyArr[randNum];
  printPass.value = randomPass;
  randomPass = ""
}
function checkPass() {
  //  console.log(inputCheck.value);
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g
  var specialCharactres = /[!@#$%^&*+=._-]/g
  if (inputCheck.value.length >= 8) {
    if (!inputCheck.value.match(lowerCaseLetters)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        html: `Password must be contain upper case charachters <i class="fa-solid fa-arrow-down-a-z"></i>`
      });
    }
    else if (!inputCheck.value.match(upperCaseLetters)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        html: `Password must be contain upper case charachters <i class="fa-solid fa-arrow-up-a-z"></i>` 
      });
    }
    else if (!inputCheck.value.match(specialCharactres)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        html: `Password must be contain special charachters <i class="fa-solid fa-file-invoice-dollar"></i>`
      });
    }
    else if (!inputCheck.value.match(numbers)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        html: `Password must be contain numbers <i class="fa-solid fa-arrow-up-9-1"></i>`
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        html: `Your Password Is Strong <i class="fa-regular fa-face-smile"></i>`,
      });
    }
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "center-end",
      showConfirmButton: false,
      timer: 3200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      html: "Password must be greater than or equal to 8 characters"
    });
  }
}

function copyText() {
  console.log("Hello world");
  printPass.select()
  printPass.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(printPass.value);
  copyItm.innerHTML = `Copied <i class="fa-solid fa-check mt-1 ml-2"></i>`
  setTimeout(() => {
    copyItm.innerHTML = `Copy <i class="fa-solid fa-copy mt-1 ml-2"></i>`
  }, 1500);
  
}
