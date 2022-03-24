import React from "react";
import { observer } from "mobx-react";
import remindStore from "./../store/Store";

const NotiRemid = () => {
  return (
    <div>
      <h1
        style={{
          color: "red",
        }}
      >
        {() => remindStore.popupRemind}
      </h1>
    </div>
  );
};

export default observer(NotiRemid);
