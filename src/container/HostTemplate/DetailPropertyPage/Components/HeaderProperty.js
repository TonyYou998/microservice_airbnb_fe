import Button from 'react-bootstrap/Button';



export default function HeaderProperty() {
    return (
      <div className="row">

        <h4 className="col-3"> My Header </h4> 
        
        <h4 className="col-9 d-flex justify-content-end">   <Button variant="outline-dark"> <i class="gg-abstract"></i> Hoàn Tất </Button> </h4> 
      </div>

  
    );
  }