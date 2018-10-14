   alert("js loaded");
 var Foodbtns = document.querySelectorAll(".Food-btn .Food-tab");
 var Subtabs = document.querySelectorAll(".sub-tab");

  Subtabs.forEach( function(element, index) {   
  	   element.addEventListener("click",function(event){
                let subtabs = document.querySelectorAll(".sub-tab");
                
                for(ele of subtabs){
                   ele.classList.remove("active");
                }
               event.currentTarget.classList.toggle("active");    
            let menus=document.querySelectorAll(".menu > *");
           
            Idofsubmenu=event.currentTarget.id.toLowerCase()
            for(menuele of menus){
            	
               if(menuele.id!=Idofsubmenu){
            	menuele.classList.add('hidden');
            }
            else{
            	menuele.classList.remove('hidden')
            }
                
            } 
              
              
                

  	   });
       
 })

  Foodbtns.forEach( function(element, index) {   
  	   element.addEventListener("click",function(event){
                let Foodbtns = document.querySelectorAll(".Food-btn .Food-tab");
                for(ele of Foodbtns){
                   ele.classList.remove("active");
                }
               event.currentTarget.classList.toggle("active");    

  	   });
       
 })

function openclosemenu(){
  let subbuttons = document.querySelector(".subbuttons");
  subbuttons.classList.toggle("hidden");
  let menu = document.querySelector(".menu");
  menu.classList.toggle("hidden");
}

 