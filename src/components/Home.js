import Notes from "./Notes";
const Home = (props) => {
  
  return (
    <div className="container my-3">
      <div>
        
        <Notes showAlert={props.showAlert}></Notes>
      </div>
    </div>
  );
};

export default Home;
