


export default function PictureDtPropertyPage({data}) {
    const renderImg=(data)=>{
        // if(true){
            const {Content}=data;
            console.log(Content);
            // Content.images
            return (
            <>
            <a rel="gallery1" data-fancybox="images" href={Content.images}> 
              <img src={Content.images} class="img_property img-fluid img-thumbnail" alt="..."></img>
            </a>
            </>
            )
          
      //  }
      
    }
    return ( 
        <>
         <picture className="picture_home">
            {/* <source srcset="https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=1200" type="image/svg+xml"></source> */}
            {renderImg(data)}
            
        </picture>
        </>
  
    );
  }