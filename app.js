$(document).ready(function(){
  const releaseDay = 14
  const timeReleases = {
    // Good Morning
    modal1: { revealHour: 0},
    // coffee
    modal2: { revealHour: 9},
    // dinner
    modal3: { revealHour: 16},
    // dessert
    modal4: { revealHour: 17},
    // homeward
    modal5: { revealHour: 20},
    // next day
    modal6: { revealHour: 24}
  }

  function setTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!    
    var hr = today.getHours();
    var min = today.getMinutes();
    time = hr+':'+min;
    // !!!!!!!!! Update dd == 14 !!!!!!!!!!!
    if (dd >= releaseDay && mm == 2) {
      $(".alert").text("It's Valentines Day! Are you ready for the nerdiest Valentine card ever. I know you have the skillz to hack this, so no cheating!")
      unveil(dd, hr)
    }
  }

  function unveil(dd, hr){
    $(".unveil_modal").each(function(){
      selected_modal = this.id
      release_time = timeReleases[selected_modal].revealHour
      if (dd == releaseDay, hr >= release_time){
        this.style.display = "block"
      } else if (dd > releaseDay) {
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