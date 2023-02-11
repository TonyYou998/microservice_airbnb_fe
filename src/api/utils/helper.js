export default function getCookie(name) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") == 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  }

  export const jwtDecoder=(token)=>{
    if(token===null)
    return ;
   const originalToken=token.split(" ");

      try {
        // Split token into three parts: header, payload, and signature
        const parts = originalToken[1].split(".");
    
        // const header = atob(parts[0]);
        // Get the payload as a JSON string
        let header=atob(parts[0]);
        let payload = atob(parts[1]);
       
        // Convert the JSON string to an object
        payload= JSON.parse(payload);
        header=JSON.parse(header);
        return {header,payload};
      } catch (error) {
        console.error(`Error decoding JWT: ${error}`);
      }
    
    
  }
  export const convertData=(dateString)=>{
   
let date = new Date(dateString);

let month = date.getMonth() + 1; // months are 0-based, so add 1
let day = date.getDate();
let year = date.getFullYear();

let formattedDate = month + "/" + day + "/" + year;
    return formattedDate;

  }
  