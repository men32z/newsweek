(()=>{
  //document ready

  //seting today's date.
  var date = new Date();
  var date_options = {year:'numeric', weekday:'short', month:'short', day: '2-digit'};
  document.getElementById('date-today').innerHTML = date.toLocaleDateString('en-US', date_options);
})();
