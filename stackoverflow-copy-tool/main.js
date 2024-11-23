var arr =document.getElementsByClassName("s-code-block")

for(let i = 0 ; i < arr.length ; i++){
 var btn = document.createElement("button")
 btn.classList.add("copy_code_button")
 btn.appendChild(document.createTextNode("Copy"))
 arr[i].appendChild(btn)
 //styling the button
 btn.style.position = "relative"

 if(arr[i].scrollWidth === arr[i].offsetWidth && arr[i].scrollHeight === arr[i].offsetHeight)
  btn.style.left = `${arr[i].offsetWidth - 70}px`

  else if(arr[i].scrollWidth != arr[i].offsetWidth && arr[i].scrollHeight === arr[i].offsetWidth)
   btn.style.left = `${arr[i].offsetWidth - 200}px`
 else 
   btn.style.left = `${arr[i].offsetWidth - 150}px`

 if(arr[i].scrollHeight === arr[i].offsetHeight)
   btn.style.bottom = `${arr[i].offsetHeight - 50}px`

 else
   btn.style.bottom = `${arr[i].scrollHeight - 50}px`
 //end of styling the button

   console.log("Appended")
}

var button = document.querySelectorAll(".copy_code_button")
 button.forEach((elm)=>{
  elm.addEventListener('click',(e)=>{
    navigator.clipboard.writeText(elm.parentNode.childNodes[0].innerText)
    alert("Copied to Clipboard")
  })
 })