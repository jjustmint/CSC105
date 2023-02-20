
function myfunction() {
    var cap = /^[A-Z]/
    var name = document.getElementById("fname").value
    if (cap.test(name)) {
        console.log("String's first character is uppercase.")
    } else {
        console.log("String's first character is not uppercase.")
    }
}