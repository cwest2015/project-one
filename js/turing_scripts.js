//code based on W3C tutorial -> (W3Schools, 2016) @ http://www.w3schools.com/howto/howto_js_dropdown.asp

//the code below places certain controls on the visibility of the drop down menu on the nav bar
//it the focus of the cursor is not in the drop down menu, the function below toggles its visibility
//the code ensures that the menu does not sit visibile when it is not in use

function drpDwnMenu() 
{
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event)
{
    if(!event.target.matches(".btn"))
       {
            var drpdwns = document.getElementsByClassName("content");
            for(var j = 0; j < drpdwns.length; ++j)
            {
                var openDropDown = drpdwns[j];
                if(openDropDown.classList.contains("show"))
                   {
                        openDropDown.classList.remove("show");
                   }
            }
       }
}

/*
    References
    
    W3Schools. (2016). How TO - Clickable Dropdown. Retrieved from 
        
        http://www.w3schools.com/howto/howto_js_dropdown.asp
*/
