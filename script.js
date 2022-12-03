const humburger = document.querySelector('.humburger');
const x = document.querySelector('#exit');
const popupList = document.querySelector('.nav ul');
const secHeader = document.querySelector('.sec-header');
const lis = document.querySelectorAll('.nav ul li');

secHeader.classList.add('a-class');

function close() {
  x.classList.add('nullifier');
  humburger.classList.remove('nullifier');
  secHeader.classList.replace('popup', 'a-class');
  popupList.classList.replace('popup', 'toggle');
}

function popUp() {
  secHeader.classList.replace('a-class', 'popup');
  humburger.classList.add('nullifier');
  x.classList.remove('nullifier');
  popupList.classList.add('popup');
  popupList.classList.remove('toggle');

  x.addEventListener('click', close);

  lis.forEach((li) => li.addEventListener('click', close));
}

humburger.addEventListener('click', popUp);

const features = document.querySelector('#introduction');
const activitiesArray = [
  {
    id: '1',
    image: 'images/speaker_01.png',
    name: 'Begginer and advanced front end courses',
    title: 'New Iceland Heritage Museum & Independent',
    detail: 'We have been teaching open-source projects at the Mozilla Foundation such as the open source movement.',
  },

  {
    id: '2',
    image: 'images/speaker_02.png',
    name: 'Nuit Blanche Kids Zone at ',
    title: 'Manitoba Childrens Museum',
    detail: 'He had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },

  {
    id: '3',
    image: 'images/speaker_03.png',
    name: 'WSO Community Celebration ',
    title: 'Executive Centennial Concert Hall',
    detail: 'WSO comminity had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },

  {
    id: '4',
    image: 'images/speaker_04.png',
    name: 'Nuit Blanche @ WAG',
    title: 'Director of the nuit blanch QAG Foundation',
    detail: 'Nuit had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },

  {
    id: '5',
    image: 'images/speaker_05.png',
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    detail: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month',
  },

  {
    id: '6',
    image: 'images/speaker_06.png',
    name: 'Ryan Merkled',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    detail: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

const createActivities = () => {
  const featuredTittle = document.createElement('h2');
  featuredTittle.classList.add('title');
  featuredTittle.innerText = 'Featured Teachers';
  features.appendChild(featuredTittle);

  const barIcon = document.createElement('div');
  barIcon.classList.add('bar-icon');
  features.appendChild(barIcon);

  const activityContainer = document.createElement('div');
  activityContainer.classList.add('a-wrap');
  features.appendChild(activityContainer);

  activitiesArray.forEach((item, index) => {
    const event = document.createElement('div');
    event.classList.add('event');
    activityContainer.appendChild(event);

    if (index >= 2) {
      event.classList.add('nullifier');
    }

    const img = document.createElement('img');
    img.classList.add('e-img');
    img.setAttribute('src', item.image);
    img.setAttribute('alt', `Image illustrating speaker # ${index}`);
    event.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('info');
    event.appendChild(info);

    const name = document.createElement('h2');
    name.innerText = item.name;
    info.appendChild(name);

    const title = document.createElement('h3');
    title.classList.add('e-h3');
    title.innerText = item.title;
    info.appendChild(title);

    const greyBar = document.createElement('div');
    greyBar.classList.add('bar-icon', 'bi-grey');
    info.appendChild(greyBar);

    const detail = document.createElement('p');
    detail.innerText = item.detail;
    info.appendChild(detail);

    const toClick = document.getElementById('to-click');
    toClick.addEventListener('click', () => {
      event.classList.remove('nullifier');
      toClick.classList.replace('show', 'nullifier');
    });
  });

  lis.forEach((list) => {
    list.addEventListener('mouseenter', () => {
      list.style.outline('2px solid indigo');
    });
  });
};

createActivities();
