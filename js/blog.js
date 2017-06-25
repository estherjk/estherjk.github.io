if(window.location.hash) {
  var tag = window.location.hash.split('#')[1];
  filter(tag);
}

function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('list-group-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'list-group-item');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'list-group-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('table-blog');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'table-blog hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'table-blog');
  }
}
