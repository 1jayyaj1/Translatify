function buildTranslationObject(elementText){
     var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
          "method": "POST",
          "headers": {
            "x-rapidapi-host": "google-translate1.p.rapidapi.com",
            "x-rapidapi-key": "",
            "content-type": "application/x-www-form-urlencoded"
          },
          "data": {
            "source": "en",
            "q": elementText,
            "target": "fr"
          }
        }
     return settings;
}

function fetchTranslation(currElement, elementText){
     var settings = buildTranslationObject(elementText);
     currElement.textContent = "alloo loll cest drole jecris juste de la marde pour que ca prenne de la place en tabarnak lololol";
     console.log(currElement.textContent);
     //$.ajax(settings).done(function (response) {
               
          //console.log(response);
          //var translatedText = response.data.translations[0].translatedText;
          //currElement.textContent = translatedText;
               
     //});
}

var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     var curr = all[i];
     var ok = [].reduce.call(curr.childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '');
     ok = ok.replace(/^\s+|\s+$/g, '');
     if (ok !== '' && curr.tagName !== 'TITLE') {
          var currTag = curr.tagName;
          var currHeight = curr.getBoundingClientRect().height;
          var currWidth = curr.getBoundingClientRect().width;
          fetchTranslation(curr, ok);
          console.log(curr.textContent);
          var newHeight = curr.getBoundingClientRect().height;
          var newWidth = curr.getBoundingClientRect().width;
          curr.textContent = ok;
          console.log(currTag);
          console.log(ok);
          console.log(currHeight);
          console.log(currWidth);
          console.log(newHeight);
          console.log(newWidth);
          console.log("");
     }
}