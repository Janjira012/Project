function searchB() {
    
    var x, text, y;
    x = document.getElementById("searchAuthorsName").value;
    y = document.getElementById("searchAuthorLastsname").value;
    z = document.getElementById("affiliation").value;

    var url = 'https://api.elsevier.com/content/search/author?query=authlast('+y+')%20and%20authfirst('+x+')%20and%20affil('+z+')&apiKey=7f59af901d2d86f78a1fd60c1bf9426a';
    console.log(url);
   
    

    
}

