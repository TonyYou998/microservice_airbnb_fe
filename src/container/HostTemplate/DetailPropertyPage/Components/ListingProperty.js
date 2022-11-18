
import Button from 'react-bootstrap/Button';



export default function ListingProperty() {
    return (

    <>
  <div className="row">

  <strong className="listing col-4 d-flex "> Listing </strong> 

  </div>

<div className='form-hindden'>
    <div className="listing-header row">
    <p className="col-5 d-flex "> Listing Title </p> 
    <p className='col-4 d-flex justify-content-end '> <Button variant="light"> Edit   </Button></p>
      </div>

      <div className="photo row">
    <p className="col-5 d-flex "> tesst </p> 
    <p className='col-4 d-flex justify-content-end '> </p>
      </div>
  </div>

  <div className='form'>
    
  </div>





   

    </>
  
    );
  }