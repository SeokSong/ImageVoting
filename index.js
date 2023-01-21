window.onload = function(){ 
    let question = createQuestion();
    let questionText = "Which photo is the " + question + " ranges";
    var questionDisplay = document.getElementById("questionDisplay").innerHTML = questionText;
    // document.getElementById('contact-number').innerHTML = PHONE_NUMBER_VALUE;

    var rightSide = document.getElementById("rightSide"),
    rightClicked = false;

    var leftSide = document.getElementById("leftSide"),
    leftClicked = false;

    const image1 = new Image();
    image1.src = grabImage();

    const image2 = new Image();
    image2.src = grabImage();

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

function grabImage(){
    var folderIndex = createFolderIndex();
    var imageindex = createImageIndex();
    let baseFolderPath = "C:/Users/seokj/Code/ImageVoting/Images/";
    let folder = folderKnowledge(folderIndex)
    return baseFolderPath + folderIndex + "/" + folder + imageindex + ".png";
}

function correctAnswer(ans){

    return 
}