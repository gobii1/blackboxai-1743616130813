// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const navLinks = document.querySelector('nav.md\\:flex');
    
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-16');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('right-0');
            navLinks.classList.toggle('bg-white');
            navLinks.classList.toggle('p-4');
            navLinks.classList.toggle('shadow-md');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonial slider functionality
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Director",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            quote: "Siparti has saved me hours every week. The smart scheduling feature is a game-changer for our distributed team."
        },
        {
            name: "Michael Chen",
            role: "CTO",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            quote: "The AI scheduling assistant eliminated all the back-and-forth emails we used to have for meeting coordination."
        },
        {
            name: "Emma Williams",
            role: "Product Manager",
            photo: "https://randomuser.me/api/portraits/women/63.jpg",
            quote: "Our team's productivity increased by 30% after implementing Siparti's scheduling system."
        }
    ];

    let currentTestimonial = 0;
    const testimonialContainer = document.querySelector('.bg-white.p-8');

    function showTestimonial(index) {
        currentTestimonial = index;
        const t = testimonials[index];
        testimonialContainer.innerHTML = `
            <div class="flex items-center mb-6">
                <img src="${t.photo}" 
                     alt="User testimonial" 
                     class="w-16 h-16 rounded-full mr-4">
                <div>
                    <h4 class="font-semibold">${t.name}</h4>
                    <p class="text-gray-600">${t.role}</p>
                </div>
            </div>
            <p class="text-gray-700 italic">"${t.quote}"</p>
            <div class="flex justify-center mt-6 space-x-2">
                ${testimonials.map((_, i) => 
                    `<button onclick="showTestimonial(${i})" 
                            class="w-3 h-3 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}"></button>`
                ).join('')}
            </div>
        `;
    }

    // Initialize first testimonial
    if (testimonialContainer) {
        showTestimonial(0);
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    console.log('Script loaded successfully');
});