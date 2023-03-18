function validateForm() {
    var a = document.getElementById("name");
    var b = document.getElementById("email");
    var c = document.getElementById("mobile");
    var d = document.getElementsByName("gender");
    var e = document.getElementById("skills");

    if (a.value == "" || b.value == "" || c.value == "") {
        alert("Please fill out all the fields");
        return false;
    }
    if (c.value.length != 10) {
        alert("Please enter a valid Phone No");
        c.focus();
        return false;
    }
    if (!(d[0].checked || d[1].checked)){
        alert("Please select your Gender");
        return false;
    }
    if (!(e.checked)){
        alert("Please select your Domain");
        return false;
    }

    return true;
}
