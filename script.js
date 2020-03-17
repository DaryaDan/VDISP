function func(){ //перемещение картинок
  var arr = document.getElementsByClassName("pictures1");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures2");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures3");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "block";
  }
};
function func1(){ //перемещение картинок
  var arr = document.getElementsByClassName("pictures");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures2");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures3");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures1");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "block";
  }
};
function func2(){ //перемещение картинок
  var arr = document.getElementsByClassName("pictures");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures1");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures3");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures2");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "block";
  }
};
function func3(){ //перемещение картинок
  var arr = document.getElementsByClassName("pictures");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures1");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures2");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "none";
  }
  var arr = document.getElementsByClassName("pictures3");
  for (var i = 0; i < arr.length; i++)
  {
      arr[i].style.display = "block";
  }
};

const TAGS = document.getElementById('tags'); //активные пункты портфолио
TAGS.addEventListener('click', (event) => {
TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tags_active'));
event.target.classList.add('tags_active');
});
