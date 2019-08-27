
function onloadPosts(){
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(JSON.parse(xhttp.responseText));
       let posts=JSON.parse(xhttp.responseText);
       let template = document.getElementsByClassName("posts");
       posts.forEach((element,index) => {
        
         if(index!==0){
          let cloneNode = template[0].cloneNode(true);
          document.getElementsByClassName("column_2")[0].appendChild(cloneNode);
         }

         document.getElementsByClassName("profile_info")[index].innerText = element.title;
         console.log(element.title);
         document.getElementsByClassName("written_content")[index].innerText = element.body;
       });
      
       
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();
/* ------------------------------------------------------------------------------------
      var cloneCntr = 1;
      var clone = $("div.dummy_post_1").clone(false);
    $("*", clone).add(clone).each(function() {
        if (this.className) {
            this.className = this.className + "";
        }
    });
    ++cloneCntr;
    $(document.getElementsByClassName("column_2")).append(clone);   
----------------------------------------------------------------------------------------*/
  }