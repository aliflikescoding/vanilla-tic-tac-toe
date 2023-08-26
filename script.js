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

start_button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(formData.returnFromData());
});