let artworks = [
                {
    artist: '_BLOODY_GUTZ_ART_',
    attribution: 'https://www.instagram.com/_bloody_gutz_art_/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ktwined-fb270.appspot.com/o/_bloody_gutz_art_%201.jpg?alt=media&token=8d33de91-cbe7-4f17-a936-0753ae9fd50b',
    title: 'STRAY KIDS',
    subtitle: 'LEE KNOW',
  },
              {
    artist: 'ENGLANDTOWNSEND',
    attribution: 'https://www.instagram.com/englandtownsend/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ktwined-fb270.appspot.com/o/englandtownsend.jpeg?alt=media&token=450c8c52-50a8-4728-bc9d-a5c183ccfdfd',
    title: 'AESPA',
    subtitle: 'WINTER',
  },
          {
    artist: 'MIK.KALI',
    attribution: 'https://www.instagram.com/mik.kali/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ktwined-fb270.appspot.com/o/1BC937A8-6AB3-448E-B744-8FBEA8DA8F4C.jpeg?alt=media&token=996cdad5-7da0-460b-bdf5-bf7db65569c1',
    title: 'NMIXX',
    subtitle: 'BAE',
  },
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
      'https://firebasestorage.googleapis.com/v0/b/ktwined-fb270.appspot.com/o/Fallen%20Gods%20RM%201to1%20Half%20(2).png?alt=media&token=e8a25081-c9ca-4397-bab7-dc55b6f6e60a',
    title: 'BTS',
    subtitle: 'RM',
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
