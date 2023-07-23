import React from "react";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <span className="loading loading-infinity loading-lg text-success" />
      <p className="text-sm text-muted-foreground">Genius is thinking...</p>
    </div>
  );
};

export default Loader;
