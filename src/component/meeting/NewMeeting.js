import { useRef } from "react";
import Card from "../ui/Card";
import styless from "./newMeeting.module.css";
const NewMeeting = (props) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value,
    };
    console.log("data", data);
    props.addNew(data);
  };

  return (
    <>
      <Card>
        <form className={styless.form} onSubmit={onSubmitHandler}>
          <div className={styless.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleRef} />
          </div>
          <div className={styless.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={imageRef} />
          </div>
          <div className={styless.control}>
            <label htmlFor="address">Meetup Address</label>
            <input type="text" required id="address" ref={addressRef} />
          </div>
          <div className={styless.control}>
            <label htmlFor="description">Meetup Description</label>
            <textarea
              type="text"
              required
              id="description"
              rows={5}
              ref={descriptionRef}
            />
          </div>
          <div className={styless.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </>
  );
};
export default NewMeeting;
