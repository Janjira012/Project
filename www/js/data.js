function searchB() {
    
    var x, text, y;
    x = document.getElementById("searchAuthorsName").value;
    y = document.getElementById("searchAuthorLastName").value;
    z = document.getElementById("affiliation").value;

    var url = 'https://api.elsevier.com/content/search/author?query=authlast('+y+')%20and%20authfirst('+x+')%20and%20affil('+z+')&apiKey=7f59af901d2d86f78a1fd60c1bf9426a';
    console.log(url);
 
    $.ajax({
        url: url ,
        type: 'GET'
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data.length; j++) {
        var row = data[i][j];
        console.log(row);
            }
        }
      
    });

    
}

