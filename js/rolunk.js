var Ora;
function TimeLoop(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    document.getElementById('ora').innerHTML = "<p>"+hours+":"+minutes+"</p>";
}

function Main(){
    Ora = setInterval(TimeLoop,1000);
}
Main();