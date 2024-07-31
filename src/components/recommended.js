import img1 from "../assets/images/c1.jfif"
import img2 from "../assets/images/c3.jfif"
import img3 from "../assets/images/c2.jfif"
import img4 from "../assets/images/c4.jfif"

function Recommended(){
    return(
        <div class="recomended">
        <h1 class="recomended__title">Recommended for You</h1>
        <p>Pick the best fit</p>
        <div class="recomended__container">
            <div class="course-card">
                <img src={img1} alt="EMC" ></img>
                <h3>Full-Stack Web Development course 2024 with Error Makes Clever</h3>
                <p>Agnel John </p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p><strong>₹999 </strong> <del>5999</del></p>
                <p class="course-card__highlight">Best Seller</p>
            </div>
            <div class="course-card">
                <img src={img2} alt="JS" ></img>
                <h3>The Complete JavaScript course 2024</h3>
                <p>Johnas Schmedtmann</p>
                <p>3.6 ⭐⭐⭐</p>
                <p><strong>₹599 </strong><del>2199</del></p>
            </div>
            <div class="course-card">
                <img src={img3} alt="Web development Bootcamp"></img>
                <h3>The Complete Web Development Bootcamp</h3>
                <p>Colt Steele</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p><strong>₹799 </strong><del>4999</del></p>                
                <p class="course-card__highlight">Best Seller</p>
            </div>
            <div class="course-card">
                <img src={img4} alt="Android app development" ></img>
                <h3>The Complete Android App Development Master class</h3>
                <p>Denis Panjuta</p>
                <p>4.4 ⭐⭐⭐⭐</p>
                <p><strong>₹999 </strong><del>3099</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended