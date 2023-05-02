import { useNavigate, } from "react-router-dom";
import New from "../component/meeting/NewMeeting";

const NewMeeting = (props) => {
  const navigate = useNavigate();
  const createNewHandler = (data) => {
    fetch("http://localhost:3001/api/todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("..");
    });
  };
  return (
    <>
      <section>
        <h1 style={{ paddingBottom: "10px", textAlign: "center" }}>
          New Meeting
        </h1>
        <div>
          <New addNew={createNewHandler} />
        </div>
      </section>
    </>
  );
};
export default NewMeeting;
