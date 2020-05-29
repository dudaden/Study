 // Когда пользователь прокручивает вниз 80px от верхней части документа, измените размер отступа навигационной панели и размер шрифта логотипа
 window.onscroll = function() {scrollFunction()};
      
 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar").style.padding = "10px 5px";
     document.getElementById("logo").style.fontSize = "20px";
   } else {
     document.getElementById("navbar").style.padding = "20px 10px";
     document.getElementById("logo").style.fontSize = "30px";
   }
 }
 