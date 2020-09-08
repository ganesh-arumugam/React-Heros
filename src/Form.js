import React from "react";
import { Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

export function BasicForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div style={{ padding: "10px" }}>
        <label htmlFor="user"> Username: </label>
        <input id="user" type="text" />
      </div>

      <Button
        type="submit"
        intent="primary"
        icon="search"
        style={{
          padding: "5px",
          marginRight: "5px",
          marginLeft: "14%"
        }}
      >
        Search
      </Button>
      <Button
        type="button"
        icon="stop"
        intent="warning"
        style={{ padding: "5px" }}
        onClick={() => console.log("submit cancelled")}
      >
        Cancel
      </Button>
    </form>
  );
}
