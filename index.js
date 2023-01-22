window.onload = function(){ 
    let question = createQuestion();
    var answerObject = new Answer(question);
    let questionText = "Which photo is the " + question + " ranges";
    var questionDisplay = document.getElementById("questionDisplay").innerHTML = questionText;

    var rightSide = document.getElementById("rightSide"),
    rightClicked = false;

    var leftSide = document.getElementById("leftSide"),
    leftClicked = false;

    var image = grabImages()
    var answers = new questions(image[3], image[2]);

    let answer = answers.correctAnswer(answerObject.getAnswer());
    const image1 = new Image();
    image1.src = image[0];

    const image2 = new Image();
    
    image2.src = image[1];

    rightSide.appendChild(image1);
    leftSide.appendChild(image2);
    
    rightSide.onclick = function() {
    rightClicked = true;
    var ans = correctAnswer("right", answer);
    document.getElementById("myPopup").innerHTML = ans;
    };
    
    leftSide.onclick = function() {
    leftClicked = true;
    var ans = correctAnswer("left", answer);
    document.getElementById("myPopup").innerHTML = ans;
    }
}

function createQuestion(){
    var folderIndex = createFolderIndex();
    var question = folderKnowledge(folderIndex)
    return question;
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
function grabImages(){
    var folderIndex = createFolderIndex();
    var imageindex = createImageIndex();
    if(folderIndex == 0){
        var secondIndex = 1;
    }
    else{
        var secondIndex = 0;
    }
    let baseFolderPath = "C:/Users/seokj/Code/ImageVoting/Images/";
    let folder = folderKnowledge(folderIndex)
    let folderTwo = folderKnowledge(secondIndex)
    
    return [baseFolderPath + folderIndex + "/" + folder + imageindex + ".png", baseFolderPath + secondIndex + "/" + folderTwo + imageindex + ".png", folder, folderTwo];
}
function getLeftRightFolders(){
    return [this.left, this.right];
}
function correctAnswer(choice, answer){
    if(choice == answer){
        return "Correct";
    }
    else{
        return "Incorrect";
    }
} 

function closePopup() {
    popupBox.style.display = "none";
  }
  
  // Function to change the text in the popup
function changePopupText(newText) {
    var popupText = document.getElementById("popup-text");
    popupText.innerHTML = newText;
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

class Answer{
    constructor(answer, folder){
        this.answer = answer;
    }

    getAnswer(){
        return this.answer;
    }
}

class questions{
    constructor(left, right){
        this.left = left;
        this.right = right;
    }

    correctAnswer(answer){
        if(answer == this.left){
            return "left";
        }
        else{
            return "right";
        }
    }
}