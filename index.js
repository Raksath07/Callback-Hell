var head=document.querySelector('.con')
var button =document.querySelector('.reload')

function start(callback) {
    // console.log(10);
    head.innerHTML="10"
    setTimeout(function() {
      // console.log(9);
      head.innerHTML="9"
      setTimeout(function() {
        // console.log(8);
        head.innerHTML="8"
        setTimeout(function() {
          // console.log(7);
          head.innerHTML="7"
          setTimeout(function() {
            // console.log(6);
            head.innerHTML="6"
            setTimeout(function() {
              // console.log(5);
              head.innerHTML="5"
              setTimeout(function() {
                // console.log(4);
                head.innerHTML="4"
                setTimeout(function() {
                  // console.log(3);
                  head.innerHTML="3"
                  setTimeout(function() {
                    // console.log(2);
                    head.innerHTML="2"
                    setTimeout(function() {
                      // console.log(1);
                      head.innerHTML="1"
                      callback();
                    },500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }
  
  start(function() {
    // console.log("Happy Independence Day!");
    setTimeout(()=>{
      head.innerHTML="Happy Independence Day!"
    },500)
  });
  
  button.addEventListener('click',()=>{
    location.reload()
  })