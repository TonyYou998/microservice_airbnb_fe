
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Search() {
  return (
    <div className="input_search_host">

      <InputGroup size="sm" className="search_host mb-3 px-2">
      
        <div >
        <i class="fab fa-sistrix"></i>
        </div>
       
        <Form.Control aria-label="Text input with checkbox" placeholder="Find houses/rooms" />
      </InputGroup>

    </div>

  );
}