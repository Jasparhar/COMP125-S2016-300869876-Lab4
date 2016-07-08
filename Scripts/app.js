(function () {
    "use strict";


    var form = document.getElementById("form");
    var login = document.getElementById("login");
    form.addEventListener("click", function (e) {
        e.preventDefault();
        var User = {
            user: document.getElementById("Userid").value,
            password: document.getElementById("PasswordID").value
        }
        console.log("Application Started");
        console.log(User.user);
        console.log(User.password);
    });


})();




/*
     var User = function User(userid,password) {
            console.log(user);
            console.log(password);
     }
     User.prototype.textDisplayClicked=function(){console.log(user+","+password);}

*/
//return User;