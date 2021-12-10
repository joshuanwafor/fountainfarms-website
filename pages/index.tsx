import MyNavbar from '../components/MyNavbar';
import Footer from "../components/footer"
import "../style.css"
import { getDepartments } from "../lib/actions"
import { SearchComponent } from '../components/search-component';
export default function Index({ departments }) {
  return (
    <>
      {/* <OverlayWelcom /> */}
      <MyNavbar></MyNavbar>


      <div className='container'>

        <div className='row align-items-center' style={{ minHeight: '70vh' }}>
          <div className='col-12 col-md-6'>
            <h1 className='fw-bold'>
              Sponsor a farm, earn returns <br />and empower farmers while at it.
            </h1>

            <p className='lead'>
              Earn high returns when you sponsor farms, farms sponsored help farmers scale up production, empower the communities, preserve the future while you also grow your money.
            </p>

            <button className='btn btn-lg btn-primary'>Get Started</button>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}


export function OverlayWelcom() {
  return <div style={{ position: "fixed", width: "100%", zIndex: 100000000000000000, background: "rgba(200,200,200,.9)" }}>

    <div className="container p-2" style={{ height: "100vh" }}>
      <div className="row justify-content-center align-items-center " style={{}}>
        <div style={{ borderRadius: 10, overflow: "hidden" }} className="cool-10 col-md-6 p-0 text-center bg-light shadow">
          <div className="mb-2" style={{ paddingTop: '40%' }} id="welcomecover">

          </div>
          <div className="p-2">
            <div className="h1 fw-bold">
              We're building a market place for "academic" research works
            </div>
            <p className="lead">Create and Settup an account to published project[s] you'd love to exchange for some cash...</p>
            <a className="btn btn-lg btn-danger" href="https://app.mypapers.shop/profile">Create Publisher Account</a>

            <p>
              <small className="my-2 muted">Resources would be open for sale starting from  <b>Jan.01.2022</b></small>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
}