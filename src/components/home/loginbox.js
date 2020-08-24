import React from "react"

export default function LoginBox() {
  return (
    <section className="contact py-5">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                id="password"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="btn btn-login btn-block text-capitalize mt-5"
            >
              login
            </button>
            <button
              type="submit"
              className="btn btn-blue  text-capitalize mt-5"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
