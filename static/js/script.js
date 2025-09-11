// ----- MOBILE MENU TOGGLE -----
const burgerMenu = document.getElementById('burger-menu');
const closeButton = document.getElementById('close-button');
const navSection = document.querySelector('.nav-section');

burgerMenu?.addEventListener('click', () => {
    navSection.hidden = false;
});

closeButton?.addEventListener('click', () => {
    navSection.hidden = true;
});

// ----- SEARCH BAR TOGGLE -----
const searchBtn = document.querySelector('.search-icon-btn');
const searchBar = document.querySelector('.header-search');

searchBtn?.addEventListener('click', () => {
    const currentDisplay = getComputedStyle(searchBar).display;
    searchBar.style.display = (currentDisplay === 'none') ? 'block' : 'none';
});

// ----- BACK TO TOP SMOOTH SCROLL -----
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ----- SERVICES POPUP -----
const services = [
    {
        img: '/static/images/services/consulting.png',  // Use full path or data-attribute
        heading: 'IT Consulting Services',
        popup_text: `<p>Our IT consulting services provide strategic guidance and technical expertise, including:<br>
                     <strong>Strategic IT Planning:</strong> Align IT strategies with business goals.<br>
                     <strong>Technology Assessment:</strong> Identify areas for improvement.<br>
                     <strong>Process Optimization:</strong> Enhance productivity and reduce costs.</p>`
    },
    {
        img: '/static/images/services/integration.png',
        heading: 'Systems Integration',
        popup_text: `<p>Our systems integration services include:<br>
                     <strong>Comprehensive Integration:</strong> Unify IT environments.<br>
                     <strong>Custom Solutions:</strong> Tailored integrations for your needs.<br>
                     <strong>API Management:</strong> Facilitate seamless communication between systems.</p>`
    },
    {
        img: '/static/images/services/professional-services.png',
        heading: 'Professional Services',
        popup_text: `<p>Our professional services offer:<br>
                     <strong>IT Resource Provisioning:</strong> Skilled developers and administrators.<br>
                     <strong>Custom Development:</strong> Tailored enterprise solutions.<br>
                     <strong>Infrastructure Support:</strong> Scalable and reliable IT infrastructure.</p>`
    },
    {
        img: '/static/images/services/service-management.png',
        heading: 'Service Management',
        popup_text: `<p>Our service management offerings include:<br>
                     <strong>ITSM:</strong> Align IT services with business needs.<br>
                     <strong>24/7 Monitoring:</strong> Minimize downtime.<br>
                     <strong>Incident Management:</strong> Quick resolution of issues.</p>`
    }
];

// Function to create popup
function createServicesPopup(service) {
    // Prevent multiple popups
    if (document.querySelector('.services-popup')) return;

    const popup = document.createElement('div');
    popup.className = 'services-popup';
    popup.innerHTML = `
        <div class="services-popup-content">
            <span class="close" aria-label="Close">&times;</span>
            <div class="services-popup-img">
                <img src="${service.img}" alt="${service.heading}">
                <h3>${service.heading}</h3>
            </div>
            <div class="row">
                <div class="col-xl-7">
                    ${service.popup_text}
                </div>
                <div class="col-xl-5">
                    <div class="services-form">
                        <form action="/" method="post" class="contact-form" aria-label="Contact form">
                            <p><label>Full Name</label><br />
                                <input type="text" name="your-name" placeholder="Juan Dela Cruz" required />
                            </p>
                            <p><label>Email</label><br />
                                <input type="email" name="your-email" placeholder="juandelacruz@company.com" required />
                            </p>
                            <p><label>Phone Number</label><br />
                                <input type="tel" name="phone-number" placeholder="09171234567" required />
                            </p>
                            <p><label>Message</label><br />
                                <textarea name="your-message" placeholder="Your Message" rows="7"></textarea>
                            </p>
                            <p><input type="submit" value="Submit" class="main-btn hover-transition" /></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    // Close events
    popup.querySelector('.close')?.addEventListener('click', () => popup.remove());
    popup.addEventListener('click', (e) => { if (e.target === popup) popup.remove(); });
}

// Event delegation for services
document.addEventListener('click', (e) => {
    const serviceItem = e.target.closest('.services-item');
    if (serviceItem) {
        const index = Array.from(document.querySelectorAll('.services-item')).indexOf(serviceItem);
        if (index !== -1) createServicesPopup(services[index]);
    }
});
