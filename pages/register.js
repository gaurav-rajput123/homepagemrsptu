import Link from "next/link";
import React from "react";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import Registerform from "../src/components/About/Registerform";
const Register = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Contact Us" />
        <section id="contacts-2" className="wide-100 contacts-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-12">
                <div className="section-title title-centered mb-60">
                  {/* Title 	*/}
                  <h3 className="h3-sm">Quick Enquiry</h3>
                  {/* Text */}
                  {/* <p className="p-md">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta
                  </p> */}
                </div>
              </div>
            </div>
            <div>
            <Registerform />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Register;
