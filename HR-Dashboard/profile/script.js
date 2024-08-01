console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger_logo').addEventListener ("click", ()=>{
    document.querySelector('.nav_header_sidebar').classList.toggle('sidebarGo'); 
    if(document.querySelector('.nav_header_sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        }
        else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'}, 300);
        }
} )
document.addEventListener("DOMContentLoaded", function() {
  const editButton = document.getElementById("editButton");
  const saveButton = document.createElement("button");
  saveButton.classList.add("bg-primary", "text-primary-foreground", "px-4", "py-2", "rounded-md");
  saveButton.textContent = "Save";

 