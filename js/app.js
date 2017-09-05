  var list = document.querySelectorAll('li img');
  var body = document.querySelector('body');

  for (var i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
      var imgSource = this.getAttribute('src');
      var newDiv = document.createElement('div');
      newDiv.classList.add("fullScreen");
      var newImg = document.createElement('img');
      newImg.setAttribute('src', this.getAttribute('src'));
      newDiv.appendChild(newImg);
      var newButton = document.createElement('button');
      newButton.classList.add("close");
      newButton.innerText = "Close";
      newDiv.appendChild(newButton);
      body.appendChild(newDiv);

    newButton.addEventListener('click', function(){
      body.removeChild(newDiv);
      });
    });
  }



// });
