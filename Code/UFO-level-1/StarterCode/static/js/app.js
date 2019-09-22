// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dataInput = document.querySelector("#date/time");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInputer = document.querySelector("#shape");
var $commentInput = document.querySelector("#comment")
var $searchButton = document.querySelector("#search");
var $resetButton = document.querySelector("#reset");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchButton.addEventListener("click", searchData);
$resetButton.addEventListener("click", resetData);

// Set filteredData to addressData initially
// addressData comes from the addressData.js file
var filteredData = dataSet;
var resetData = dataSet;

//Set starting index and results per page
var startingIndex = 0;
var resultsPerPage = 1000;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current report object and its fields
    var report = filteredData[i];
    var fields = Object.keys(report);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the report object, create a new cell at set its inner text to be the current value at the current report's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = report[field];
    }
  }
}


function searchData(event){
	//to prevent the page from refreshing
	event.preventDefault();

	var filteredDate = $dateInput.value.trim() //trim removes any white spaces in between
	if(filteredDate !=""){
		filteredData = dataSet.filter(function (data){
			var dataDate = data.datetime;
			return dataDate ===filteredDate;
		});
	

	};
	
	var filteredCity = $cityInput.value.trim().toLowerCase();
  	if (filteredCity !="") {
    	filteredData = filteredData.filter(function(data) {
     		var dataCity = data.city.toLowerCase();
      		return dataCity === filteredCity;

		});
	};

	var filteredState = $stateInput.value.trim().toLowerCase();
	if (filteredState !="") {
		filteredData = filteredData.filter(function(data) {
			var dataState = data.set.toLowerCase();
			return dataState === filteredState;
		});
	};


	var filteredCountry = $countryInput.value.trim().toLowerCase();
	if(filteredCountry !="") {
		filteredData = filteredData.filter(function(data) {
			var dataCountry = data.country.toLowerCase();
			return dataCountry === filteredCountry;
		});
	};

		renderTable();

	}

		function resetData() {
  		filteredData = dataSet;
  		$dateInput.value = "";
  		$cityInput.value = "";
  		$stateInput.value = "";
  		$countryInput.value = "";
         $shapeInput.value = "";
         $commentInput.value = "";
         $shapeInputer.value = "";
         renderTable();


	}

	function resetForm() {
		document.getElementById("myForm").reset();
	}