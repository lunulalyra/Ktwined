let artworks = [
          {
    artist: 'HWANGBYEOKK',
    attribution: 'https://www.instagram.com/hwangbyeokk/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ktwined-fb270.appspot.com/o/pink%20jeongin.jpg?alt=media&token=2232f63d-c859-433d-b8f5-ba150d6e39b3',
    title: 'STRAY KIDS',
    subtitle: 'I.N',
  },
        {
    artist: 'KTYYART',
    attribution: 'https://www.instagram.com/ktyyart/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ktwined-fb270.appspot.com/o/Ktyyart.jpeg?alt=media&token=3d8d7b49-f551-4dbc-aeb0-c815ab47565d',
    title: 'ITZY',
    subtitle: 'RYUJIN',
  },
    {
    artist: 'SHRIMPKIN.SHOP',
    attribution: 'https://www.instagram.com/shrimpkin.shop/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ktwined-fb270.appspot.com/o/Shrimpkin.Shop%20Art.jpg?alt=media&token=cbaffd11-d98a-4cc1-9c30-2dc013e9d0f2',
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
