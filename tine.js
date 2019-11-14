
// firebase
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDekv-3iIXOcrgIGYpn3Hi4r-3mPCgG4-U",
    authDomain: "match-dash.firebaseapp.com",
    databaseURL: "https://match-dash.firebaseio.com",
    projectId: "match-dash",
    storageBucket: "match-dash.appspot.com",
    messagingSenderId: "844902338636",
    appId: "1:844902338636:web:b44cf6a685e667abe224e9",
    measurementId: "G-EYSJMNFDN4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();

// show this database


const matchs = document.querySelector('.matchs');


function rendarMatch(doc) {
  let ul = document.createElement('ul');
  let lin = document.createElement('a');
  let ula = document.createElement('ul');
  let ula1 = document.createElement('ul');
  let ulau = document.createElement('ul');
  let dlg1 = document.createElement('div');
  let log1 = document.createElement('img');
  let nams1 = document.createElement('li');
  let ulinmeet = document.createElement('ul');
  let nteja = document.createElement('li');
  let ti = document.createElement('div');
  let liti = document.createElement('li');
  let sty = document.createElement('div');
  let expi = document.createElement('div');
  let timme = document.createElement('div');
  let nteja2 = document.createElement('li');
  let lift = document.createElement('ul');
  let logoLft = document.createElement('div');
  let igLft = document.createElement('img');
  let liLft = document.createElement('li');
  let television = document.createElement('li');
  let trophy = document.createElement('li');

  
// class & advanced 
  ul.setAttribute('class' , 'match');
  lin.setAttribute('href' , doc.data().link);
  ula.setAttribute('class' , 'meeting');
  lift.setAttribute('class' , 'team left');
  ula1.setAttribute('class' , 'info');
  ulau.setAttribute('class' , 'team right');
  dlg1.setAttribute('class' , 'logo');
  log1.setAttribute('alt' , doc.data().n1);
  log1.setAttribute('src' , doc.data().img1);
  ulinmeet.setAttribute('class' , 'case');
  nams1.textContent = doc.data().n1;
  nteja.setAttribute('class' , 'result');
  nteja.textContent = '-';
  ti.setAttribute('class' , 'time1');
  liti.setAttribute('class' , 'time');
  sty.setAttribute('class' , 'stay stsrt');
  expi.setAttribute('class' , 'expired');
  expi.textContent = 'شاهد المباراة';
  timme.setAttribute('class' , 'timme');
  timme.textContent = doc.data().tim;

  nteja2.setAttribute('class' , 'result');
  nteja2.textContent = '-';
  logoLft.setAttribute('class' , 'logo');
  igLft.setAttribute('alt' , doc.data().n2);
  igLft.setAttribute('src' , doc.data().img2);
  liLft.textContent = doc.data().n1;
  television.setAttribute('class' , 'mb television');
  television.textContent = doc.data().chanel;
  trophy.setAttribute('class' , 'mb trophy');
  trophy.textContent = doc.data().botol;
  


  ul.appendChild(lin);
  lin.appendChild(ula);
  lin.appendChild(ula1);
  ula.appendChild(ulau);
  ulau.appendChild(dlg1);
  dlg1.appendChild(log1);
  ulau.appendChild(nams1);
  ula.appendChild(ulinmeet);
  ulinmeet.appendChild(nteja);
  ulinmeet.appendChild(ti);
  ti.appendChild(liti);
  liti.appendChild(sty);
  sty.appendChild(expi);
  liti.appendChild(timme);
  ulinmeet.appendChild(nteja2);
  ula.appendChild(lift);
  lift.appendChild(logoLft);
  logoLft.appendChild(igLft);
  lift.appendChild(liLft);
  ula1.appendChild(television);
  ula1.appendChild(trophy);

  matchs.appendChild(ul);
}

db.collection('mat').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {

    rendarMatch(doc);
  })
 

})

