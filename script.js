let form = document.getElementById("form");
const topp = document.getElementById("top");
const left = document.getElementById("left");
const sqside = document.getElementById("sqside");
const circleradius = document.getElementById("circleradius");
const box = document.getElementById("box");


function coordinate(){
    let noOfCircles = Math.floor(Number(sqside.value)/Number(circleradius.value*2));
    let gap = Number(sqside.value)- noOfCircles*Number((circleradius.value)*2);
    let gapsize = gap/(noOfCircles-1);
    let coordinates = [];
    console.log("a");
    for(let i=0;i<noOfCircles;i++){
        coordinates[i] = [];
        for(let j=0;j<noOfCircles;j++){
            if(i==0&&j==0){
                coordinates[i].push([Number(circleradius.value)+Number(left.value), Number(circleradius.value)+Number(topp.value)]);
            }
            else if(i==0){
                coordinates[i].push([Number(circleradius.value)+Number(left.value)+Number(circleradius.value)*2*j+gapsize*j, Number(circleradius.value)+ Number(topp.value)]);
            }
            else if(j==0){
                coordinates[i].push([Number(circleradius.value)+Number(left.value), Number(circleradius.value)+Number(circleradius.value)*2*i+gapsize*i+Number(topp.value)]);
            }
            else {
                coordinates[i].push([Number(circleradius.value)+Number(circleradius.value)*2*j+gapsize*j+Number(left.value),Number(circleradius.value)+Number(circleradius.value)*2*i+gapsize*i+Number(topp.value)]);
            }
            
        }
    }
    console.log(coordinates);
    
}

form.addEventListener("submit", (e)=>{
    e.preventDefault(); 
    let noOfCircles = Math.floor(Number(sqside.value)/Number(circleradius.value*2));
    box.style.width = Number(sqside.value) + noOfCircles*2*2+ 'px';
    box.style.height = Number(sqside.value)+ noOfCircles*2*2+'px';
    
    console.log(box.children.length)
    for(let i=0;i<noOfCircles*noOfCircles;i++){
        if(box.children.length){
            box.children[i].parentNode.removeChild(box.children[i]);
        }
    }
    
    //div = document.createElement('div');
    for(let i=0;i<noOfCircles;i++){
        for(let j=0;j<noOfCircles;j++){
            let div = document.createElement('div');
            div.id = i + j;
            div.style.height = Number(circleradius.value)*2 + 'px';
            div.style.width = Number(circleradius.value)*2 +'px';
            div.className = 'circle';
            box.appendChild(div);
        }
    }
    box.style.setProperty('grid-template-columns', 'repeat(' + noOfCircles + ', 1fr) ');
    box.style.setProperty('grid-template-rows', 'repeat(' + noOfCircles + ', 1fr) ');
    box.style.position = "absolute";
    box.style.top = Number(topp.value) + 'px';
    box.style.left = Number(left.value) + 'px';
    coordinate();
});
