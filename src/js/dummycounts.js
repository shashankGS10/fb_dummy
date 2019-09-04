function likecount(){
    var button = document.getElementsByClassName("like");
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "like " + count;
};
}