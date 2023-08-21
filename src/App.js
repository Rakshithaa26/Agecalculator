import logo from "./logo.svg";
import "./App.css";
import State from "./state";
import Binding from "./components/binding";
import PropTypeValidation from "./components/PropTypeValidation";
import Bindingdemo from "./components/Bindind demo";
import Parent from "./components/parent";

import Garage from "./components/Mapfunctionlist";
import ParagraphWordCounter from "./components/Paragraphcount";
import ColorPicker from "./components/Colorpicker";
import AgeCalculator from "./components/Agecalculator";
import Keydemo from "./components/Keydemo";

function App() {
  const colors = ["#ACFADF", "#94ADD7", "#FBA1B7", "#CD6688", "#DFA878"];
  return (
    <div className="App">
      {/* <State />
      <Binding name="AUDI" />
      <PropTypeValidation />
      <Bindingdemo />
      <Parent />
      <Garage />
      <ParagraphWordCounter /> */}

      <ColorPicker colors={colors} />
      <AgeCalculator />
      <Keydemo />
    </div>
  );
}

export default App;
