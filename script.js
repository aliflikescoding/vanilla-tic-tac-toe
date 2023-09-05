let start_button = document.querySelector('#start_button');
let restart_button = document.querySelector('#button_restart');

const formData = (() => {
  const returnFromData = () => {
    let _player1_name = document.querySelector('#player_1_name').value;
    if (_player1_name == '') {
      _player1_name = 'player 1';
    }
    let _robot1 = document.querySelector('#robot_1');
    let _player1_choice;
    if (_robot1.checked === true) {
      _player1_choice = 'robot';
    } else {
      _player1_choice = 'human';
    }
    let _player2_name = document.querySelector('#player_2_name').value;
    if (_player2_name == '') {
      _player2_name = 'player 2';
    }
    let _robot2 = document.querySelector('#robot_2');
    let _player2_choice;
    if (_robot2.checked === true) {
      _player2_choice = 'robot';
    } else {
      _player2_choice = 'human';
    }

    return { _player1_name, _player1_choice, _player2_name, _player2_choice};
  };

  return {
    returnFromData,
  };
})();

const doTransition = (() => {
  const _makeGameVisible = () => {
    let _game_screen = document.querySelector('.game-screen');

    _game_screen.classList.remove('not-visible');
  }

  const transition = () => {
    let _selection_screen = document.querySelector('.selection-screen');
    let _three = document.querySelector('#three');
    let _two = document.querySelector('#two');
    let _one = document.querySelector('#one');
    let _start = document.querySelector('#start');

    _selection_screen.classList.add('not-visible');
    _three.classList.remove('not-visible');
    _three.classList.add('slide-up');
    setTimeout(() => {
      _three.classList.remove('slide-up');
      _three.classList.add('not-visible');
      _two.classList.remove('not-visible');
      _two.classList.add('slide-up');
      setTimeout(() => {
        _two.classList.remove('slide-up');
        _two.classList.add('not-visible');
        _one.classList.remove('not-visible');
        _one.classList.add('slide-up');
        setTimeout(() => {
          _one.classList.remove('slide-up');
          _one.classList.add('not-visible');
          _start.classList.remove('not-visible');
          _start.classList.add('slide-up');
          setTimeout(() => {
            _start.classList.remove('slide-up');
            _start.classList.add('not-visible');
            _makeGameVisible();
          }, 600);
        }, 600);
      }, 600);
    }, 600);
    
  };

  return {
    transition,
  }
})();

const game = (() => {
  const test = (object) => {
    console.log(object._player1_name);
    console.log(object._player1_choice);
    console.log(object._player2_name);
    console.log(object._player2_choice);
  };

  const winTransition1 = (object) => {
    let win_background = document.querySelector('.win-background');
    let win_screen = document.querySelector('.win_screen');
    let win_text = document.querySelector('#win_text');
    win_background.classList.remove('not-visible');
    win_screen.classList.remove('not-visible');
    win_screen.classList.add('appear');
    win_text.innerText = `${object._player1_name} is the winner!!!`;
    return true;
  };

  const winTransition2 = (object) => {
    let win_background = document.querySelector('.win-background');
    let win_screen = document.querySelector('.win_screen');
    let win_text = document.querySelector('#win_text');
    win_background.classList.remove('not-visible');
    win_screen.classList.remove('not-visible');
    win_screen.classList.add('appear');
    win_text.textContent = `${object._player2_name} is the winner!!!`;
    return true;
  };

  const check = (arr1, arr2, object) => {
    if (
      (arr1[0][0] === 1 && arr1[0][1] === 1 && arr1[0][2] === 1) ||
      (arr1[1][0] === 1 && arr1[1][1] === 1 && arr1[1][2] === 1) ||
      (arr1[2][0] === 1 && arr1[2][1] === 1 && arr1[2][2] === 1) ||
      (arr1[0][0] === 1 && arr1[1][0] === 1 && arr1[2][0] === 1) ||
      (arr1[0][1] === 1 && arr1[1][1] === 1 && arr1[2][1] === 1) ||
      (arr1[0][2] === 1 && arr1[1][2] === 1 && arr1[2][2] === 1) ||
      (arr1[0][0] === 1 && arr1[1][1] === 1 && arr1[2][2] === 1) ||
      (arr1[0][2] === 1 && arr1[1][1] === 1 && arr1[2][0] === 1)
    ) {
      winTransition1(object);
    }
    else if (
      (arr2[0][0] === 1 && arr2[0][1] === 1 && arr2[0][2] === 1) ||
      (arr2[1][0] === 1 && arr2[1][1] === 1 && arr2[1][2] === 1) ||
      (arr2[2][0] === 1 && arr2[2][1] === 1 && arr2[2][2] === 1) ||
      (arr2[0][0] === 1 && arr2[1][0] === 1 && arr2[2][0] === 1) ||
      (arr2[0][1] === 1 && arr2[1][1] === 1 && arr2[2][1] === 1) ||
      (arr2[0][2] === 1 && arr2[1][2] === 1 && arr2[2][2] === 1) ||
      (arr2[0][0] === 1 && arr2[1][1] === 1 && arr2[2][2] === 1) ||
      (arr2[0][2] === 1 && arr2[1][1] === 1 && arr2[2][0] === 1)
    ) {
      winTransition2(object);
    }
    else {
      return false;
    }
  };

  const generateNumber = (spots) => {
    var randomNumber = Math.floor(Math.random() * 9) + 1;
  
    if (spots.includes(randomNumber)) {
      return generateNumber(spots);
    } else {
      spots.push(randomNumber);
      return randomNumber;
    }
  }  

  const reserve = (ranNumber, arr1) => {
    if (ranNumber === 1) {
      arr1[0][0] = 1;
    }
    else if (ranNumber === 2) {
      arr1[0][1] = 1;
    }
    else if (ranNumber === 3) {
      arr1[0][2] = 1;
    }
    else if (ranNumber === 4) {
      arr1[1][0] = 1;
    }
    else if (ranNumber === 5) {
      arr1[1][1] = 1;
    }
    else if (ranNumber === 6) {
      arr1[1][2] = 1;
    }
    else if (ranNumber === 7) {
      arr1[2][0] = 1;
    }
    else if (ranNumber === 8) {
      arr1[2][1] = 1;
    }
    else if (ranNumber === 9) {
      arr1[2][2] = 1;
    }
  }

  const easyBot = (arr1, spots, symbol) => {
    let ranNumber = generateNumber(spots);
    reserve(ranNumber, arr1);
    let box = document.getElementById(`${ranNumber}`);
    let sym = document.createElement('h1');
    sym.innerText = `${symbol}`;
    box.appendChild(sym);
    sym.classList.add('appear');
    box.classList.add('pointer-none');
  };

  const startGame = (object) => {
    let boxes = document.querySelectorAll('.box');
    let game_text = document.querySelector('#game_turn');
    let board1 = [[0 , 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]];
    let board2 = [[0 , 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]];
    let taken_spots = [];
    let tiles = 0, win_status;
    game_text.innerText = `${object._player1_name}'s turn`;
    if (object._player1_choice == 'human' && object._player2_choice == 'robot') {
      boxes.forEach((box) => {
        box.addEventListener('click', () => {
          // human makes move
          let sym = document.createElement('h1');
          sym.classList.add('appear');
          game_text.innerText = `${object._player2_name}'s turn`;
          sym.innerText = 'x';
          tiles++;
          switch (box.id) {
              case '1':
                board1[0][0] = 1;
                break;
              case '2':
                board1[0][1] = 1;
                break;
              case '3':
                board1[0][2] = 1;
                break;
              case '4':
                board1[1][0] = 1;
                break;
              case '5':
                board1[1][1] = 1;
                break;
              case '6':
                board1[1][2] = 1;
                break;
              case '7':
                board1[2][0] = 1;
                break;
              case '8':
                board1[2][1] = 1;
                break;
              case '9':
                board1[2][2] = 1;
                break;
          }
          win_status = check(board1, board2, object);
          if (win_status === false && tiles === 9) {
              let win_background = document.querySelector('.win-background');
              let win_screen = document.querySelector('.win_screen');
              win_background.classList.remove('not-visible');
              win_screen.classList.remove('not-visible');
              win_screen.classList.add('appear');
          }
          box.appendChild(sym);
          box.classList.add('pointer-none');
          taken_spots.push(parseInt(box.id));
          // bot makes move here
          setTimeout(function() {
            // Code to execute after the delay
            easyBot(board2, taken_spots, 'o');
            game_text.innerText = `${object._player1_name}'s turn`;
            tiles++;
            win_status = check(board1, board2, object);
            if (win_status === false && tiles === 9) {
                let win_background = document.querySelector('.win-background');
                let win_screen = document.querySelector('.win_screen');
                win_background.classList.remove('not-visible');
                win_screen.classList.remove('not-visible');
                win_screen.classList.add('appear');
            }
          }, 250);
        });
      });
    }
    else if (object._player1_choice == 'robot' && object._player2_choice == 'human') {
      easyBot(board1, taken_spots, 'x');
      tiles++;
      game_text.innerText = `${object._player2_name}'s turn`;
      boxes.forEach((box) => {
        box.addEventListener('click', () => {
          // human makes move
          let sym = document.createElement('h1');
          sym.classList.add('appear');
          game_text.innerText = `${object._player2_name}'s turn`;
          sym.innerText = 'o';
          tiles++;
          switch (box.id) {
              case '1':
                board2[0][0] = 1;
                break;
              case '2':
                board2[0][1] = 1;
                break;
              case '3':
                board2[0][2] = 1;
                break;
              case '4':
                board2[1][0] = 1;
                break;
              case '5':
                board2[1][1] = 1;
                break;
              case '6':
                board2[1][2] = 1;
                break;
              case '7':
                board2[2][0] = 1;
                break;
              case '8':
                board2[2][1] = 1;
                break;
              case '9':
                board2[2][2] = 1;
                break;
          }
          win_status = check(board1, board2, object);
          if (win_status === false && tiles === 9) {
              let win_background = document.querySelector('.win-background');
              let win_screen = document.querySelector('.win_screen');
              win_background.classList.remove('not-visible');
              win_screen.classList.remove('not-visible');
              win_screen.classList.add('appear');
          }
          box.appendChild(sym);
          box.classList.add('pointer-none');
          taken_spots.push(parseInt(box.id));
          // bot makes move here
          game_text.innerText = `${object._player1_name}'s turn`;
          setTimeout(function() {
            // Code to execute after the delay
            easyBot(board1, taken_spots, 'x');
            tiles++;
            win_status = check(board1, board2, object);
            if (win_status === false && tiles === 9) {
                let win_background = document.querySelector('.win-background');
                let win_screen = document.querySelector('.win_screen');
                win_background.classList.remove('not-visible');
                win_screen.classList.remove('not-visible');
                win_screen.classList.add('appear');
            }
            game_text.innerText = `${object._player2_name}'s turn`;
          }, 250);
        });
      });
    }
    else if (object._player1_choice == 'robot' && object._player2_choice == 'robot') {
      game_text.innerText = `${object._player1_name}'s turn`;
      setTimeout(function() {
        function delayedForLoop(i, max, delay) {
          if (i <= max) {
           console.log(i);
            i++;
            if (i % 2 == 0) {
              easyBot(board1, taken_spots, 'x');
              tiles++;
              win_status = check(board1, board2, object);
              if (win_status === false && tiles === 9) {
                  let win_background = document.querySelector('.win-background');
                  let win_screen = document.querySelector('.win_screen');
                  win_background.classList.remove('not-visible');
                  win_screen.classList.remove('not-visible');
                  win_screen.classList.add('appear');
              }
              game_text.innerText = `${object._player2_name}'s turn`;
            }
            else {
              easyBot(board2, taken_spots, 'o');
              tiles++;
              win_status = check(board1, board2, object);
              if (win_status === false && tiles === 9) {
                  let win_background = document.querySelector('.win-background');
                  let win_screen = document.querySelector('.win_screen');
                  win_background.classList.remove('not-visible');
                  win_screen.classList.remove('not-visible');
                  win_screen.classList.add('appear');
              }
              game_text.innerText = `${object._player1_name}'s turn`;
            }
            setTimeout(delayedForLoop, delay, i, max, delay);
          }
        }

        delayedForLoop(1, 9, 1000);
      }, 3000);
    }
    else {
      boxes.forEach((box) => {
        box.addEventListener('click', () => {
          let sym = document.createElement('h1');
          sym.classList.add('appear');
          if (tiles % 2 == 0) {
            game_text.innerText = `${object._player2_name}'s turn`;
            sym.innerText = 'x';
            tiles++;
            switch (box.id) {
              case '1':
                board1[0][0] = 1;
                break;
              case '2':
                board1[0][1] = 1;
                break;
              case '3':
                board1[0][2] = 1;
                break;
              case '4':
                board1[1][0] = 1;
                break;
              case '5':
                board1[1][1] = 1;
                break;
              case '6':
                board1[1][2] = 1;
                break;
              case '7':
                board1[2][0] = 1;
                break;
              case '8':
                board1[2][1] = 1;
                break;
              case '9':
                board1[2][2] = 1;
                break;
            }
            win_status = check(board1, board2, object);
            if (win_status === false && tiles === 9) {
              let win_background = document.querySelector('.win-background');
              let win_screen = document.querySelector('.win_screen');
              win_background.classList.remove('not-visible');
              win_screen.classList.remove('not-visible');
              win_screen.classList.add('appear');
            }
          }
          else {
            game_text.innerText = `${object._player1_name}'s turn`;
            sym.innerText = 'o';
            tiles++;
            switch (box.id) {
              case '1':
                board2[0][0] = 1;
                break;
              case '2':
                board2[0][1] = 1;
                break;
              case '3':
                board2[0][2] = 1;
                break;
              case '4':
                board2[1][0] = 1;
                break;
              case '5':
                board2[1][1] = 1;
                break;
              case '6':
                board2[1][2] = 1;
                break;
              case '7':
                board2[2][0] = 1;
                break;
              case '8':
                board2[2][1] = 1;
                break;
              case '9':
                board2[2][2] = 1;
                break;
            }
            win_status = check(board1, board2, object);
            if (win_status === false && tiles === 9) {
              let win_background = document.querySelector('.win-background');
              let win_screen = document.querySelector('.win_screen');
              win_background.classList.remove('not-visible');
              win_screen.classList.remove('not-visible');
              win_screen.classList.add('appear');
            }
          }
          box.appendChild(sym);
          box.classList.add('pointer-none');
        });
      });
    }
  };

  return {
    test,
    startGame
  }
})();

start_button.addEventListener('click', (event) => {
  event.preventDefault();
  // console.log(formData.returnFromData());
  doTransition.transition();
  game.startGame(formData.returnFromData());
});
restart_button.addEventListener('click', () => {
  location.reload();
});