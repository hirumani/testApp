function doClick(e) {  
    alert($.label.text);
}



function showCatagoryMenu(){
    var catagoryWindow = Alloy.createController("catagories").getView();
            catagoryWindow.open();
           
   // $.winCatagories.open();
    
}

function showProfileMenu(){
    var profileWindow = Alloy.createController("profile").getView();
            profileWindow.open();
           
   // $.winCatagories.open();
    
}

$.index.open();