// count length without length 
function recurLenght(string) {
    if (string === "") {
        return 0
    }
    else{
        return 1 + recurLenght(string.substring(1))
    }
}