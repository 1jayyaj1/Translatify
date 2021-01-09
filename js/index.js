function buildTranslationObject(elementText){
     var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
          "method": "POST",
          "headers": {
            "x-rapidapi-host": "google-translate1.p.rapidapi.com",
            "x-rapidapi-key": "06341a0ca9msh786bbf40c61d66cp18aaf8jsn3dbd3eb60ff9",
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
     $.ajax(settings).done(function (response) {
               
          console.log(response);
          var translatedText = response.data.translations[0].translatedText;
          currElement.textContent = translatedText;
               
     });
}

var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     var curr = all[i];
     var ok = [].reduce.call(curr.childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '');
     ok = ok.replace(/^\s+|\s+$/g, '');
     if (ok !== '' && curr.tagName !== 'TITLE') {
          console.log(curr.tagName);
          console.log(curr.getBoundingClientRect().height);
          console.log(curr.getBoundingClientRect().width);
          console.log(ok);
          fetchTranslation(curr, ok);
          console.log(curr.tagName);
          console.log(curr.getBoundingClientRect().height);
          console.log(curr.getBoundingClientRect().width);
          console.log(ok);
          console.log("");
     }
}