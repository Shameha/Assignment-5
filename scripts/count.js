const buttn = document.getElementsByClassName('bttn')


    let count = 0;
    let tk = 0;
    let available = 8;
    let buttonsClicked = {};
    
    const buttons = document.getElementsByClassName('bttn');
    for (const btn of buttons) {
        btn.addEventListener('click', function() {
            // Check if button has already been clicked and count is less than 4
            if (!buttonsClicked[btn.innerText] && count < 4) {
                count = count + 1;
                tk = count * 550;
                const availablee = available - 1;
                document.getElementById('count').innerText = count;
                document.getElementById('total-price').innerText = tk;
                document.getElementById('grandTaka').innerText = tk ; 
                document.getElementById('available').innerText = availablee;
              
                btn.style.backgroundColor = "green";

                buttonsClicked[btn.innerText] = true; // Mark button as clicked
            }
        });
  }
