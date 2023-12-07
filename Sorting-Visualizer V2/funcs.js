function changePillarColours(index, colour){
    var pillars = document.getElementsByClassName("pillar");
    pillars[index].style.backgroundColor = colour;
}

function changePillarHeight(index, height){
    var pillars = document.getElementsByClassName("pillar");
    pillars[index].style["height"] = height + "px";
}