import SideImage from "./components/SideImage";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  return (
    <main>
      <main className="sm:bg-gradient bg-gradient-mobile h-screen w-full bg-no-repeat flex sm:content-center sm:items-center background">
        <div className=" md:grid md:grid-flow-col md:items-center w-5/6 mx-auto justify-between py-4 sm:py-0">
          <SideImage />
          <Form />
        </div>
      </main>
    </main>
  );
}

export default App;
