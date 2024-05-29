let imgBox = document.getElementById('imgBox');
let Qrimage = document.getElementById('Qrimage');
let qrText = document.getElementById('qrText');
let qrurl = document.getElementById('qrurl');


function generateQR() {
    if (qrText.value.length > 0) {
        Qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
  else{
    qrText.classList.add('error');
    setTimeout(()=>{
    qrText.classList.remove('error');
    },1000);
  }
};
