import './ProductList.scss';

const ProductColors = () =>{
    return(
        <div className="pd">
        <h3 className="pd-title">COLOR</h3>
        <div className="color">
                        <label className="color-option" >
                        <input name="color" type="radio" className="color-radio" />
                        <span className="fusch"></span>
                      </label>
                      
                      <label className="color-option">
                        <input name="color" type="radio" className="color-radio" />
                        <span className="red"></span>
                      </label>
                      
                      <label className="color-option" >
                        <input name="color" type="radio" className="color-radio" />
                        <span className="black"></span> 
                      </label> 

                      <label className="color-option" > 
                        <input name="color" type="radio" className="color-radio" />
                        <span className="white"></span> 
                      </label> 
                      <label className="color-option"> 
                        <input name="color" type="radio" className="color-radio" />
                        <span className="peach"></span>
                      </label>
                      <label className="color-option"> 
                        <input name="color" type="radio" className="color-radio" />
                        <span className="yellow"></span>
                      </label>
        </div>
        </div>
    )
}
export default ProductColors;