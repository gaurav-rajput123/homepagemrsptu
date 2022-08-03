import Link from "next/dist/client/link";
const PageTitle = ({ pageTitle, motherTitle, url }) => {
  return (
    <div id="breadcrumb" className="division">
      <div className="container">
        <div className="row">
          {/* BREADCRUMB NAV */}
          <div className="col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/home">Home</Link>
                </li>
                {motherTitle && (
                  <li className="breadcrumb-item">
                    <Link href={`/`}>{motherTitle}</Link>
                  </li>
                )}
               
              </ol>
            </nav>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default PageTitle;
