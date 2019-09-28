$(document).ready(function() {
    $('select').niceSelect();
});

function getResults() {
  $("#section-result").append(
    `<div>
        <h4>Results</h4>
      
        <ul>
          <li>Dummy results</li>
        </ul>
    </div>`
  );
}

function watchFormForSelectLanguage() {


  $("#form-select").click(e => {
    e.preventDefault(); 

    $('#screen-for-select-language').hide()
    $('#screen-for-search-term').show()

    let selectedLanguage = $("select").val();        
   
    //getResults();
  })

}

// edge cases!!!