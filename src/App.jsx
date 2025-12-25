import React from "react";
import AppRouter from "./Routes/AppRouter";

const App = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="flex-1">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
