import Link from "next/link";

const Service = () => {
  return (
    <>
      <section className="service-wrap pt-100 pb-100">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style4 text-center">
                <span>OUR ALL</span>
                <h2>Provided Services</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="/tours">
                    <img src="/images/service/service-5.png" alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Car Rental Services</Link>
                  </h4>
                  <p>100+ Listing</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="/tours">
                    <img src="/images/service/service-6.png" alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Hotel Booking</Link>
                  </h4>
                  <p>65+ Listing</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="/tours">
                    <img src="/images/service/service-7.png" alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Restaurent</Link>
                  </h4>
                  <p>90+ Listing</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="/tours">
                    <img src="/images/service/service-8.png" alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Club & Bar</Link>
                  </h4>
                  <p>45+ Listing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <Link href="/tours" className="btn v2">
                All Services <i className="ri-logout-circle-r-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
