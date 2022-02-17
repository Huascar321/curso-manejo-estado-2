import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div>
        <p style={{ color: "black" }}>Hubo cambios</p>
        <button onClick={() => toggleShow(false)}>
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
