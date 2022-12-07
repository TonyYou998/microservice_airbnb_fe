import HeaderProperty from "./Components/HeaderProperty";
import PhotoProperty from "./Components/PhotoProperty";
import StackedExample from "./Components/NavProperty";
import LisingProperty from "./Components/ListingProperty";

export default function DetailPropertyPage() {
    return (
        <div className="container">
            <HeaderProperty></HeaderProperty>
            <div className="row">
                <div className=" col-2 ">
                    <StackedExample></StackedExample>
                </div>
                <div className=" col-1 ">      </div>
                <div className="col-9 ">
                    <PhotoProperty></PhotoProperty>
                    <LisingProperty></LisingProperty>
                </div>
            </div>
        </div>

    );
}