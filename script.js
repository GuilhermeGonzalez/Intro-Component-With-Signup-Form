
function invalidInput(){
        
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(document.querySelector(".firstName").value === "")
    {
        document.getElementById("fn-paragraph").classList.remove("hide");
        document.querySelector(".firstName").classList.add("input-error");
    }
    else
    {
        document.getElementById("fn-paragraph").classList.add("hide");
        document.querySelector(".firstName").classList.remove("input-error");
    }

    

    if(document.querySelector(".lastName").value === "")
    {
        document.querySelector("#ln-paragraph").classList.remove("hide");
        document.querySelector(".lastName").classList.add("input-error");
    }
    else
    {
        document.querySelector("#ln-paragraph").classList.add("hide");
        document.querySelector(".lastName").classList.remove("input-error");
    }   



    if(emailRegex.test(String(document.querySelector(".emailAddress").value).toLowerCase()))
    {
        document.querySelector("#ea-paragraph").classList.add("hide");
        document.querySelector(".emailAddress").classList.remove("input-error");
    }
    else
    {
        document.querySelector("#ea-paragraph").classList.remove("hide");
        document.querySelector(".emailAddress").classList.add("input-error");
    }
    

    
    if(passwordRegex.test(String(document.querySelector(".password").value)))
    {
        document.querySelector("#p-paragraph").classList.add("hide");
        document.querySelector(".password").classList.remove("input-error");
    }
    else
    {
        document.querySelector("#p-paragraph").classList.remove("hide");
        document.querySelector(".password").classList.add("input-error");
    }

}

/*
document.addEventListener("submit", function() {
    var elements = document.getElementsByTagName("INPUT").value;
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        
    }
})
 */
/*
elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("This field cannot be left blank");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };


*/