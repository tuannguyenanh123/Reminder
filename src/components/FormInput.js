import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { observer } from "mobx-react";
import remindStore from "./../store/Store";
import { ToastContainer } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

const FormInput = () => {
  useEffect(() => {
    remindStore.popupRemind();
  }, []);
  const [valueForm, setvalueForm] = useState({
    content: "",
    date: "",
  });
  const [errors, setErrors] = useState([]);

  const handleInput = (e) => {
    setErrors(remindStore.handleValidation(e.target.value));
    setvalueForm({
      content: e.target.value,
    });
  };
  const handleChangeDate = (e) => {
    console.log(e);
    setvalueForm({
      content: valueForm.content,
      date: e.toLocaleDateString(),
    });
  };
  const submit = (e) => {
    remindStore.handleSubmit(valueForm, errors, e);
    setvalueForm({
      content: (e.target[0].value = ""),
      date: (e.target[1].value = ""),
    });
  };
  return (
    <div className="col">
      <ToastContainer />
      <form className="form-inline" action="#" onSubmit={(e) => submit(e)}>
        <div className="form-group form1">
          <label htmlFor="content">Nội dung</label>
          <input
            // ref="name"
            type="text"
            className="form-control"
            id="content"
            name="content"
            onChange={(e) => handleInput(e)}
            autoComplete="off"
          ></input>
          <small>
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </small>
        </div>
        <div className="form-group form2">
          <label htmlFor="date">Ngày nhắc</label>
          <DatePicker
            // ref="date"
            className="inputDate rounded"
            // selected={new Date()}
            placeholderText="DD/MM/YYYY"
            value={valueForm.date}
            minDate={new Date()}
            autoComplete="off"
            onChange={(e) => {
              handleChangeDate(e);
              // remindStore.handleValidation(e);
            }}
            name="date"
          ></DatePicker>
          {/* <small>
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </small> */}
        </div>
        <button disabled={errors.length > 0} className="btn btn-dark">
          Add
        </button>
      </form>
    </div>
  );
};

export default observer(FormInput);
