


export default function PictureDtPropertyPage({data}) {
    const renderImg=(data)=>{
        if(data){
            const {Content}=data;
            return <img src="https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=1200" class="img_property img-fluid img-thumbnail" alt="..."></img>
        }
      
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