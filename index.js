$(document).ready(function() {
    $('select').niceSelect();
});

function getResults() {
  $("#js-section-results").append(
    `<div>
        <h4>Results</h4>
      
        <ul>
          <li>Dummy results</li>
          <li>Dummy results</li>
          <li>Dummy results</li>
          <li>Dummy results</li>
        </ul>
    </div>`
  );
}

function watchFormForSelectLanguage() {

  $("#js-select-language").change(e => {
    e.preventDefault(); 

    $('#js-screen-for-select-language').hide()
    $('#js-screen-for-search-term').show()

    //let selectedLanguage = $("select").val();        
   
    //getResults();
  })
}

function watchFormForSearchInput() {

  $("#btn-go-get-them").submit(e => {
    e.preventDefault();

    getResults()
  })
}


watchFormForSearchInput()
watchFormForSelectLanguage()

// edge cases!!!