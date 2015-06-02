import PropertyList from './components/PropertyList';
import AddPropertyBtn from './components/AddPropertyBtn';
import PropertyModal from './components/PropertyModal';

let PropertyListElement = document.querySelector('#properties'); const propertyList = new PropertyList(PropertyListElement);

let AddPropertyBtnElement = document.querySelector('#add-property-btn');
const addPropertyBtn = new AddPropertyBtn(AddPropertyBtnElement);

let PropertyModalElement = document.querySelector('#property-modal');
const propertyModal = new PropertyModal(PropertyModalElement);
