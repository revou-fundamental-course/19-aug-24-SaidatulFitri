// javascript slider

document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.imgslide');
  const dots = document.querySelectorAll('.dot');

  function showSlides(n) {
    
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });

    
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
  }

  function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
  }

  function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
  }

  
  setInterval(() => {
    nextSlide();
  }, 5000);

  
  showSlides(slideIndex);

  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide(index);
    });
  });
});


// javascript validasi form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const dateInput = document.getElementById('date');
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const messageInput = document.getElementById('message');


  const nameOutput = document.getElementById('output-name');
  const dateOutput = document.getElementById('output-date');
  const genderOutput = document.getElementById('output-gender');
  const messageOutput = document.getElementById('output-message');

  function displayFormData(event) {
    event.preventDefault(); 


    let name = nameInput.value.trim();
    let date = dateInput.value;
    let gender = '';
    genderInputs.forEach(input => {
      if (input.checked) {
        gender = input.nextElementSibling.textContent; 
      }
    });
    let message = messageInput.value.trim();


    if (!name || !date || !gender || !message) {
      alert('Semua field harus diisi!');
      return;
    }


    if (nameOutput && dateOutput && genderOutput && messageOutput) {
      nameOutput.textContent = 'Nama: ' + name;
      dateOutput.textContent = 'Tanggal Lahir: ' + date;
      genderOutput.textContent = 'Jenis Kelamin: ' + gender;
      messageOutput.textContent = 'Pesan: ' + message;
    } else {
      console.error('One or more output elements are not found in the DOM.');
    }


    form.reset();
  }


  form.addEventListener('submit', displayFormData);
});
