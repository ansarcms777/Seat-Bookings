const movieEl = document.getElementById('movie');

const seatsEl = document.querySelectorAll('.row .seat:not(occupied)');

const seatsCountEl = document.getElementById('seat-count');

const totalPriceEl = document.getElementById('total-price');

let seatCount = 0;
let moviePrice = movieEl.value;

const init = function () {
  seatsCountEl.innerText = seatCount;
  totalPriceEl.innerText = seatCount * moviePrice;
};

movieEl.addEventListener('change', () => {
  moviePrice = movieEl.value;
  init();
});

for (let i = 0; i < seatsEl.length; i++) {
  seatsEl[i].addEventListener('click', () => {
    if (seatsEl[i].classList.contains('selected')) {
      seatsEl[i].classList.remove('selected');
    } else {
      seatsEl[i].classList.add('selected');
    }
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    seatCount = selectedSeats.length;
    init();
  });
}

init();
