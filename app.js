const layerButton = document.createElement('button');
const moveButton = document.createElement('button');
let buttonBarDivId = document.getElementById("buttonDiv");

moveButton.style.backgroundColor = 'aquamarine';
moveButton.textContent = 'move Icon';

// Set the position to 'fixed' to position it relative to the viewport
// moveButton.style.position = 'fixed';

// Position the button on the right side
// moveButton.style.right = '20px';
//
// // Position the button a bit higher from the top
// moveButton.style.top = '7%';

moveButton.style.width = '58px';
moveButton.style.height = '38px';

//document.body.appendChild(moveButton);




buttonBarDivId.appendChild(moveButton);


buttonBarDivId.appendChild(layerButton);
layerButton.style.backgroundColor = 'chartreuse';
layerButton.textContent = 'change layer';

// Set the position to 'fixed' to position it relative to the viewport
// layerButton.style.position = 'fixed';
//
// // Position the button on the right side
// layerButton.style.right = '20px';
//
// // Position the button a bit higher from the top
// layerButton.style.top = '12%';

layerButton.style.width = '58px';
layerButton.style.height = '38px';





//document.body.appendChild(layerButton);



// layerButton.onclick(changeColor());
// function changeColor() {
//     document.body.style.color = "red";
//     return false;
// }

// function colorChange() {
//     //layerButton.style.backgroundColor = 'red';
//     const myImageryLayer = new Cesium.ImageryLayer(new Cesium.OpenStreetMapImageryProvider({
//         url: "https://tile.openstreetmap.org/"
//     }));
//     scene.imageryLayers.add(myImageryLayer);
// }
//
//
//
//     layerButton.addEventListener('click', colorChange);

