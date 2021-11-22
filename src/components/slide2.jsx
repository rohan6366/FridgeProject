import {useEffect} from 'react'



function Slide2() {

  const boxes = [60,61,	62,	63,	64,	65,	66,	67,	68,	69,	70,	71,	72,	73,	74,	75,
    76,	77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90,	91,	92,	93,	94,	95,	96,	97,	98,	99,	100,
    101,	102,	103,	104,	105,	106,	107,	108,	109,	110,	111,	112,	113,	114,	115,	116,	117,	118,	119]

  var SCROLLER_LENGTH = 60;
  var HEIGHT = 7;
  var fps = 30;

  var myMessage = textToLED('Hello Everyone ');
  var leftPointer = SCROLLER_LENGTH + 1;
  //var rightPointer = 60;
  var furthestLeftPoint = 0 - myMessage.length;


/*
  function handleInputChange(e) {
    clearLights();
    myMessage= textToLED(e.target.value);
    furthestLeftPoint = 0 - myMessage.length;
    leftPointer = SCROLLER_LENGTH + 1;
};*/

  function clearLights(){
    var lightsOn = document.querySelector('.on');
    lightsOn.classList.remove('on');
    lightsOn.classList.add('off');
  }


  function setLight(row, col, state) {

    var theLight = document.getElementsByClassName(row + '_' + col)[0];


    if (theLight && theLight.classList.contains('on') && !state) {
        theLight.classList.remove('on');
        theLight.classList.add('off');
    } else if(theLight && theLight.classList.contains('off') && state) {
        theLight.classList.remove('off');
        theLight.classList.add('on');
    }
}

  function drawMessage(messageArray, leftPointer){
    var messageLength = messageArray.length;
    var totalScrollLength = SCROLLER_LENGTH + messageLength;
    
    if(messageLength>0){
      
          for(var col=0;col<messageLength;col++){
            //console.log(col)                            Here it remain to 19 (in case of 'Pak ')
            for(var row=0;row<HEIGHT;row++){
              var offsetCol = leftPointer + col;          // This will be between 61 to 80 in case of 'Pak '
              //console.log(col)                          Here it remain to 19 (in case of 'Pak ')

              //console.log(offsetCol)
              if(offsetCol<SCROLLER_LENGTH || offsetCol >= 0){
                setLight(row,offsetCol,messageArray[col][row]);
              }
              
            }
      }
      
    }
  }


  function textToLED(theWord){
    var theMessage = [];
    theWord = theWord.toUpperCase();
    for(var i=0;i<theWord.length;i++){
      theMessage.push(charToLED(theWord.charAt(i)));
      theMessage.push(charToLED());
    }
    
    var flatten = [];
    flatten = flatten.concat.apply(flatten, theMessage);
    
    return flatten;
  }


  function charToLED(theChar){
    var theLed = [];
      switch(theChar){
      case 'A' :
        theLed = [[false, false, true, true, true, true, true], 
                  [false, true, false, false, true, false, false], 
                  [true, false, false, false, true, false, false],
                  [false, true, false, false, true, false, false],
                  [false, false, true, true, true, true, true]];
        break;
      case 'B' :
        theLed = [[true, true, true, true, true, true, true], 
                  [true, false, false, true, false, false, true],
                  [true, false, false, true, false, false, true],
                  [true, false, false, true, false, false, true],
                  [false, true, true, false, true, true, false]];
        break;
          case 'C' :
        theLed = [[false, true, true, true, true, true, false], 
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [false, true, false, false, false, true, false]]; 
        break;
       case 'D' :
        theLed = [[true, true, true, true, true, true, true], 
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [false, true, true, true, true, true, false]]; 
        break;
      case 'E' :
        theLed = [[true, true, true, true, true, true, true], 
                  [true, false, false, true, false, false, true],
                  [true, false, false, true, false, false, true],
                  [true, false, false, true, false, false, true],
                  [true, false, false, false, false, false, true]];
        break;
      case 'F' :
        theLed = [[true, true, true, true, true, true, true], 
                  [true, false, false, true, false, false, false],
                  [true, false, false, true, false, false, false],
                  [true, false, false, true, false, false, false],
                  [true, false, false, false, false, false, false]];
        break;
      case 'G' :
        theLed = [[false, true, true, true, true, true, false], 
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, true, false, true],
                  [true, true, false, false, true, true, true]];
        break;
      case 'H' :
        theLed = [[true, true, true, true, true, true, true], 
                  [false, false, false, true, false, false, false],
                  [false, false, false, true, false, false, false],
                  [false, false, false, true, false, false, false],
                  [true, true, true, true, true, true, true]];
        break;
      case 'I' :
        theLed = [[false, false, false, false, false, false, false], 
                  [true, false, false, false, false, false, true],
                  [true, true, true, true, true, true, true],
                  [true, false, false, false, false, false, true],
                  [false, false, false, false, false, false, false]];
        break;
      case 'J' :
        theLed = [[false, false, false, false, false, true, false], 
                  [false, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [true, true, true, true, true, true, false],
                  [true, false, false, false, false, false, false]];
        break;  
        case 'K' :
        theLed = [[true, true, true, true, true, true, true], 
                  [false, false, false, true, false, false, false],
                  [false, false, true, false, true, false, false],
                  [false, true, false, false, false, true, false],
                  [true, false, false, false, false, false, true]];
        break;
        case 'L' :
        theLed = [[true, true, true, true, true, true, true], 
                  [false, false, false, false, false, false, true],
                  [false, false, false, false, false, false, true],
                  [false, false, false, false, false, false, true],
                  [false, false, false, false, false, false, true]];
        break;
        case 'M' :
        theLed = [[true, true, true, true, true, true, true], 
                  [false, true, false, false, false, false, false],
                  [false, false, true, false, false, false, false],
                  [false, true, false, false, false, false, false],
                  [true, true, true, true, true, true, true]];
        break;
        case 'N' :
        theLed = [[true, true, true, true, true, true, true], 
                  [false, false, true, false, false, false, false],
                  [false, false, false, true, false, false, false],
                  [false, false, false, false, true, false, false],
                  [true, true, true, true, true, true, true]];
        break;
        case 'O' :
        theLed = [[false, true, true, true, true, true, false], 
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, false, false, true],
                  [false, true, true, true, true, true, false]];
        break;
        case 'P' :
        theLed = [[true, true, true, true, true, true, true], 
                  [true, false, false, true, false, false, false],
                  [true, false, false, true, false, false, false],
                  [true, false, false, true, false, false, false],
                  [false, true, true, false, false, false, false]];
        break;
        case 'Q' :
        theLed = [[false, true, true, true, true, true, false], 
                  [true, false, false, false, false, false, true],
                  [true, false, false, false, true, false, true],
                  [true, false, false, false, false, true, false],
                  [false, true, true, true, true, false, true]];
        break;
        case 'R' :
        theLed = [[true, true, true, true, true, true, true], 
                  [true, false, false, true, false, false, false],
                  [true, false, false, true, false, false, false],
                  [true, false, false, true, false, false, false],
                  [false, true, true, false, true, true, true]];
        break;
        case 'S' :
        theLed = [[false, true, true, false, false, false, true], 
                  [true, false, false, true, false, false, true],
                  [true, false, false, true, false, false, true],
                  [true, false, false, true, false, false, true],
                  [true, false, false, false, true, true, false]];
        break;
        case 'T' :
        theLed = [[true, false, false, false, false, false, false], 
                  [true, false, false, false, false, false, false],
                  [true, true, true, true, true, true, true],
                  [true, false, false, false, false, false, false],
                  [true, false, false, false, false, false, false]];
        break;
        case 'U' :
        theLed = [[true, true, true, true, true, true, false], 
                  [false, false, false, false, false, false, true],
                  [false, false, false, false, false, false, true],
                  [false, false, false, false, false, false, true],
                  [true, true, true, true, true, true, false]];
        break;
        case 'V' :
        theLed = [[true, true, true, true, true, false, false], 
                  [false, false, false, false, false, true, false],
                  [false, false, false, false, false, false, true],
                  [false, false, false, false, false, true, false],
                  [true, true, true, true, true, false, false]];
        break;
        case 'W' :
        theLed = [[true, true, true, true, true, true, false], 
                  [false, false, false, false, false, false, true],
                  [false, false, false, false, true, true, false],
                  [false, false, false, false, false, false, true],
                  [true, true, true, true, true, true, false]];
        break;
        case 'X' :
        theLed = [[true, false, false, false, false, false, true], 
                  [false, true, true, false, true, true, false],
                  [false, false, false, true, false, false, false],
                  [false, true, true, false, true, true, false],
                  [true, false, false, false, false, false, true]];
        break;
        case 'Y' :
        theLed = [[true, false, false, false, false, false, false], 
                  [false, true, false, false, false, false, false],
                  [false, false, true, true, true, true, true],
                  [false, true, false, false, false, false, false],
                  [true, false, false, false, false, false, false]];
        break;
        case 'Z' :
        theLed = [[true, false, false, false, false, true, true], 
                  [true, false, false, false, true, false, true],
                  [true, false, false, true, false, false, true],
                  [true, false, true, false, false, false, true],
                  [true, true, false, false, false, false, true]];
        break;
      default:
        theLed = [[false, false, false, false, false, false, false]];
    }  
    return theLed;
  }

  function draw() {
    setTimeout(function() {
      requestAnimationFrame(draw);
      
         if(leftPointer===furthestLeftPoint){
            leftPointer = SCROLLER_LENGTH + 1;
         }
      
         drawMessage(myMessage, leftPointer);
         leftPointer--;     
        
    }, 1000 / fps);
  }
  
  draw();
  
    return (
        <div className='slide'>
            <div id="wrapper">

                <div id="theMarquee">
                    {boxes.map((box) => (
                        <div className={`light off 0_${box}`}></div>
                    ))}

                    {boxes.map((box) => (
                        <div className={`light off 1_${box}`}></div>
                    ))}

                    {boxes.map((box) => (
                        <div className={`light off 2_${box}`}></div>
                    ))}

                    {boxes.map((box) => (
                        <div className={`light off 3_${box}`}></div>
                    ))}

                    {boxes.map((box) => (
                        <div className={`light off 4_${box}`}></div>
                    ))}

                    {boxes.map((box) => (
                        <div className={`light off 5_${box}`}></div>
                    ))}

                    {boxes.map((box) => (
                        <div className={`light off 6_${box}`}></div>
                    ))}
                </div>
                
            </div>

            
        </div>
    )
}

export default Slide2

/*<input type="text" id='theInput' name='input' value='Hello everyone' onChange={(e) => handleInputChange(e)}/> */