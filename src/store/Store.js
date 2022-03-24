import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Store {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  listRemind = [
    {
      id: 0,
      date: "17/3/2022",
      content: "SÁNG",
    },
    {
      id: 1,
      date: "20/3/2022",
      content: "TRƯA",
    },
    {
      id: 2,
      date: "24/3/2022",
      content: "TỐI",
    },
  ];
  popupRemind = () => {
    let data = JSON.parse(localStorage.getItem("reminders"));
    let current = new Date();
    for (let i = 0; i < data.length; i++) {
      if (current.toLocaleDateString() === data[i].date) {
        alert("Bạn có 1 lời nhắc: " + data[i].content);
        return data[i];
      }
    }
  };
  styleRemid = (id) => {
    let current = new Date();
    for (let i = 0; i < this.listRemind.length; i++) {
      if (
        current.toLocaleDateString() === this.listRemind[i].date &&
        this.listRemind[i].id === id
      ) {
        return {
          backgroundColor: "rgb(146, 68, 68)",
        };
      }
    }
  };
  handleValidation = (valueForm) => {
    const content = valueForm;
    const errors = [];
    if (content === "") {
      errors.push("Content is empty");
    }
    // else if (new Date(content) === "Invalid Date") {
    //   errors.push("Invalid date");
    // }
    return errors;
  };
  notifyDel = () => toast("Bạn vừa xóa 1 remider!");
  handleSubmit = (valueForm, errors, e) => {
    e.preventDefault();
    if (e.target[1].value !== "") {
      this.listRemind.push({
        id: uuidv4(),
        ...valueForm,
      });
      this.notifyAdd();
      if (errors.length > 0) {
        alert(errors);
        return;
      }
      localStorage.setItem("reminders", JSON.stringify(this.listRemind));
    }
  };
  notifyAdd = () => toast("Bạn vừa thêm 1 remider!");
  deleteItem = (itemProp) => {
    const items = JSON.parse(localStorage.getItem("reminders")).filter(
      (item) => item.id !== itemProp.id
    );
    this.listRemind = items;
    localStorage.setItem("reminders", JSON.stringify(this.listRemind));
    this.notifyDel();
  };
}

const remindStore = new Store();
export default remindStore;
