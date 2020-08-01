(function(){

  htmlentities = {
		/**
		 * Converts a string to its html characters completely.
		 *
		 * @param {String} str String with unescaped HTML characters
		 **/
		encode : function(str) {
			var buf = [];
			
			for (var i=str.length-1;i>=0;i--) {
				buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
			}
			
			return buf.join('');
		},
		/**
		 * Converts an html characterSet into its original character.
		 *
		 * @param {String} str htmlSet entities
		 **/
		decode : function(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		}
  };
  
  // simple button click event handler
  function btnHandler(selector, callback) {
    var btn = document.querySelector(selector);
    if(!btn) { return; }
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      callback();
    }, false);
  }

  var searchIndex = null;
  var searchUI = document.querySelector('.search-ui');
  var resultsUI = document.querySelector('.search-results');
  var searchInput = document.querySelector('#search-str');

  // clear the current results
  var clearResults = function(){
    while (resultsUI.firstChild) {
      resultsUI.removeChild(resultsUI.firstChild);
    }
  }

  // search and display
  var find = function(str) {

    str = str.toLowerCase();

    // look for matches in the search JSON
    var results = [];
    for(var item in searchIndex ) {
      searchStrings = str.split(" ");
      haystack = searchIndex[item].text;

      let found = true;
      for (i = 0; i < searchStrings.length; i++) {
        if (found) { // don't check anymore if we already got a false
          found = haystack.includes(searchStrings[i]);
        }
      }
      
      if (found) {
        results.push(searchIndex[item]);
      }
    }

    // build and insert the new result entries
    clearResults();
    for(var item in results) {
      var listItem = document.createElement('li');

      var link = document.createElement('a');
      link.textContent = htmlentities.decode(results[item].title);
      link.setAttribute('href', results[item].url);
      listItem.appendChild(link);

      var description = document.createElement('span');
      description.textContent = results[item].date + ": " + htmlentities.decode(results[item].description);
      description.setAttribute('class', 'description');
      listItem.appendChild(description);

      resultsUI.appendChild(listItem);
    }
  }

  // add an event listener for a click on the search link
  btnHandler('#search-link', function(){

    // get the data
    fetch('/search.json').then(function(response) {
      return response.json();
    }).then(function(response) {
      searchIndex = response.search;
    });

    searchUI.classList.toggle('invisible');
    searchInput.focus();

    // listen for input changes
    searchInput.addEventListener('keyup', function(event) {
      var str = searchInput.value
      if(str.length > 2) {
        find(str);
      } else {
        clearResults();
      }
    });

    document.addEventListener('keyup', function(event) {
      // close on escape
      if (event.keyCode == 27) {
        if (!searchUI.classList.contains('invisible')) {
          searchUI.classList.toggle('invisible');
        }
      }
    });

  });

  btnHandler('#search-close', function(){
    searchUI.classList.toggle('invisible');
  });

})();
