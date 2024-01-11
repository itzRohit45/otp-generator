function otpGenerate(){
    let optshow=document.getElementById("otp");
    let digits="0123456789";
    let otp="";
    for(let i=0;i<4;i++)
    {
        otp+=digits[Math.floor(Math.random()*10)];
    }

    optshow.innerHTML="<span></span>";

    setTimeout(()=>{
        optshow.innerHTML=otp;
    },1000);
}