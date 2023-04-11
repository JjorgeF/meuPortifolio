window.alert("!!Atenção!! Este site ainda está em construção. Caso encontre erros, avise-me, por favor! :)");

//Gráficos sobre minhas habilidades

// Get the HTML canvas by its id 
graf = document.getElementById("graf");
// Example datasets for X and Y-axes 
var lang = ["HTML", "CSS", "JavaScript", "C++", "React.JS", "Inglês"]; //Stays on the X-axis 
var traffic = [50, 50, 50, 25, 30, 50] //Stays on the Y-axis 
// Create an instance of Chart object:
new Chart(graf, {
 type: 'pie', //Declare the chart type 
 data: {
 labels: lang, //X-axis data 
 datasets: [{
 data: traffic, //Y-axis data

 //Color of each bar:
 backgroundColor: [
    "rgba( 75, 0, 130, 1 )", //html
    "rgba( 112, 128, 144, 1 )", //css
    "rgba( 255, 0, 0, 1 )", //javascript
    "rgba( 255, 255, 0, 1 )", //c++
    "rgba( 21, 227, 235 )", //react
    "rgba( 65, 105, 225, 1 )"], //ingles

 borderColor: 'black',
 fill: false, //Fills the curve under the line with the babckground color. It's true by default 
 }]
 },
 options:{
    legend: {display: true}, //This is true by default.
    
    }
});