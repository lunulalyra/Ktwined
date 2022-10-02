let artworks = [
  {
    artist: 'ghdjdk',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'data:image/jpeg;base64,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',
    title: 'BTS',
    subtitle: 'Jhope',
  },
  {
    artist: 'LUNULALYRA',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/freelancektwine.appspot.com/o/BTS%20JUNGkooK%20Lunulalyra.png?alt=media&token=eae3e45a-bd19-4b99-aad1-7ad9309844d7',
    title: 'BTS',
    subtitle: 'JUNGKOOK',
  },
  {
    artist: 'LUNULALYRA',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/freelancektwine.appspot.com/o/SKZ%20FELIX%20LUNULALYRA.png?alt=media&token=ae2ffcb0-a8a9-4310-9f36-edeb411bfc8a',
    title: 'STRAY KIDS',
    subtitle: 'FELIX',
  },
  {
    artist: 'LUNULALYRA',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/freelancektwine.appspot.com/o/AESPA%20WINTER%20Lunulalyra.png?alt=media&token=66363cba-94c8-4904-972c-a8f820f5ed4d',
    title: 'AESPA',
    subtitle: 'WINTER',
  },
  {
    artist: 'LUNULALYRA',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/freelancektwine.appspot.com/o/BLACKPINK%20JENNIE%20Lunulalyra.png?alt=media&token=65a60b23-7a44-4868-a409-4d07851556a2',
    title: 'BLACKPINK',
    subtitle: 'JENNIE',
  },
  {
    artist: 'LUNULALYRA',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/freelancektwine.appspot.com/o/AESPA%20KARINA%20Lunulalyra.png?alt=media&token=28aebd01-6f74-4416-933d-1cbb655a4cd2',
    title: 'AESPA',
    subtitle: 'KARINA',
  },
  {
    artist: 'LUNULALYRA',
    attribution: 'https://www.instagram.com/lunulalyra/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/freelancektwine.appspot.com/o/SKZ%20IN%20LUNULALYRA.png?alt=media&token=761bf173-09f0-4670-b38c-b393c170f71a',
    title: 'STRAY KIDS',
    subtitle: 'I.N',
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
