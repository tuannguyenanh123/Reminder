import "./App.scss";
import FormInput from "./components/FormInput";
import ListReminders from "./components/ListReminders";
import NotiRemid from "./components/NotiRemid";

function App() {
  return (
    <div className="app">
      <div className="appMain">
        <NotiRemid />
        <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
        <div className="container">
          <div className="row">
            <FormInput />
            <ListReminders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
