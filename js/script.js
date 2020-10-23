
getData();//fetching products

function getData(){
    fetch("https://creabi.dk/T9/wp-json/wp/v2/bicycle?_embed")
    .then(function(response){
        return response.json();
    })
    .then(showPosts);
}
//showing products
function showPosts(posts){
    //console.log(posts);
    posts.forEach(showBike);
}
function showBike(bike){
    console.log(bike);
    const temp= document.querySelector("template").content;
    //clone  the template
    const myCopy=temp.cloneNode(true);
    //showimgs
    const img =myCopy.querySelector("img");
   const categ =myCopy.querySelector("a"); img.setAttribute("src",bike._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    document.querySelector('main').appendChild(myCopy)
}
function showColor(color){
    const liEl=
          document.createElement(li);
    liEl.textContent=color;
}
