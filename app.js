var copyItm = document.getElementById("copyItm")
var passMethod = "abcdefghijklmnopqrstuvwxyzHIJKLMNOPQRST";
var specialChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+";
var printPass = document.getElementById("pass-h");
var randomPass = "";
function genPass() {
    copyItm.disabled = false
  for (var i = 0; i < 3; i++) {
    var randNum = Math.floor(Math.random() * passMethod.length);
    var specialNum = Math.floor(Math.random() * specialChar.length);
    // console.log(randNum);
    randomPass +=
      passMethod[randNum] +
      specialChar[specialNum] +
      Math.floor(Math.random() * 9);
    printPass.value = randomPass;
  }

  console.log(randomPass);
  randomPass = "";
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
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1300,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Copied !'
      })
}
