$(document).ready(function() {
    $('select').niceSelect();
});

let searchTerm = ''

function watchForm() {
  $("#js-select-language").change(e => {
    e.preventDefault(); 

    $('#js-screen-for-select-language').hide()
    $('#js-screen-for-search-term').show()

    $("#form-input").submit(e => {
      e.preventDefault(); 
      
    searchTerm = document.querySelector("#search-input").value;
    getResults(searchTerm);
    })    
  });
}

function getResults(searchTerm) {
  
    if(searchTerm == "I want to add two numbers") {
      document.querySelector("#js-section-results").innerHTML = "addNumbers"
    }

    if(searchTerm == "I want to draw a circle") {
      document.querySelector("#js-section-results").innerHTML = "drawCircle"
    }
    
    if(searchTerm == "List all my favourite books") {
      document.querySelector("#js-section-results").innerHTML = "favBookList"
    }

    if(searchTerm == "List all my grades for year 2018-2019") {
      document.querySelector("#js-section-results").innerHTML = "grades2018-2018"
    }
}

watchForm();

