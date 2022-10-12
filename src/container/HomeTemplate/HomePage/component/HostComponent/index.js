import React from "react";

export default function HostComponent() {
  return (
    <div className="host__container container">
      <div className="d-flex">
        <div className="host__video ">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EEkiJtpvJMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="host__introducing my-auto  px-4">
          <h6 className="py-2" style={{color:"#2e4754",fontWeight:"700"}}>Become a host</h6>
          <h3 style={{color:"#ffc54d ",fontWeight:"700"}}>Making money from your empty slots</h3>
          <p style={{ color:"#484848",fontSize:"14px"}}>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet
            consectetur ante ipsum elit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis
            dapibus nunc.
          </p>
          <button className="btn host__btn">Become a host</button>
        </div>
        
      </div>
    </div>
  );
}
