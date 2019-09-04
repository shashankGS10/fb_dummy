
function onloadPosts(id) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(xhttp.responseText));
      let posts = JSON.parse(xhttp.responseText);
      let template = document.getElementsByClassName("posts");
      posts.forEach((element, index) => {

        if (index !== 0) {
          let cloneNode = template[0].cloneNode(true);
          document.getElementsByClassName("column_2")[0].appendChild(cloneNode);
        }

        document.getElementsByClassName("profile_info")[index].innerText = element.title;
        console.log(element.title);
        document.getElementsByClassName("written_content")[index].innerText = element.body;
      });

    }
  };
  if(id){
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+id, true);
  }
  else{
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  }

  
  xhttp.send();

}




function generatePost(e) {
  if (e.keyCode === 13) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && (this.status === 200 || this.status===201)) {
          
          let template = document.getElementsByClassName("posts");
          let cloneNode = template[0].cloneNode(true);
          var insertedNode = cloneNode.insertBefore(template[0], null);
            document.getElementsByClassName("column_2")[0].appendChild(insertedNode);
            document.getElementsByClassName("profile_info")[0].innerText = "USER";
            document.getElementsByClassName("written_content")[0].innerText = e.target.value;
        
        
      }
    }
    xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify({
      title: 'USER',
      body: e.target.value
    }));
  }
}

function userSelector(e){
  console.log(e.target.id);
  let template = document.getElementsByClassName("posts");
  const templateLen = template.length;
  for(let item=1; item<templateLen;item++){
    template[1].remove(); //remove 1st element only 99 times
  }
  console.log(template.length);
  onloadPosts(e.target.id);
}