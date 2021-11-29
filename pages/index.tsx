import MyNavbar from '../components/MyNavbar';
import Footer from "../components/footer"
import Link from "next/link"
import TaxonomyCard from "../components/taxonomy-card"
import "../style.css"
import {getProjects,getDepartments} from "../lib/actions"
export default function Index({ departments }) {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div id="cover">
        <div className="container-fluid py-5 px-md-5">
          <div className="row align-items-center justify-content-center text-center" style={{ minHeight: "60vh" }}>
            <div className="col-md-6">
              <h1 className="fw-bold text-light">Project resources for everyone.</h1>
              <p className="md-lead text-light">Find project resouces for your project work</p>
              <div className="input-group input-group-lg">
                <input type="text" className="form-control  form-control-lg shadow-none outline-none"
                  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                <button className="btn btn-primary" type="button" id="button-addon2"><i
                  className="bi bi-search"></i></button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="d-flex flex-column flex-md-row p-4 justify-content-center align-items-center">
          <div className="text-light  text-center lead mx-md-3">Over <span className="fw-bold">200</span> resources publised. Create publisher account.</div>
          <button className="btn btn-danger mt-2 mt-md-0 btn-lg">Create Account</button>
        </div>
      </div>

      <div className="container my-5">
        <h3>Search project by departments</h3>
        <div className="row">
          {departments.map(v => {

            return <div className="col-12 col-md-4 my-2">
              <Link href={"/projects?department_id=" + v.id}>
                <a className="text-decoration-none text-body">
                  <TaxonomyCard {...v} />
                  </a>
              </Link>
            </div>
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {

  const data = await getDepartments();

  return {
    props: {
      departments: data
    }
  }
}
