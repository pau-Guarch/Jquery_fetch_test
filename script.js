function template(data){

    

    // let date = data.release_date;
    // let year = date.substring(0, 4);
    // let month = date.substring(6, 8);
    // let day = date.substring(9, 11);

    // e.style.example.wrapper

    return `<div id="card" class="example-1 card" >
                <div class="wrapper" style='background:url("https://image.tmdb.org/t/p/w1280/${data.poster_path}") center/cover no-repeat;'>
                  <div class="date">
                    <span class="day">12</span>
                    <span class="month">May</span>
                    <span class="year">2021</span>
                  </div>
                  <div class="data">
                    <div class="content">
                      <span class="language">${data.original_language}</span>
                      <h1 class="title"><a href="#">${data.original_title}</a></h1>
                      <p class="text">${data.overview}</p>
                      <label for="show-menu" class="menu-button"><span></span></label>
                    </div>
                    <input type="checkbox" id="show-menu" />
                    <ul class="menu-content">
                      <li>
                        <a href="#" class="fa fa-bookmark-o"></a>
                      </li>
                      <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
                      <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
                    </ul>
                  </div>
                </div>
            </div>`; 
}


$(document).ready(() => {

    $.getJSON( "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1", function( data ) {
        var items = [];
        let x = 0;
            $.each( data, function( key, val ) {
                
                if(x<5){
                    items.push(template(data.results[x]));
                    $("#mainrow").html(items);
                    x++;
                }
            });
         
         
       
        // $( "<ul/>", {
        //   "class": "my-new-list",
        //   html: items.join( "" )
        // }).appendTo( "body" );

        // $("#mainrow").html(template(JSON.stringify(data)));

      });


    // $("#mainrow").html(template());
});



// $(document).ready(() => {
// }
// let filmCard = document.getElementsByClassName("wrapper");
// filmCard.style.background = "https://image.tmdb.org/t/p/w1280/";