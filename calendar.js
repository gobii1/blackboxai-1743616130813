document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Nama bulan dalam Bahasa Indonesia
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    function renderCalendar() {
        // Clear calendar
        calendar.innerHTML = '';

        // Update judul bulan
        document.getElementById('month-year').textContent = 
            `${monthNames[currentMonth]} ${currentYear}`;

        // Add day names
        const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        dayNames.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'text-center font-medium text-gray-500 py-2';
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });

        // Get first day of month
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        
        // Get days in month
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Add empty cells for days before first day
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendar.appendChild(emptyCell);
        }

        // Add days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'text-center py-2 rounded-full calendar-day cursor-pointer hover:bg-blue-50';
            dayElement.textContent = day;
            
            // Highlight current day
            if (day === currentDate.getDate() && 
                currentMonth === currentDate.getMonth() && 
                currentYear === currentDate.getFullYear()) {
                dayElement.className += ' bg-blue-100 text-blue-600 font-medium';
            }
            
            // Mark days with schedule
            if ([2, 5, 10, 15, 20, 25].includes(day)) {
                dayElement.className += ' relative';
                dayElement.innerHTML += `<span class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"></span>`;
            }
            
            calendar.appendChild(dayElement);
        }
    }

    // Navigation
    prevBtn.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    // Initial render
    renderCalendar();
});