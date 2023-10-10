const App = `import {Slider} from "@nextui-org/react";

export default function App() {
  return (
    <Slider 
      isDisabled 
      label="Temperature" 
      step={0.01} 
      maxValue={1} 
      minValue={0} 
      defaultValue={0.6}
      className="max-w-md"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
