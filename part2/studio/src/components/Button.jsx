import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(prop) {
  const saveButton = prop.saveButton
  if (saveButton === true) {
    return <SaveButton />
  } else {
    return <ClickedButton />
  }
   return;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 