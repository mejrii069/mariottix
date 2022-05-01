function formValidation() {
    var name = document.forms["contactForm"]["fullname"];
    var email = document.forms["contactForm"]["mail"];
    var phone = document.forms["contactForm"]["phone"];
    var object = document.forms["contactForm"]["object"];
    var text = document.forms["contactForm"]["text"];
    var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (name.value == "") {
        alert(" Put your name.");
        name.focus();
        return false;
    }
    if (email.value == "") {
        alert("Put a valid email address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0) {
        alert("Put a valid email address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
        alert("Put a valid email address.");
        email.focus();
        return false;
    }
    if (phone.value == "") {
        alert("Put your phone number.");
        phone.focus();
        return false;
    }
    if (object.value == "") {
        alert("Put a object.");
        object.focus();
        return false;
    }
    if (text.value == "") {
        alert("Put a text.");
        text.focus();
        return false;
    }
    return true;
}