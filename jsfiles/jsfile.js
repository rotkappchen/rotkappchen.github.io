
var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
    keyAPI = "trnsl.1.1.20190625T215714Z.baac3a1a585138f1.45669c9eabf543085f9fee44f7313389eaae30b4";

function Translate(){
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#lang').value
        data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
	document.getElementById("chatLog").innerHTML +="Me: "+textAPI+"<br>";
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if(json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            }
            else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
		document.getElementById("chatLog").innerHTML += "Bot: "+ json.text[0] +"<br>";  
    }
	document.querySelector('#source').value="";
                }