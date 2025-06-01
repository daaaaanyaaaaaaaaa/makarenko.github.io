let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");         
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {

  slides.forEach(slide => slide.classList.remove('active'));

  slides[index].classList.add('active');
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);


const form = document.querySelector('.charity-form');
const donateButton = document.querySelector('.donate-button');

form.addEventListener('input', () => {
  const company = document.getElementById('company').value !== "Оберіть компанію";
  const card = document.getElementById('card').value.trim() !== "";
  const amount = document.getElementById('amount').value.trim() !== "";

  if (company && card && amount) {
    donateButton.disabled = false;
    donateButton.classList.add('enabled');
  } else {
    donateButton.disabled = true;
    donateButton.classList.remove('enabled');
  }
});


function toggleView() {
    const tableView = document.getElementById('tableView');
    const cardView = document.getElementById('cardView');
    if (tableView.style.display === 'none') {
      tableView.style.display = 'table';
      cardView.style.display = 'none';
    } else {
      tableView.style.display = 'none';
      cardView.style.display = 'flex';
    }
  }

  function getRandomRate(base, diff = 0.5) {
  return (base + (Math.random() * diff - diff / 2)).toFixed(4);
}

function updateRates() {
  // USD
  const usdBuy = getRandomRate(41.3);
  const usdSell = (parseFloat(usdBuy) + 0.6).toFixed(4);
  const usdNBU = getRandomRate(41.68, 0.02);

  document.getElementById('usd-buy').textContent = usdBuy;
  document.getElementById('usd-sell').textContent = usdSell;
  document.getElementById('usd-nbu').textContent = usdNBU;

  // EUR
  const eurBuy = getRandomRate(47.1);
  const eurSell = (parseFloat(eurBuy) + 0.8).toFixed(4);
  const eurNBU = getRandomRate(47.41, 0.02);

  document.getElementById('eur-buy').textContent = eurBuy;
  document.getElementById('eur-sell').textContent = eurSell;
  document.getElementById('eur-nbu').textContent = eurNBU;
}

// Оновлення кожні 5 секунд
setInterval(updateRates, 5000);
updateRates(); // початкове оновлення

function copyLink() {
  const input = document.getElementById("referral-link");
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Посилання скопійовано!");
}