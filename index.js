const akasuki = {
  deidara: {
    name: "Deidara",
    card: {
      rute: "./assets/characters/Deidara/🔥Deidara🔥.webp",
      kanji: "デイダラ",
      quote: "Katsu"
    },
    dates: {
      birthday: "5 de mayo",
      height: "1,66m",
      weight: "50.8kg",
      village: "Iwagakure",
      ability: "Explosión"
    }
  },

  sasori: {
    name: "Sasori",
    card: {
      rute: "./assets/characters/Sasori/🔥Sasori🔥.jpg",
      kanji: "サソリ",
      quote: "belleza eterna"
    },
    dates: {
      birthday: "8 de noviembre",
      height: "1,64m",
      weight: "47.3 kg",
      village: "Sunagakure",
      ability: "Marionetista"
    }
  },

  kisame: {
    name: "Kisame",
    card: {
      rute: "./assets/characters/Kisame/🔥Kisame🔥.jpg",
      kanji: "干柿鬼鮫",
      quote: "EL Biju sin Cola"
    },
    dates: {
      birthday: "18 de marzo",
      height: "1,95m",
      weight: "83.1 kg",
      village: "Kirigakure",
      ability: "Mucho Chakra"
    }
  }
}

function switchContent(character) {
  document.getElementById('MAIN').style.display = "flex";


  switch (character) {
    case "Deidara":
      actualizarContenido(akasuki.deidara);
      break;

    case "Sasori":
      actualizarContenido(akasuki.sasori);
      break;

    case "Kisame":
      actualizarContenido(akasuki.kisame);
      break;

    default:
      actualizarContenido(akasuki.deidara);
      break;
  }
}

function actualizarContenido({ name, card: { rute, kanji, quote }, dates: { birthday, height, weight, village, ability } }) {
  // Modificar el contenido utilizando JavaScript
  document.getElementById('BIRTHDAY').innerHTML = birthday;
  document.getElementById('HEIGHT').innerHTML = height;
  document.getElementById('WEIGHT').innerHTML = weight;
  document.getElementById('VILLAGE').innerHTML = village;
  document.getElementById('ABILITY').innerHTML = ability;

  let img = document.getElementById('IMG CARD');
  img.setAttribute('src', rute);
  img.setAttribute('alt', `character img of ${name}`);

  document.getElementById('KANJI').innerHTML = kanji;
  document.getElementById('QUOTE').innerHTML = `"${quote}"`;
}






