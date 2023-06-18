// pirveli logi
function submitbtn() {
    console.log('შენ დააჭირე 2023 Button - ს')
}

// loading scree
function showLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    const bar = document.getElementById('loading-bar');
  
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
  
    let progress = 0;
    const intervalId = setInterval(() => {
      progress++;
      bar.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(intervalId);
        hideLoadingOverlay();
      }
    }, 30);
  }
  
  function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    const bar = document.getElementById('loading-bar');
  
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    bar.style.width = '0%';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
  
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        showLoadingOverlay();
        const targetUrl = link.getAttribute('href');
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 1000);
      });
    });
  });

  let prevClickedItem = null;

  function applyInfiniteLineThrough(element) {
    if (prevClickedItem !== null) {
      prevClickedItem.classList.remove('line-through');
    }

    element.classList.add('line-through');
    prevClickedItem = element;
  }


  // saved logs from registration 
  const registerButton = document.getElementById('register-button');

registerButton.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = {
    name: name,
    email: email,
    password: password,
  };


  let userList = JSON.parse(localStorage.getItem('users')) || [];
  userList.push(user);
  localStorage.setItem('users', JSON.stringify(userList));
  console.log(user);
  updateUserList();
});

function updateUserList() {
  const userList = document.getElementById('user-list');

  userList.innerHTML = '';

  const users = JSON.parse(localStorage.getItem('users'));
  for (const user of users) {
    const userElement = document.createElement('p');
    userElement.textContent = `${user.name} - ${user.email} - ${user.password}`;
    userElement.style.color = 'green';
    userList.appendChild(userElement);
  }
}
updateUserList();
localStorage.clear();


// view all
window.onload = function() {
  const ulList = document.querySelector('.viewall-ul-li ul');
  const listItems = ulList.getElementsByTagName('li');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
      applyInfiniteLineThrough(this);
    });
  }
}
function applyInfiniteLineThrough(element) {
  const selectedText = element.innerText;
  const messageElement = document.getElementById('message');
  
  messageElement.innerText = selectedText + " Collection";
  messageElement.style.color = '#ececec';
}


// add to cart function
function BuyNow() {
  console.log("You bought clothing from our collection")
};

// deposit function
function deposit() {
  var amount = prompt('Enter the deposit amount:');
  if (amount !== null && amount !== '') {
    var liveBalance = document.getElementById('live-balance');
    var myNumbers = document.getElementById('my-numbers');

    liveBalance.textContent = '$' + amount;
    liveBalance.style.color = 'green';

    myNumbers.textContent = '$' + amount;
    myNumbers.style.color = 'green';
  }
}
