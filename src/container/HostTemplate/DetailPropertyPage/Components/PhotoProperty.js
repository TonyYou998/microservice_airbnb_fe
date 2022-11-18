import Button from 'react-bootstrap/Button';



export default function PhotoProperty() {
    return (
      <>
         <div className="row">

      <strong className="col-4 d-flex "> Photos </strong> 
       <p className='col-5 d-flex justify-content-end '> <Button variant="light"> Edit   </Button></p>
        </div>


          <div className="photo row">

          <h4 className="col-6 d-flex ">  <img width={210} height={140} src='https://th.bing.com/th/id/R.9e6636a3531d504311061164455c64c8?rik=oKC6LlRm2wn8vw&pid=ImgRaw&r=0'></img> </h4> 
          
            </div>

         

      </>

  

  
    );
  }