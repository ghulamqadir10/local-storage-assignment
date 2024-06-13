
console.log("salam");
let form = document.getElementById("myform");
let input = document.getElementById(`myemail`);
let password = document.getElementById("password")
let button = document.getElementById(`submitbutton`);
// let inputvalue, passwordvalue;
// console.log(input.value,password.value)


form.addEventListener("submit", function (e) {
    e.preventDefault();
    // form.submit()

});

button.addEventListener("click", () => {

    let user = input.value;
    let pass = password.value;
    let lowerRegex = /[a-z]/;
    let upperRegex = /[A-Z]/;
    let numRegex = /[0-9]/;
    let specialChar = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
    // consitions samaj kr laga rhi hai9n
    if (user === "" || pass === "") {
        alert("input a value");
    }
    else if (pass.length <= 8 || pass.length >= 20) {
        alert("Passwordd should be at least 8-20 cahracters");
    } else if (pass.charAt(0) >= 0 || pass.charAt(0) <= 9) {
        alert("password should not start with number");
    } else if (!lowerRegex.test(pass)) {
        alert("password must have lowercase alphabet");
    } else if (!upperRegex.test(pass)) {
        alert("password should contain one uppercase alphabet");
    } else if (!numRegex.test(pass)) {//test use for knowing the content exist or not;
        alert("password should contain one number value");
    } else if (!pass.match(specialChar)) { //matches give the value ina array 
        alert("password should contain atleast one special character");
    } else if (pass.indexOf(` `) !== -1 || pass.indexOf(`.`) !== -1) { //samaj nhi aayi ya condition;
        alert("password should not contain spaces and dots");
    } else {
        alert("your details has been saved")
        form.submit();
        // console.log(inputvalue);
        // console.log(passwordvalue);
        localStorage.setItem("email", user)
        localStorage.setItem("password", pass);
        location.assign(
            "https://ghulamqadir10.github.io/car-search-assignment/"
        )   
        user = "";
        pass = "";
    }
});


