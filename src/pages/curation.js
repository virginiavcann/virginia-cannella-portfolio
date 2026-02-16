export function renderCuration() {
  return `
    <div class="page-container">
      <div class="curation-container">
        
        <!-- Show 1 -->
        <div class="show-item">
          <h2 class="show-title">To Hold and to Hold Often</h2>
          <p class="show-subheading">Piano Craft Gallery, December 2023</p>
          <div class="show-images">
            <div class="show-image" onclick="openModal('images/to-hold-1.jpg', 'To Hold and to Hold Often')">
              <img 
                src="images/to-hold-1.jpg" 
                alt="To Hold and to Hold Often - Image 1"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 1%3C/text%3E%3C/svg%3E'"
              />
            </div>
            <div class="show-image" onclick="openModal('images/to-hold-2.jpg', 'To Hold and to Hold Often')">
              <img 
                src="images/to-hold-2.jpg" 
                alt="To Hold and to Hold Often - Image 2"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 2%3C/text%3E%3C/svg%3E'"
              />
            </div>
          </div>
        </div>

        <!-- Show 2 -->
        <div class="show-item">
          <h2 class="show-title">Those Nasty Kidz</h2>
          <p class="show-subheading">Arnheim Gallery, April 2023</p>
          <div class="show-images">
            <div class="show-image" onclick="openModal('images/nasty-kidz-1.jpg', 'Those Nasty Kidz')">
              <img 
                src="images/nasty-kidz-1.jpg" 
                alt="Those Nasty Kidz - Image 1"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 1%3C/text%3E%3C/svg%3E'"
              />
            </div>
            <div class="show-image" onclick="openModal('images/nasty-kidz-2.jpg', 'Those Nasty Kidz')">
              <img 
                src="images/nasty-kidz-2.jpg" 
                alt="Those Nasty Kidz - Image 2"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 2%3C/text%3E%3C/svg%3E'"
              />
            </div>
          </div>
        </div>

        <!-- Show 3 -->
        <div class="show-item">
          <h2 class="show-title">HARMONY: Art and Music at the Piano Factory</h2>
          <p class="show-subheading">Piano Craft Gallery, October 2023</p>
          <div class="show-images">
            <div class="show-image" onclick="openModal('images/harmony-1.jpg', 'HARMONY: Art and Music at the Piano Factory')">
              <img 
                src="images/harmony-1.jpg" 
                alt="HARMONY: Art and Music at the Piano Factory - Image 1"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 1%3C/text%3E%3C/svg%3E'"
              />
            </div>
            <div class="show-image" onclick="openModal('images/harmony-2.jpg', 'HARMONY: Art and Music at the Piano Factory')">
              <img 
                src="images/harmony-2.jpg" 
                alt="HARMONY: Art and Music at the Piano Factory - Image 2"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 2%3C/text%3E%3C/svg%3E'"
              />
            </div>
          </div>
        </div>

        <!-- Show 4 -->
        <div class="show-item">
          <h2 class="show-title">ALL STAFF MEETING</h2>
          <p class="show-subheading">Brookline Arts Center, February 2023</p>
          <div class="show-images">
            <div class="show-image" onclick="openModal('images/all-staff-meeting-1.jpg', 'ALL STAFF MEETING')">
              <img 
                src="images/all-staff-meeting-1.jpg" 
                alt="ALL STAFF MEETING - Image 1"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 1%3C/text%3E%3C/svg%3E'"
              />
            </div>
            <div class="show-image" onclick="openModal('images/all-staff-meeting-2.jpg', 'ALL STAFF MEETING')">
              <img 
                src="images/all-staff-meeting-2.jpg" 
                alt="ALL STAFF MEETING - Image 2"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EImage 2%3C/text%3E%3C/svg%3E'"
              />
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Image Modal -->
    <div id="imageModal" class="modal" onclick="closeModal()">
      <span class="modal-close">&times;</span>
      <img class="modal-content" id="modalImage">
      <div class="modal-caption" id="modalCaption"></div>
    </div>
  `
}