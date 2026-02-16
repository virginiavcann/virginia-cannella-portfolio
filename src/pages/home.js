export function renderHome() {
  return `
    <div class="home-container">
      <div class="hero-image-container">
        <img 
          src="images/hero.png" 
          alt="Portfolio showcase" 
          class="hero-image"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2224%22 fill=%22%233D41FA%22%3EAdd your image to /public/images/hero.png%3C/text%3E%3C/svg%3E'"
        />
      </div>
    </div>
  `
}