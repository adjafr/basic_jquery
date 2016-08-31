import $ from 'jquery'

import './basic.css'


var color1 = "rgb(255, 0, 0)"
var color2 = "rgb(0, 128, 0)"
var color3 = "rgb(0, 0, 255)"

	function boxColor(box) {
	console.log("button was pressed")
	console.log($(box).css("background-color"))
    	if ($(box).css("background-color") == color1) {
    		$(box).css("background-color", color2)
    		console.log($(box).css("background-color"))
    	} else if ($(box).css("background-color") == color2) {
    		$(box).css("background-color", color3)
    		console.log($(box).css("background-color"))
    	} else {
    		$(box).css("background-color", color1)
    	}

}

	$(document).ready(function(){

	    $(".button1").click(function(){
	        boxColor(".box1")
	    })

	    $(".button2").click(function(){
	        boxColor(".box2")
	    })

	    $(".button3").click(function(){
	        boxColor(".box3")
	    })


	    $(".button4").click(function(){
	        $(".box1").css("background-color", "red")
	        $(".box2").css("background-color", "green")
	        $(".box3").css("background-color", "blue")
	    })

	})
