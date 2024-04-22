function solve(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "https://us-central1-payday-8ab25.cloudfunctions.net/getMatchesWeb", true);
    xhttp.send();
}
solve()