Webcam.attach('#camera')
camera=document.getElementById("camera")
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
})
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfieimage">'
    })
}
