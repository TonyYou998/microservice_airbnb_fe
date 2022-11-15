
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Search() {
    return (
        <div  className="input_search_host">
            
            <InputGroup size="sm"  className="search_host mb-3">

        <Form.Control aria-label="Text input with checkbox" placeholder="Tìm kiếm nhà phòng cho thuê" />
      </InputGroup>
            
        </div>
  
    );
  }