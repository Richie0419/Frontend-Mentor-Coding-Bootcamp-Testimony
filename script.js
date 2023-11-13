const profileOne = document.querySelector('.profile-one');
const profileTwo = document.querySelector('.profile-two');
const previousBtn = document.querySelectorAll('.previous-side');
const nextBtn = document.querySelectorAll('.next-side');

const slideImage = () => {
  if (profileOne.classList.contains('hide')) {
    profileOne.classList.remove('hide');
    profileTwo.classList.add('hide');
  } else if (profileTwo.classList.contains('hide')) {
    profileTwo.classList.remove('hide');
    profileOne.classList.add('hide');
  }
};

// Use the click event on previous and next buttons.
previousBtn.forEach(btn => btn.addEventListener('click', slideImage));
nextBtn.forEach(btn => btn.addEventListener('click', slideImage));
