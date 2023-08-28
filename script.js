let start_button = document.querySelector('#start_button');

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

    return { _player1_name, _player1_choice, _player2_name, _player2_choice };
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

start_button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(formData.returnFromData());
  doTransition.transition();
});