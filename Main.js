 document.addEventListener('DOMContentLoaded', function () {
  

  const menubtn = document.getElementById("menu");
  const closebtn = document.getElementById("close");
  const category = document.getElementById("categorycontainer");


  menubtn.addEventListener("click",function(event){
    event.preventDefault();
    category.style.display="block";
    menubtn.style.display = 'none';
    closebtn.style.display="inline";
    
  });

  closeIcon.addEventListener('click', function (event) {
    event.preventDefault();
    category.style.display = 'none';
    closebtn.style.display = 'none';
    menubtn.style.display = 'inline';

  });


});