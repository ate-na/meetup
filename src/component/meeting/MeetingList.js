import MeetingItem from "./MeetingItem";

const MeetingList = (props) => {
  return (
    <>
      <ul>
        {props.items.map((e) => (
          <MeetingItem
            id={e.id}
            title={e.title}
            address={e.address}
            description={e.description}
          />
        ))}
      </ul>
    </>
  );
};
export default MeetingList;
