window.onload = () => {
  const instractors = [
    {
      name: 'Kerolous Samy',
      title: 'ProCoder Founder + CEO',
      desc: 'kerolous has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12.',
      pic: 'images/kerolousSamy.jpg',
      alt: 'Kerolous Samy',
    },
    {
      name: 'Jordan Armijos',
      title: 'Senior Back End Developer',
      desc: 'Jordan has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12.',
      pic: 'images/jordan.jpg',
      alt: 'Jordan Armijos',
    },
    {
      name: 'Dante Álvarez',
      title: 'Senior Front End Developer',
      desc: 'Dante has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12.',
      pic: 'images/dante.png',
      alt: 'Dante Álvarez',
    },
    {
      name: 'Santiago Velosa',
      title: 'Senior ASP.NET Developer',
      desc: 'Santiago has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12.',
      pic: 'images/santi.jpg',
      alt: 'Santiago Velosa',
    },
    {
      name: 'Lucas Masaba',
      title: 'Senior Java Developer',
      desc: 'Lucas has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12.',
      pic: 'images/lucas.jpg',
      alt: 'Lucas Masaba',
    },
    {
      name: 'Melanie Arellano',
      title: 'Senior Front End Developer',
      desc: 'Melanie has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12.',
      pic: 'images/melanie.jpg',
      alt: 'Melanie Arellano',
    },
  ];

  let cards = '';
  instractors.forEach((e) => {
    cards += `<div class="instractor-card col-md-6 row">
    <div class="instractor-img-container col-4">
      <img class="racing-img" src="images/checkers.jpg" alt="checkers">
      <img class="instractor-img" src="${e.pic}" alt="${e.alt}">
    </div>
    <div class="col-8 pt-2 ps-4">
      <h2">${e.name}</h2>
      <h5 class="instractor-title">${e.title}</h5>
      <p>${e.desc}</p>
    </div>
  </div>`;
  });

  document.querySelector('.instractors').innerHTML = cards;
};