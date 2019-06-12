function playLocation(storage, slot){

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = '';

  var sourceUrl = 'http://10.10.25.178/RemoteCommands/SetStorageDeck';
  if (storage == 2) {
    sourceUrl += 'B='
  }
  else {
    sourceUrl += 'A='
  }

  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("result").innerHTML = slot + " is playing successfully.";
    }
    else {
      document.getElementById("result").innerHTML = xmlHttp.status + ' ' + xmlHttp.statusText;
    }
  };

  xmlHttp.open( "GET", sourceUrl + slot, true );
  xmlHttp.send( null );
  console.log(sourceUrl);
  console.log(xmlHttp.responseText);
}
