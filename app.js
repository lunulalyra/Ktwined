let artworks = [
    {
    artist: 'SHRIMPKIN.SHOP',
    attribution: 'https://www.instagram.com/shrimpkin.shop/',
    image:
      'https://mail.google.com/mail/u/1?ui=2&ik=5673191f4a&attid=0.1&permmsgid=msg-f:1745608807699338171&th=1839a5f643b653bb&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8peBcol-Bk4b0F_Ilb3-72dasxnzt8GTT3sW0WagMiHueqSe2c5-72MiGFdV6fvVyihs11-QDS8ysLK8BO1oVMVVgldcdT6CHWZhCXz4sGbC_V-LDCLyJcKCU&disp=emb&realattid=1839a5e8b0bb65b46191',
    title: 'STRAY KIDS',
    subtitle: 'SEUNGMIN',
  },
  {
    artist: 'LUNULALYRA',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/freelancektwine.appspot.com/o/SKZ%20FELIX%20LUNULALYRA.png?alt=media&token=ae2ffcb0-a8a9-4310-9f36-edeb411bfc8a',
    title: 'STRAY KIDS',
    subtitle: 'FELIX',
  },
];

let oldIndex,
  isRevealed = false;

// flip the card and show artwork
function revealArtwork() {
  if (isRevealed) {
    document.getElementById('reveal').innerHTML = 'REVEAL';
    document.getElementById('target').classList.remove('reveal');
    isRevealed = false;
  } else {
    let index = Math.floor(Math.random() * artworks.length);
    if (index === oldIndex) {
      if (index === artworks.length - 1) {
        index = oldIndex - 1;
      } else {
        index = oldIndex + 1;
      }
    }
    oldIndex = index;
    let artwork = artworks[index];
    document.getElementById('artist').innerHTML = artwork.artist;
    document.getElementById('artwork').style.backgroundImage = `url('${artwork.image}')`;
    document.getElementById('attribution').setAttribute('href', artwork.attribution);
    document.getElementById('title').innerHTML = artwork.title;
    document.getElementById('subtitle').innerHTML = artwork.subtitle;
    document.getElementById('reveal').innerHTML = 'BACK';
    document.getElementById('target').classList.add('reveal');
    isRevealed = true;
  }
}

// Show an element
const show = (elem) => {
  // Get the natural height of the element
  elem.classList.add('is-visible'); // Make the element visible
};

// Hide an element
const hide = (elem) => {
  // When the transition is complete, hide it
  elem.classList.remove('is-visible');
};

// Toggle element visibility
const toggle = (elem, target) => {
  // If the element is visible, hide it
  if (!elem.classList.contains('is-visible')) {
    if (target !== '#cards') {
      hide(document.getElementById('cards'));
    }
    if (target !== '#about') {
      hide(document.getElementById('about'));
    }
    if (target !== '#join') {
      hide(document.getElementById('join'));
    }
    show(elem);
  }
};

// Change active view
function changeView(target) {
  // Get the content
  var content = document.querySelector(target);
  if (!content) return;
  // Toggle the content
  toggle(content, target);
}
