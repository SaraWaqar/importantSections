import React from "react";
import { ExampleProvider } from "./context/exampleContext/Index";
import { router } from "./Navigation/Index";
import { RouterProvider} from "react-router-dom";


function App() {
  return (
    <>
      <ExampleProvider>
        <RouterProvider router={router} />
      </ExampleProvider>
    </>
  );
}

export default App;
