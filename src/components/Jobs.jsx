const Jobs = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <div className="data">
        <p>
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </div>
  );
};

export default Jobs;
