var update = document.getElementById('update');

update.addEventListener('click', function () {

  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(response => {
    if (response.ok) return response.json();
  })
  .then(data => {
    console.log(data);
    window.location.reload();
  });
});

var del = document.getElementById('delete');

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader'
    })
  }).then(function (response) {
    if (response.ok) return response.json();
  })
  .then(data => {
    console.log(data);
    window.location.reload();
  });
});


var wipe = document.getElementById('delete-all');
var dbList = document.getElementsByClassName('quote').length;

if(dbList > 0) { console.log(dbList);
	wipe.disabled = false;
}
else wipe.disabled = true;

wipe.addEventListener('click', function () {
	if(!confirm('This will delete all DB entries. Are you sure?')) return false;
  fetch('allquotes', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'}
  }).then(function (response) {
    if (response.ok) return response;
  })
  .then(data => {
    console.log(data);
    window.location.reload();
  });
});
