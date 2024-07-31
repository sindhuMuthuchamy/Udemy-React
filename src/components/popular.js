import one from "../assets/images/web3.jfif"
import two from "../assets/images/p1.jfif"
import three from "../assets/images/nodejs.jfif"
import four from "../assets/images/mongodb.jfif"
import five from "../assets/images/web2.jfif"
import six from "../assets/images/web2.jfif"
import seven from "../assets/images/js1.jfif"
import eight from "../assets/images/js2.png"

function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pic the best fit</p>

        <div class="popular__container">
            <div class="course-card">
                <img src={one} alt="Web development Bootcamp" ></img>
                <h3>The Complete 2024 Web Development Bootcamp</h3>
                <p>Dr. Angeia Yu, Developer & Lead Instructor</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p><strong> ₹799 </strong><del>4999</del></p> 
                <p class="course-card__highlight">Best Seller</p>
            </div>
            <div class="course-card">
                <img src={two} alt="EMC" ></img>
                <h3>Build Responsive Real-World Website with HTML and CSS</h3>
                <p>Johnas Schmedtmann</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p><strong>₹599 </strong><del>5999</del></p>
                <p class="course-card__highlight">Best Seller</p>
            </div>
            <div class="course-card">
                <img src={three} alt="JS" ></img>
                <h3>Learn and Understand NodeJS</h3>
                <p>Anthony Alicaa</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p><strong>₹599</strong> <del>2199</del></p>
            </div>
            <div class="course-card">
                <img src={four} alt="Web development Bootcamp" ></img>
                <h3>MongoDB-The Complete Developer's Guide 2024</h3>
                <p>Maximilian Schwarzmuller</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p><strong>₹799 </strong> <del>4999</del></p>                
                <p class="course-card__highlight">Best Seller</p>
            </div>
            <div class="course-card">
                <img src={five} alt="Android app development" ></img>
                <h3>Ultimate Web Designer & Web Developer Course</h3>
                <p>Brad Hussey</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p><strong>₹499</strong> <del>3099</del></p>
            </div>
            <div class="course-card">
                <img src={six} alt="Web development Bootcamp" ></img>
                <h3>The Complete Web Development Course</h3>
                <p>Rob Percival</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p><strong>₹699</strong><del>4999</del></p>                
            </div>
            <div class="course-card">
                <img src={seven} alt="Web development Bootcamp" ></img>
                <h3>JavaScript - Basics for Beginner Level</h3>
                <p>Mosh Hamedani</p>
                <p>4.6 ⭐⭐⭐⭐</p>
                <p><strong>₹499</strong><del>4999</del></p>                
                <p class="course-card__highlight">Best Seller</p>
            </div>
            <div class="course-card">
                <img src={eight} alt="Web development Bootcamp" ></img>
                <h3>JavaScript: Understanding the Weird part</h3>
                <p>Anthony Alicaa</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p><strong>₹799 </strong><del>4999</del></p>                
            </div>
        </div>
        </div>
    )
}
export default Popular