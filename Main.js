 document.addEventListener('DOMContentLoaded', function () {
  

  const menubtn = document.getElementById("menu");
  const closebtn = document.getElementById("close");
  const category = document.getElementById("categorycontainer");
  const viewmorecollection = document.getElementById("viewmorecollection");
  const newcollectionimghide = document.getElementById("newcollectionimghide");


  menubtn.addEventListener("click",function(event){
    event.preventDefault();
    category.style.display="block";
    menubtn.style.display = 'none';
    closebtn.style.display="inline";
  });

  closebtn.addEventListener('click', function (event) {
    event.preventDefault();
    category.style.display = 'none';
    closebtn.style.display = 'none';
    menubtn.style.display = 'inline';
  });


  viewmorecollection.addEventListener("click",function(event){
    event.preventDefault();
   
    if (getComputedStyle(newcollectionimghide).display === "none") {
      newcollectionimghide.style.display = "grid"; // or "block", depending on your layout
      viewmorecollection.textContent="View Less"
    }
   else {
      newcollectionimghide.style.display = "none";
      viewmorecollection.textContent="View More Collection"
    }
  });

});
