function backToMain(){
    location.href="../templates/main.html";
}

function LoadNAVBAR(){
    const allElements = document.getElementsByTagName('*');
    for(var i=0; i<allElements.length; i++){
        var el=allElements[i];
        var navpath = el.getAttribute("nav-include-path");
        if(navpath){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState==4 && this.status==200){
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadNAVBAR();
                }
            }
            xhttp.open("GET",navpath,true);
            xhttp.send();
            return;
        }
    }
}

function LoadFOOTER(){
    const allElements = document.getElementsByTagName('*');
    for(var i=0; i<allElements.length; i++){
        var el=allElements[i];
        var footerpath = el.getAttribute("footer-include-path");
        if(footerpath){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState==4 && this.status==200){
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadFOOTER();
                }
            }
            xhttp.open("GET",footerpath,true);
            xhttp.send();
            return;
        }
    }
}
