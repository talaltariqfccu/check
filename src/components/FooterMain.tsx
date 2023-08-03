// Footer.js
import React from "react";

const FooterMain = () => {
  return (
    <footer className="bg-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod suscipit lacus, id luctus nisi varius non. Integer ornare
              massa a ullamcorper interdum. Nulla facilisi.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>

            <p>Address: 1234 Street, City, Country</p>

            <p>Phone: +123 456 789</p>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Your Company Name
      </div>
    </footer>
  );
};

export default FooterMain;
