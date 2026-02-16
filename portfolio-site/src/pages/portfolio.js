export function renderPortfolio() {
  return `
    <div class="page-container">
      <div class="gallery">
        <a href="#/art" class="gallery-item portfolio-item" onclick="window.location.hash='#/art'; return false;">
          <div class="portfolio-item-label">Art</div>
          <img 
            src="images/art-preview.jpg" 
            alt="Art"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EArt%3C/text%3E%3C/svg%3E'"
          />
        </a>
        
        <a href="#/curation" class="gallery-item portfolio-item" onclick="window.location.hash='#/curation'; return false;">
          <div class="portfolio-item-label">Curation</div>
          <img 
            src="images/curation-preview.jpg" 
            alt="Curation"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3ECuration%3C/text%3E%3C/svg%3E'"
          />
        </a>
        
        <a href="#/writing" class="gallery-item portfolio-item" onclick="window.location.hash='#/writing'; return false;">
          <div class="portfolio-item-label">Writing</div>
          <img 
            src="images/writing-preview.jpg" 
            alt="Writing"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EWriting%3C/text%3E%3C/svg%3E'"
          />
        </a>
      </div>
    </div>
  `
}