(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(i){if(i.ep)return;i.ep=!0;const t=n(i);fetch(i.href,t)}})();function l(){return`
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
  `}function d(){return`
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
  `}function g(){return`
    <div class="page-container">
      <div class="gallery">
        <div class="gallery-item" onclick="openModal('images/fibers-1.png', 'I will never forget the day, 2023, quilt, 24x24in')">
          <img 
            src="images/fibers-1.png" 
            alt="I will never forget the day, 2023, quilt, 24x24""
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EFibers 1%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">I will never forget the day, 2023, quilt, 24x24"</div>
        </div>
        
        <div class="gallery-item" onclick="openModal('images/fibers-2.png', 'Me crying in court, 2022, hand-tufted yarn on cloth, 20x30in')">
          <img 
            src="images/fibers-2.png" 
            alt="Me crying in court, 2022, hand-tufted yarn on cloth, 20x30""
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EFibers 2%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">Me crying in court, 2022, hand-tufted yarn on cloth, 20x30"</div>
        </div>
        
         <div class="gallery-item" onclick="openModal('images/fibers-3.png', 'You can look and I will not hide, 2022, hand-tufted yarn on cloth, 20x30in')">
          <img 
            src="images/fibers-3.png" 
            alt="You can look and I will not hide, 2022, hand-tufted yarn on cloth, 20x30in"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3E2D Art 1%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">You can look and I will not hide, 2022, hand-tufted yarn on cloth, 20x30"</div>
        </div>
        
        <div class="gallery-item" onclick="openModal('images/fibers-4.png', 'What was the last thing you did that you weren't supposed to do?, 2023, hand-tufted yarn on cloth, 24x36in')">
          <img 
            src="images/fibers-4.png" 
            alt="What was the last thing you did that you weren't supposed to do?, 2023, hand-tufted yarn on cloth, 24x36in"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3E2D Art 2%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">What was the last thing you did that you weren't supposed to do?, 2023, hand-tufted yarn on cloth, 24x36"</div>
        </div>
        
        <div class="gallery-item" onclick="openModal('images/fibers-5.png', 'Young me in face paint, 2023, fabric collage, 24x48in')">
          <img 
            src="images/fibers-5.png" 
            alt="Young me in face paint, 2023, fabric collage, 24x48""
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EDigital 1%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">Young me in face paint, 2023, fabric collage, 24x48"</div>
        </div>
        
        <div class="gallery-item" onclick="openModal('images/fibers-6.png', 'The Blanket, 2023, quilt, 24x36in')">
          <img 
            src="images/fibers-6.png" 
            alt="The Blanket, 2023, quilt, 24x36""
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EDigital 2%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">The Blanket, 2023, quilt, 24x36"</div>
        </div>

        <div class="gallery-item" onclick="openModal('images/painting-1.jpg', 'I Can Do Anything I Put My Mind To, 2024, oil on canvas, 20x20in')">
          <img 
            src="images/painting-1.jpg" 
            alt="I Can Do Anything I Put My Mind To, 2024, oil on canvas, 20x20""
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EDigital 2%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">I Can Do Anything I Put My Mind To, 2024, oil on canvas, 20x20"</div>
        </div>

        <div class="gallery-item" onclick="openModal('images/fibers-7.png', 'Throat, hand-knit yarn on mannequin, 20x72in')">
          <img 
            src="images/fibers-7.png" 
            alt="Throat, hand-knit yarn on mannequin, 20x72""
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EDigital 2%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">Throat, hand-knit yarn on mannequin, 20x72"</div>
        </div>

        <div class="gallery-item" onclick="openModal('images/video-1.png', 'I will no longer be pleasing other people, 2022, video, 1 minute')">
          <img 
            src="images/video-1.png" 
            alt="I will no longer be pleasing other people, 2022, video, 1 minute"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23FAEFCE%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Helvetica, Arial, sans-serif%22 font-size=%2220%22 fill=%22%233D41FA%22%3EDigital 2%3C/text%3E%3C/svg%3E'"
          />
          <div class="gallery-item-title">I will no longer be pleasing other people, 2022, video, 1 minute</div>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div id="imageModal" class="modal" onclick="closeModal()">
      <span class="modal-close">&times;</span>
      <img class="modal-content" id="modalImage">
      <div class="modal-caption" id="modalCaption"></div>
    </div>
  `}function c(){return`
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
  `}function h(){return`
    <div class="page-container">
      <div class="writing-container">
        
        <!-- Article 1 -->
        <div class="writing-item">
          <h2 class="writing-title"><a href="https://aperture.org/curriculum/aperture-on-sight/" target="_blank" rel="noopener noreferrer">Aperture On Sight</a></h2>
          <p class="writing-subheading">October 2025</p>
        </div>

        <!-- Article 2 -->
        <div class="writing-item">
          <h2 class="writing-title"><a href="https://artjournal.collegeart.org/?p=18934" target="_blank" rel="noopener noreferrer">A Re-evaluation of Impressions: Shah Garg Foundation's <em>Making Their Mark</em></a></h2>
          <p class="writing-subheading">June 2024</p>
        </div>

      </div>
    </div>
  `}function m(){return`
    <div class="page-container">
      <div class="cv-content">
        <h2><strong>SOLO EXHIBITIONS</strong></h2>
        <p><strong>2023</strong><br>
        <i>To Hold and To Hold Often</i>, Boston, MA, Piano Craft Gallery</p>

        <h2><strong>GROUP EXHIBITIONS</strong></h2>
        <p><strong>2024</strong><br>
        <i>My Need for Tender Love and Care</i>, New York, NY, All Street Gallery<br>
        <i>At Home</i>, Brooklyn, NY, (dep)Art House<br>
        <i>The Salon Show</i>, Brooklyn, NY, Greenpoint Gallery</p>

        <p><strong>2023</strong><br>
        <i>Deliberate Impressions: Art Education Capstone Projects</i>, Boston, MA, MassArt Arnheim Gallery<br>
        <i>Normal Now</i>, Boston, MA, MassArt Arnheim Gallery<br>
        150th MassArt Auction, Boston, MA, MassArt Design and Media Center<br>
        <i>Fresh Faces</i>, Boston, MA, Abigail Ogilvy Gallery<br>
        <i>Bittersweet</i>, Cambridge, MA, Gallery 263<br>
        MassArt All School Show Award Winners, Boston, MA, MassArt Thompson Gallery<br>
        MassArt Art Education All School Show, Boston, MA, MassArt Arnheim Gallery<br>
        <i>Invisible Truths</i>, Boston, MA, MassArt Student Life Gallery<br>
        <i>ALL STAFF MEETING</i>, Brookline, MA, Annex Gallery at the Brookline Arts Center</p>

        <p><strong>2022</strong><br>
        MassArt Art Education All School Show, Boston, MA, MassArt Arnheim Gallery</p>

        <h2><strong>CURATION</strong></h2>
        <p><strong>2023</strong><br>
        <i>To Hold and To Hold Often</i>, Boston, MA, Piano Craft Gallery<br>
        <i>Reflect: Annual Residents and Directors Group Show</i>, Boston, MA, Piano Craft Gallery<br>
        <i>HARMONY: Art and Music at the Piano Factory</i>, Boston, MA, Piano Craft Gallery<br>
        <i>Those Nasty Kidz</i>, Boston, MA, MassArt Arnheim Gallery<br>
        <i>ALL STAFF MEETING</i>, Brookline, MA, Annex Gallery at the Brookline Arts Center</p>

        <p><strong>2022</strong><br>
        MassArt Art Education All School Show Boston, MA, MassArt Arnheim Gallery</p>

        <h2><strong>PUBLISHED WRITING</strong></h2>
        <p>Aperture On Sight, Aperture, October 2025</p>
        <p>"A Re-evaluation of Our Impressions: Shah Garg Foundation's <i>Making Their Mark</i>," College Art Association, June 2024<br>

        <h2><strong>COMMUNITY TEACHING</strong></h2>
        <p>Talking Art: Family Conversations Studio Facilitator<br>
        Neue Galerie New York, New York, NY, Feb. 2024 - Feb. 2025</p>

        <p>"Piano Chat Series: Artistry Unplugged" Organizer, Presenter, Interviewer<br>
        Piano Craft Gallery, Boston, MA, Sep. 2023 - Dec. 2023</p>

        <p>Sculpture and Fibers Lead Teacher<br>
        Saturday Studios - MassArt Youth Programs, Boston, MA, Mar. 2023 - May 2023</p>

        <p>Assistant Teacher<br>
        Brookline Arts Center, Brookline, MA, Sep. 2022 - Aug. 2023</p>

        <p>Patterns of Our Present Studio Facilitator<br>
        MassArt Art Museum, Boston, MA, Feb. 2022</p>

        <h2><strong>AWARDS</strong></h2>
        <p><strong>2023</strong> MassArt Art Education Contemporary Artist Award<br>
        <strong>2023</strong> MassArt Art Education All School Show Best in Show Award<br>
        <strong>2021</strong> State University Internship Incentive Award</p>
      </div>
    </div>
  `}function v(){return`
    <div class="page-container">
      <div class="bio-content">
        <p>
          Virginia Cannella is a fibers artist living in Brooklyn, New York. She received a BFA in Art Education from Massachusetts College of Art and Design.
          Her practice as an educator is centered around socially informed pedagogy and culturally responsive public programming.
          Her current creative process centers heavily on examining femininity, aiming to rehearse new ideas for survival through corroborating the digital and the physical as a means of collective healing expressed through weaving, knitting, sewing, and quilting.
        </p>
        <p>
          Engaged with providing access to artistic experiences, she is currently the education coordinator at Brooklyn Metal Works, a jewelry and metalsmithing educational lab and exhibition space.
        </p>
      </div>
    </div>
  `}function f(){return`
    <div class="page-container">
      <div class="contact-content-centered">
        <p>
          <a href="mailto:virginiavioletcannella@gmail.com">virginiavioletcannella@gmail.com</a>
        </p>
        
        <p>
          <a href="https://www.instagram.com/virginiavcannella" target="_blank" rel="noopener noreferrer">@virginiavcannella</a>
        </p>
      </div>
    </div>
  `}const w={"/":l,"/portfolio":d,"/art":g,"/curation":c,"/writing":h,"/cv":m,"/bio":v,"/contact":f};window.openModal=function(e,a){const n=document.getElementById("imageModal"),s=document.getElementById("modalImage"),i=document.getElementById("modalCaption");n&&s&&i&&(n.style.display="flex",s.src=e,i.textContent=a,document.body.style.overflow="hidden")};window.closeModal=function(){const e=document.getElementById("imageModal");e&&(e.style.display="none",document.body.style.overflow="auto")};function p(){const e=window.location.hash.slice(1)||"/";return`
    <header class="site-header">
      <h1 class="name"><a href="#/" onclick="window.location.hash='#/'; return false;">Virginia Cannella</a></h1>
      
      <nav class="navigation">
        <ul class="nav-links">
          <li class="nav-link">
            <a href="#/portfolio" class="${e==="/portfolio"?"active":""}">portfolio</a>
          </li>
          
          <li class="nav-link">
            <a href="#/cv" class="${e==="/cv"?"active":""}">cv</a>
          </li>
          
          <li class="nav-link">
            <a href="#/bio" class="${e==="/bio"?"active":""}">bio</a>
          </li>
          
          <li class="nav-link">
            <a href="#/contact" class="${e==="/contact"?"active":""}">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  `}function r(){const e=window.location.hash.slice(1)||"/",a=w[e]||l,n=document.getElementById("app");n.innerHTML=`
    ${p()}
    <div class="page-content-wrapper">
      ${a()}
    </div>
  `,A()}function A(){document.addEventListener("keydown",function(e){e.key==="Escape"&&window.closeModal()})}window.addEventListener("hashchange",r);window.addEventListener("load",r);window.navigate=e=>{window.location.hash=e};
