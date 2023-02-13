$(document).ready(function(){
  const timeReleases = {
    // Good Morning
    modal1: { reveal_hour: 0, answer: "true", reward: "address"},
    // coffee
    modal2: { reveal_hour: 9, answer: "true", reward: "address"},
    // dinner
    modal3: { reveal_hour: 16, answer: "true", reward: "address"},
    // dessert
    modal4: { reveal_hour: 18, answer: "true", reward: "address"}
  }

  function setTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!    
    var hr = today.getHours();
    var min = today.getMinutes();
    time = hr+':'+min;
    // !!!!!!!!! Update dd == 14 !!!!!!!!!!!
    if (dd >= 13 && mm == 2) {
      $(".alert").text("It's Valentines Day! The time is " + time + ".")
      unveil(hr)
    }
  }

  function unveil(hr){
    $(".unveil_modal").each(function(){
      selected_modal = this.id
      release_time = timeReleases[selected_modal].reveal_hour
      if (hr >= release_time){
        this.style.display = "block"
      }
    })
  }

  // **** Need to grab id of submitted answer and compare to actual answer ****
  $('.submitted').on('click', () => {
    console.log(this) // 'this' returning entire document, want button id
  })

  setTime()
});