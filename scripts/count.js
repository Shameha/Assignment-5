const buttn = document.getElementsByClassName('bttn')
for(const btn of buttn){

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
                available = available-1;
                document.getElementById('count').innerText = count;
                document.getElementById('total-price').innerText = tk;
                document.getElementById('grandTaka').innerText = tk ; 
               document.getElementById('available').innerText = available;
               btn.style.backgroundColor = "green";

               buttonsClicked[btn.innerText] = true;
            }

        });
    }
 
}
 
const buttons = document.querySelectorAll('.bttn');
const seatHistory = document.getElementById('new-p');
let lastClickedButton = null;

buttons.forEach(bttn => {
  bttn.addEventListener('click', () => {
    if (lastClickedButton !== bttn) {
      if (seatHistory.children.length < 4) {
        const paragraph = document.createElement(' ');
        paragraph.textContent = button.textContent.trim() + "_______________Economy" + "_______________500";
        seatHistory.appendChild(paragraph);
      } else {
        alert('You have reached the maximum number of selections.');
      }
    }
    lastClickedButton = button;
  });
});