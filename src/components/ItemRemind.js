import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { observer } from "mobx-react";
import remindStore from "./../store/Store";

// let data = JSON.parse(localStorage.getItem("reminders"));
// data = localStorage.setItem(
//   "reminders",
//   JSON.stringify(remindStore.listRemind)
// );
// let initialState = data ? data : [];
// console.log(initialState);

const ItemRemind = ({ item, styleRemid }) => {
  return (
    <div className="item" style={styleRemid}>
      <div className="itemRemind">
        <span className="item__date">{item.date}</span>
        <span className="item__content">{item.content}</span>
      </div>
      <div className="itemBtn" onClick={() => remindStore.deleteItem(item)}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default observer(ItemRemind);
