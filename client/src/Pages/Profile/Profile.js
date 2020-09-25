import React from 'react'

const Profile = () => {
  return (
    <>
      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          paddingBottom: "18px",
          borderBottom: "1px solid grey"
        }}>


          <div>
            <img style={{ width: "160px", height: "160px", borderRadius: "80px" }} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Man" />
            <h4>Bart Simpson</h4>
          </div>


          <div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }} >
              <h6>4 Repositories</h6>
              <h6>100 Collabs</h6>
              <h6>50 Projects </h6>

            </div>

            <div>
              <h5>Hello World</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <b><h3>Bio</h3></b>
      </div>

    </>

    
  )
}

export default Profile