window.onload = function(){ 
    let question = createQuestion();
    let questionText = "Which photo is the " + question + " ranges";
    var questionDisplay = document.getElementById("questionDisplay").innerHTML = questionText;
    // document.getElementById('contact-number').innerHTML = PHONE_NUMBER_VALUE;

    var rightSide = document.getElementById("rightSide"),
    rightClicked = false;

    var leftSide = document.getElementById("leftSide"),
    leftClicked = false;

    var image = grabImages()
    const image1 = new Image();
    image1.src = image[0];

    const image2 = new Image();
    
    image2.src = image[1];

    rightSide.appendChild(image1);
    leftSide.appendChild(image2);
    
    rightSide.onclick = function() {
    rightClicked = true;
    var ans = "Correct";
    rightSide.innerHTML = ans;
    };
    
    leftSide.onclick = function() {
    leftClicked = true;
    var ans = "Correct";
    leftSide.innerHTML = ans;
    };
}

function folderKnowledge(index){
    const folderKnowledge = new Map();
    folderKnowledge.set(0, 'Appalachian');
    folderKnowledge.set(1, 'Rockys');
    return folderKnowledge.get(index)
}

function createFolderIndex(){
    return folderIndex = Math.floor(Math.random() * 2);
}

function createImageIndex(){
    return folderIndex = Math.floor(Math.random() * 5);
}

function createQuestion(){
    var folderIndex = createFolderIndex();
    return folderKnowledge(folderIndex);
}

function grabImages(){
    var folderIndex = createFolderIndex();
    var imageindex = createImageIndex();
    if(folderIndex == 0){
        var secondIndex = 1;
    }
    let baseFolderPath = "C:/Users/seokj/Code/ImageVoting/Images/";
    let folder = folderKnowledge(folderIndex)
    let folderTwo = folderKnowledge(secondIndex)
    return [baseFolderPath + folderIndex + "/" + folder + imageindex + ".png", baseFolderPath + secondIndex + "/" + folderTwo + imageindex + ".png"];
}

function correctAnswer(ans){

    return 
}