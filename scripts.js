//       ***********************
//            INSTRUCTIONS
//       ***********************

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'
let boxElements = []
let winChecker
let checkSpot
let winner = ""
// const tdElements = element.getElementsByTagName('td')
let squares = document.getElementsByTagName("td")



// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}






const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

const winCheck = () => {

  squares = document.getElementsByTagName("td")
  console.log(squares)
  for (i=0; i < 8; i++) {
    let xCount = 0
    let oCount = 0
    for (j=0; j < 3; j++) {
      checkSpot = winConditions[i][j] //sets checkSpot to next value in winConditions
      if (squares[checkSpot].innerHTML == "X" || squares[checkSpot].innerHTML == "O") {
        console.log('not null')
        if (squares[checkSpot].innerHTML == "X")  {
          xCount += 1
          if (xCount == 3) {
            setTimeout(() => {
              window.alert("X wins")
            } , 200);
            console.log("X wins")
          }
        }
        if (squares[checkSpot].innerHTML == "O")  {
          oCount += 1
          if (oCount == 3) {
            setTimeout(() => {
              window.alert("O wins")
            } , 200);
            console.log("O wins")
          }
        }
        
        //if [a,b,c] isn't all the same string, 
        //reset counts to zero and check next [a,b,c] set

      }
      
    }
    // console.log(xCount)

    
  }  
  // document.getElementById(top-left) = top-left
  console.log('finished checks')


}






// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  // console.log(`*** The current marker is:  ${currentMarker}. ***`)
  // console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"
  document.getElementById(id).innerHTML = currentMarker
  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 
  
  changeMarker()
  winCheck()

}










// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
  
}










// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {

  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
    // squares = document.getElementsByTagName("td")
    console.log(squares)
  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    // console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}

