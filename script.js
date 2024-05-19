onclick="showSidebar()"
function showSidebar(){
    const sidebar = document.querySelector('#sidebar');
    const menuBtn = document.querySelector('#menubtn');
    sidebar.style.display = 'flex';
    menuBtn.style.display = 'none';
  }
  onclick="hideSidebar()"
  function hideSidebar(){
    const sidebar = document.querySelector('#sidebar');
    const menuBtn = document.querySelector('#menubtn');
    sidebar.style.display = 'none';
    menuBtn.style.display = 'flex';
  }
  onclick="showshopnewlist()"
  function showshopnewlist(){
    const shopnew = document.querySelector('#sidelistnew');
    const shopwomen = document.querySelector('#sidelistwomen');
    const shopmen = document.querySelector('#sidelistmen');
    const shopunderwear = document.querySelector('#sidelistunderwear');
    const shopkids = document.querySelector('#sidelistkids');
    const shophome = document.querySelector('#sidelisthome');
    const shopsale = document.querySelector('#sidelistsale');
    shopnew.style.display='flex';
    shopwomen.style.display='none';
    shopmen.style.display='none';
    shopunderwear.style.display='none';
    shopkids.style.display='none';
    shophome.style.display='none';
    shopsale.style.display='none';
}
onclick="showshopwomenlist()"
  function showshopwomenlist(){
    const shopnew = document.querySelector('#sidelistnew');
    const shopwomen = document.querySelector('#sidelistwomen');
    const shopmen = document.querySelector('#sidelistmen');
    const shopunderwear = document.querySelector('#sidelistunderwear');
    const shopkids = document.querySelector('#sidelistkids');
    const shophome = document.querySelector('#sidelisthome');
    const shopsale = document.querySelector('#sidelistsale');
    shopnew.style.display='none';
    shopwomen.style.display='flex';
    shopmen.style.display='none';
    shopunderwear.style.display='none';
    shopkids.style.display='none';
    shophome.style.display='none';
    shopsale.style.display='none';
}
onclick="showshopmenlist()"
  function showshopmenlist(){
    const shopnew = document.querySelector('#sidelistnew');
    const shopwomen = document.querySelector('#sidelistwomen');
    const shopmen = document.querySelector('#sidelistmen');
    const shopunderwear = document.querySelector('#sidelistunderwear');
    const shopkids = document.querySelector('#sidelistkids');
    const shophome = document.querySelector('#sidelisthome');
    const shopsale = document.querySelector('#sidelistsale');
    shopnew.style.display='none';
    shopwomen.style.display='none';
    shopmen.style.display='flex';
    shopunderwear.style.display='none';
    shopkids.style.display='none';
    shophome.style.display='none';
    shopsale.style.display='none';
}
onclick="showshopunderwearlist()"
  function showshopunderwearlist(){
    const shopnew = document.querySelector('#sidelistnew');
    const shopwomen = document.querySelector('#sidelistwomen');
    const shopmen = document.querySelector('#sidelistmen');
    const shopunderwear = document.querySelector('#sidelistunderwear');
    const shopkids = document.querySelector('#sidelistkids');
    const shophome = document.querySelector('#sidelisthome');
    const shopsale = document.querySelector('#sidelistsale');
    shopnew.style.display='none';
    shopwomen.style.display='none';
    shopmen.style.display='none';
    shopunderwear.style.display='flex';
    shopkids.style.display='none';
    shophome.style.display='none';
    shopsale.style.display='none';
}
onclick="showshopkidslist()"
  function showshopkidslist(){
 const shopnew = document.querySelector('#sidelistnew');
    const shopwomen = document.querySelector('#sidelistwomen');
    const shopmen = document.querySelector('#sidelistmen');
    const shopunderwear = document.querySelector('#sidelistunderwear');
    const shopkids = document.querySelector('#sidelistkids');
    const shophome = document.querySelector('#sidelisthome');
    const shopsale = document.querySelector('#sidelistsale');
    shopnew.style.display='none';
    shopwomen.style.display='none';
    shopmen.style.display='none';
    shopunderwear.style.display='none';
    shopkids.style.display='flex';
    shophome.style.display='none';
    shopsale.style.display='none';
}
onclick="showshophomelist()"
  function showshophomelist(){
    const shopnew = document.querySelector('#sidelistnew');
    const shopwomen = document.querySelector('#sidelistwomen');
    const shopmen = document.querySelector('#sidelistmen');
    const shopunderwear = document.querySelector('#sidelistunderwear');
    const shopkids = document.querySelector('#sidelistkids');
    const shophome = document.querySelector('#sidelisthome');
    const shopsale = document.querySelector('#sidelistsale');
    shopnew.style.display='none';
    shopwomen.style.display='none';
    shopmen.style.display='none';
    shopunderwear.style.display='none';
    shopkids.style.display='none';
    shophome.style.display='flex';
    shopsale.style.display='none';
}
onclick="showshopsalelist()"
  function showshopsalelist(){
    const shopnew = document.querySelector('#sidelistnew');
    const shopwomen = document.querySelector('#sidelistwomen');
    const shopmen = document.querySelector('#sidelistmen');
    const shopunderwear = document.querySelector('#sidelistunderwear');
    const shopkids = document.querySelector('#sidelistkids');
    const shophome = document.querySelector('#sidelisthome');
    const shopsale = document.querySelector('#sidelistsale');
    shopnew.style.display='none';
    shopwomen.style.display='none';
    shopmen.style.display='none';
    shopunderwear.style.display='none';
    shopkids.style.display='none';
    shophome.style.display='none';
    shopsale.style.display='flex';
}






onclick="menlist()"
function menlist(){
  const menlist=document.querySelector('#MenSection');
  const Womenlist=document.querySelector('#WomenSection');
  const mentab=document.querySelector('#mentab');
  mentab.style.color='black';
  menlist.style.display='flex';
  Womenlist.style.display='none';
}
onclick="Womenlist()"
function Womenlist(){
  const menlist=document.querySelector('#MenSection');
  const Womenlist=document.querySelector('#WomenSection');
  const womentab=document.querySelector('#womentab');
  menlist.style.display='none';
  Womenlist.style.display='flex';
  womentab.style.color='black';
}








document.addEventListener("DOMContentLoaded", function(){
const nav = document.querySelector("#nav");
let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll",() =>{
    let currentScrollPos = window.pageYOffset;
        
        if (currentScrollPos > prevScrollPos && currentScrollPos> nav.offsetHeight) {
            nav.classList.add('stickynav');
        } else if(currentScrollPos==0){
            nav.classList.remove('stickynav');
        }

        prevScrollPos = currentScrollPos;
});
});
