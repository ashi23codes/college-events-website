// Sample Events Data (Yahan aap apne college ke real events add kar sakti ho)
const events = [
    {
        title: "Hackathon 2026",
        category: "technical",
        date: "Nov 15, 2026",
        time: "10:00 - 6:00pm",
        venue: "Ab-12 5046",
        desc: "24-hour coding challenge to solve real-world problems."
    },
    {
        title: "Arduino * hackFront India",
        category: "technical",
        date: "Nov 20, 2026",
        time: "11:00 - 6:00pm",
        venue: "Ab-12 3046",
        desc: "Arduino hands-on workshop for beginners and enthusiasts."
    },
    {
        title: "AI & Data Science Workshop",
        category: "Workshop",
        date: "Nov 14, 2026",
        time: "11:00 AM",
        venue: "AB-10, CSED Block",
        desc: "Hands-on session on building Machine Learning models."
    },
    {
        title: "Web Dev BootCamp",
        category: "technical",
        date: "Dec 10, 2026",
        time: "02:00 - 05:00pm",
        venue: "Main Auditorium",
        desc: "Learn modern frontend development from industry experts."
    }
];

const eventsGrid = document.getElementById("eventsGrid");

// Function to render events
function displayEvents(eventList) {
    eventsGrid.innerHTML = "";
    
    eventList.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");

        card.innerHTML = `
            <span class="category-tag tag-${event.category}">${event.category}</span>
            <h3>${event.title}</h3>
            <p><strong>📅 Date:</strong> ${event.date}</p>
            <p><strong>⏰ Time:</strong> ${event.time}</p>
            <p><strong>📍 Venue:</strong> ${event.venue}</p>
            <p style="margin-top: 8px;">${event.desc}</p>
            <a href="#" class="register-btn">Register Now</a>
        `;

        eventsGrid.appendChild(card);
    });
}

// Function to filter events by category
function filterEvents(category) {
    // Update active class on buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayEvents(events);
    } else {
        const filtered = events.filter(e => e.category === category);
        displayEvents(filtered);
    }
}

// Initial load
displayEvents(events);