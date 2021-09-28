function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DQcqAfkbX/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResuslts);
}

function gotResuslts(error, results)
{
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}