function ClickedButton() {
  function handleClick() {
alert("You already saved this pin!")
  }
  return (
  <button id="clickedButton" onClick={handleClick}>
        Saved
      </button>

  )
}

export default ClickedButton;



// function SaveButton() {
//   function handleClick() {
//     alert("You are saving this pin!");
//   }
//   return (
//     <button id="saveButton" onClick={handleClick}>
//       Save
//     </button>
//   );
// }
//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
