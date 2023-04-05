import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();
    return (
      <>
        <h1>This is About Page</h1>
        <div>
          <button className="button" onClick={() => navigate("/")}>
            Rediect
          </button>
        </div>
      </>
    );
}
export default About;