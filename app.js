

const MOVEBUTTON = document.createElement('button');
const LAYER_BUTTON = document.createElement('button');
const HIDE_BUTTON = document.createElement('button');
const MOVE_BUTTON_NORTH = document.createElement('button');
const MOVE_BUTTON_SOUTH = document.createElement('button');
const MOVE_BUTTON_WEST = document.createElement('button');
const MOVE_BUTTON_EAST = document.createElement('button');
let buttonBarDivId = document.getElementById("buttonDiv");


MOVEBUTTON.style.backgroundColor = 'aquamarine';
MOVEBUTTON.textContent = 'move Icon';
MOVEBUTTON.style.width = '58px';
MOVEBUTTON.style.height = '38px';

//document.body.appendChild(moveButton);

HIDE_BUTTON.style.width = '58px';
HIDE_BUTTON.style.height = '38px';
HIDE_BUTTON.textContent = 'hide icon';
HIDE_BUTTON.style.backgroundColor = 'coral';


LAYER_BUTTON.style.width = '58px';
LAYER_BUTTON.style.height = '38px';
LAYER_BUTTON.textContent = 'change layer';
LAYER_BUTTON.style.backgroundColor = 'chartreuse';


MOVE_BUTTON_NORTH.style.width = '58px';
MOVE_BUTTON_NORTH.style.height = '38px';
MOVE_BUTTON_NORTH.textContent = 'move north';
MOVE_BUTTON_NORTH.style.backgroundColor = 'yellow';

MOVE_BUTTON_SOUTH.style.width = '58px';
MOVE_BUTTON_SOUTH.style.height = '38px';
MOVE_BUTTON_SOUTH.textContent = 'move south';
MOVE_BUTTON_SOUTH.style.backgroundColor = 'yellow';

MOVE_BUTTON_EAST.style.width = '58px';
MOVE_BUTTON_EAST.style.height = '38px';
MOVE_BUTTON_EAST.textContent = 'move east';
MOVE_BUTTON_EAST.style.backgroundColor = 'yellow';

MOVE_BUTTON_WEST.style.width = '58px';
MOVE_BUTTON_WEST.style.height = '38px';
MOVE_BUTTON_WEST.textContent = 'move west';
MOVE_BUTTON_WEST.style.backgroundColor = 'yellow';


buttonBarDivId.appendChild(MOVEBUTTON);
buttonBarDivId.appendChild(MOVE_BUTTON_NORTH);
buttonBarDivId.appendChild(MOVE_BUTTON_EAST);
buttonBarDivId.appendChild(MOVE_BUTTON_WEST);
buttonBarDivId.appendChild(MOVE_BUTTON_SOUTH);
buttonBarDivId.appendChild(LAYER_BUTTON);
buttonBarDivId.appendChild(HIDE_BUTTON);



