import saleimg from "../assets/images/saleimgoptnl.jpg"


function Sale(){
    return(
        <div class="sale-img">
        <img src={saleimg} alt="Image"></img>
        <div class="sale-img__offer">
            <h2>Udemy Flash Sale ! 24 hours to save</h2>
            <p>Get the top courses for 499/- only. <br/>Just one day to save but lifetime to learn.</p>
        </div>
    </div>
    )
}
export default Sale