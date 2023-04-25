import "./pagenotfound.css";
import pageNotFound from "../../images/pageNotFound/pageNotFound.svg";

const Pagenotfound = () => {
  return (
    <div className="page-not-found" >
        <img src={pageNotFound} alt="" />
        <h1>Page Not Found</h1>
    </div>
  )
}

export default Pagenotfound;