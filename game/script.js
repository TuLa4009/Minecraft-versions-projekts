var kanva = document.getElementById('game');
var konteksts = kanva.getContext('2d');

var režģis = 10;
var skaitlis = 0;

var čūska = {
  x: 160,
  y: 160,

  maiņaX: režģis,
  maiņaY: 0,


  šūnas: [],


  maksimālāsŠūnas: 4
};
var ābols = {
  x: iegūtNegadījumaSkaitli(0, 25) * režģis,
  y: iegūtNegadījumaSkaitli(0, 25) * režģis
};

function iegūtNegadījumaSkaitli(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// spēles cilpa
function cilpa() {
  requestAnimationFrame(cilpa);


  if (++skaitlis < 8) {
    return;
  }

  skaitlis = 0;
  konteksts.clearRect(0,0,kanva.width,kanva.height);


  čūska.x += čūska.maiņaX;
  čūska.y += čūska.maiņaY;


  if (čūska.x < 0) {
    čūska.x = kanva.width - režģis;
  }
  else if (čūska.x >= kanva.width) {
    čūska.x = 0;
  }

  if (čūska.y < 0) {
    čūska.y = kanva.height - režģis;
  }
  else if (čūska.y >= kanva.height) {
    čūska.y = 0;
  }

  čūska.šūnas.unshift({x: čūska.x, y: čūska.y});


  if (čūska.šūnas.length > čūska.maksimālāsŠūnas) {
    čūska.šūnas.pop();
  }

  konteksts.fillStyle = 'violet';
  konteksts.fillRect(ābols.x, ābols.y, režģis-1, režģis-1);

  konteksts.fillStyle = 'yellow';
  čūska.šūnas.forEach(function(cell, index) {


    konteksts.fillRect(cell.x, cell.y, režģis-1, režģis-1);

    // čūska ēda ābolu
    if (cell.x === ābols.x && cell.y === ābols.y) {
      čūska.maksimālāsŠūnas++;

      ābols.x = iegūtNegadījumaSkaitli(0, 25) * režģis;
      ābols.y = iegūtNegadījumaSkaitli(0, 25) * režģis;
    }


    for (var i = index + 1; i < čūska.šūnas.length; i++) {

      if (cell.x === čūska.šūnas[i].x && cell.y === čūska.šūnas[i].y) {
        čūska.x = 160;
        čūska.y = 160;
        čūska.šūnas = [];
        čūska.maksimālāsŠūnas = 4;
        čūska.maiņaX = režģis;
        čūska.maiņaY = 0;

        ābols.x = iegūtNegadījumaSkaitli(0, 25) * režģis;
        ābols.y = iegūtNegadījumaSkaitli(0, 25) * režģis;
      }
    }
  });
}


document.addEventListener('keydown', function(e) {


  if (e.which === 37 && čūska.maiņaX === 0) {
    čūska.maiņaX = -režģis;
    čūska.maiņaY = 0;
  }

  else if (e.which === 38 && čūska.maiņaY === 0) {
    čūska.maiņaY = -režģis;
    čūska.maiņaX = 0;
  }

  else if (e.which === 39 && čūska.maiņaX === 0) {
    čūska.maiņaX = režģis;
    čūska.maiņaY = 0;
  }

  else if (e.which === 40 && čūska.maiņaY === 0) {
    čūska.maiņaY = režģis;
    čūska.maiņaX = 0;
  }
});


requestAnimationFrame(cilpa);