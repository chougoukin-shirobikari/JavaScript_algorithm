function append(array, value){
    var tempArray = new Array(array.length + 1);

    for(var i = 0; i < array.length; i++){
        tempArray[i] = array[i];
    }

    tempArray[array.length] = value;
    return tempArray;
}

var scores = new Array(90, 70, 50, 80, 60, 85);
scores = append(scores, 75);

for(var i = 0; i < scores.length; i++){
    document.write(scores[i] + ",");
}