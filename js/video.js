var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//1.Play Video
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

//2.Pause Video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//3. Slow Down Video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *= 0.95;
	console.log("New video speed is " + video.playbackRate);
});

//4, Speed up Video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up")
	video.playbackRate *= 1.05;
	console.log("New video speed is " + video.playbackRate);
});


// 5. Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	if ((video.duration - video.currentTime) - 15> 0){
		video.currentTime = video.currentTime + 15;
		console.log("Current video"+ video.currentTime);
	}
	else {
		video.currentTime =  0;
		console.log("Beggining of thr video");
	}
})

//6. Mute Video
document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted);
	if (video.muted == false) {
		console.log("Mute Video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		console.log("Unmute Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

    //7. Volume Slider
	document.querySelector("#slider").addEventListener('click', function(){
		video.volume = document.querySelector("#slider").value / 100;
		document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
		console.log("Slider Volume: " + video.volume);
	})
	
	//8. Styled
	document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change to Oldschool");
	document.querySelector("#player1").classList.add("oldSchool");
	});
	
	//9. Oringinal	
	document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Oldschool");
	document.querySelector("#player1").classList.remove("oldSchool");
	});
