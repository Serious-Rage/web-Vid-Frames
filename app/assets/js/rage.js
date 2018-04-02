var mrRage = (function(global,$,a,b,c,d) {

//place new modules in organized structure
var serious = {
    fairchild:{
    rage:     {
                 constructors:{},
                 arrayHelpers:{},
                 cloneElements:{
                        cloneTxtInput:{},

                 },
                 factories:   {
                        frame1:{},
                        frame2:{},
                        frame3:{}
                 }

   }}}

// make short form syntax for base vars
var sfr = serious.fairchild.rage;
var sfrCnst = sfr.constructors;
var sfrArryHlp = sfr.arrayHelpers;
var sfrF = sfr.factories;
var sfrClnEl = sfr.cloneElements;
var ClnTxtIn1 = sfrClnEl.cloneTxtInput;



// -----------------------------------------------

sfrF.frame1 = (function(global,$,a,b,c,d) {





//function myFunction() {
//    var x = document.getElementsByClassName("x");
//    x[0].innerHTML = "Hello World!";
//}




var cntr = 0;


function makeFrame(host) {
    var cntr = 0;
        var badDiv = document.createElement('div');
      badDiv.setAttribute("class", "framediv");
  // var FUI =  document.getElementById("framediv");
    // document.createElement("DIV").className("framediv");
     var FUI =  document.getElementsByClassName("framediv");

  // var howManyframedivs = FUI.length;

    return function(vidId) {


        if (host === 'xham') {

        FUI[cntr].innerHTML = xhamPrefix + vidId + xhamTail;
        }

        if (host === 'sun') {
        // cntr=cntr++;
        FUI[cntr].innerHTML = sunPrefix + vidId + sunTail;
        }

         cntr=cntr++;
       }



}

function makeFrame2(host) {
        var badDiv = document.createElement('div');
      badDiv.setAttribute("class", "framediv2");
  // var FUI =  document.getElementById("framediv");
    // document.createElement("DIV").className("framediv");
     var FUI =  document.getElementsByClassName("framediv2");

  // var howManyframedivs = FUI.length;

    return function(vidId) {


        if (host === 'xham') {

        FUI[cntr].innerHTML = xhamPrefix + vidId + xhamTail;
        }

        if (host === 'sun') {
        // cntr=cntr++;
        FUI[cntr].innerHTML = sunPrefix + vidId + sunTail;
        }

         cntr=cntr++;
       }



}

function makeFrame3(host) {
        var badDiv = document.createElement('div');
      badDiv.setAttribute("class", "framediv3");
  // var FUI =  document.getElementById("framediv");
    // document.createElement("DIV").className("framediv");
     var FUI =  document.getElementsByClassName("framediv3");

  // var howManyframedivs = FUI.length;

    return function(vidId) {


        if (host === 'xham') {

        FUI[cntr].innerHTML = xhamPrefix + vidId + xhamTail;
        }

        if (host === 'sun') {
        // cntr=cntr++;
        FUI[cntr].innerHTML = sunPrefix + vidId + sunTail;
        }

         cntr=cntr++;
       }



}
var xhamFrame = makeFrame('xham');
var sunFrame = makeFrame('sun');
var xhamFrame2 = makeFrame2('xham');
var sunFrame2 = makeFrame2('sun');
var xhamFrame3 = makeFrame3('xham');
var sunFrame3 = makeFrame3('sun');

var xhamPrefix = '<iframe width="810" height="635" src="http://xhamster.com/xembed.php?video=';

var xhamTail = '" frameborder="0" scrolling="no" allowfullscreen></iframe>';

var sunPrefix = '<iframe width="810" height="635" src="http://embeds.sunporno.com/embed/';

var sunTail = '" frameborder="0" scrolling="no" allowfullscreen></iframe>';


//xhamFrame('577120');
//sunFrame2('1050104');

//sunFrame2(b);
xhamFrame3(c);
xhamFrame2(b);
xhamFrame(a);
// -----------------------------------------------

})(window,$,a,b,c)
})

//mrRage(window,jQuery,'6185211','2893178','1583415');
mrRage(window,jQuery,'6189235','4101683','1010761');
