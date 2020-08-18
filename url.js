function callUrl (){
    const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
if (xhttp.readyState === 4 && xhttp.status === 200) {
document.getElementById("abc").value = xhttp.responseText;

}
};
xhttp.open('GET', 'http://www.example.com/api/get/1', true);
xhttp.send();
}


