import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){
function saveProduct(product){
    console.log("i am isnide new pproduct");
    console.log(product);

    //calling parent function
    props.printProduct(product);

}

    return(
        <div className='new-product'>
        {/* pass props function to ProductForm */}
            <ProductForm onSaveProduct = {saveProduct}/>
        </div>
    )

    
}

export default NewProduct;