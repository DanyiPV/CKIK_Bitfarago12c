function SearchBarShow(){
    if(document.getElementsByClassName('SearchShow').length == 0){
        document.getElementById("SearchInput").classList += " SearchShow";
        setTimeout(SearchTime,7000);
    }
}

function SearchTime(){
    if(document.getElementById('SearchInput').value == ""){
        document.getElementById("SearchInput").classList.add("SearchHide");
        setTimeout(SearchClassRemove,500);
    }
}

function SearchClassRemove(){
    document.getElementById("SearchInput").classList = "SearchInput";
}