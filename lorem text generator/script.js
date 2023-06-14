let copyBtn=document.querySelector("#copy-btn");
let paraDisplay =document.querySelector("#para");
let generateBtn=document.querySelector("#generate-btn")
let options={
    method:"GET",
    headers: {"X-Api-Key" :apiKey},
};
let url ="https://api.api-ninjas.com/v1/loremipsum?paragraphs= ";
let generateParas = () =>{
    let noOfPara =document.querySelector("#no-of-para").Value;
    let finalURL = url +noOfPara;
    fetch(finalURL,options).then((res) => res.json()).then((data) => {
        console.log(data);
        paraDisplay.innerText = data.text;
    });
}
//implement function to copy
copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(paraDisplay.innerHTML);
    alert("text copied to clipboard");
})

generateBtn.addEventListener("click",generateParas);
window.addEventListener("load",generateParas);