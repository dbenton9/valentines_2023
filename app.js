$(document).ready(function(){
  const timeReleases = {
    // Good Morning
    modal1: { time: 0},
    // coffee
    modal2: { time: 8},
    // dinner
    modal3: { time: 16},
    // dessert
    modal4: { time: 17}
  }

  function setTime() {
    var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1; //January is 0!
    // var yyyy = today.getFullYear();
    var hr = today.getHours();
    var min = today.getMinutes();
    today = hr+':'+min;
    $(".time").text("The time is " + today)
    unveil(hr)
  }

  function unveil(hr){
    console.log(timeReleases)
    console.log(hr)
    $(".unveil_modal").each(function(index){
      selected_modal = this.id
      release_time = timeReleases[selected_modal].time
      if (hr > release_time){
        this.style.display = "list-item"
      }
    })
  }

  setTime()
});