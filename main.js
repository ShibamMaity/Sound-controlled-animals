function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l5wRe2HDW/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}