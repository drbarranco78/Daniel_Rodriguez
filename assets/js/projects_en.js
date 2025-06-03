const projects = {
  timelink: {
    title: "TimeLink",
    category: "Web Application",
    client: "Newtron Informática, SL",
    startDate: "01/15/2025",
    endDate: "03/30/2025",
    url: "https://timelink-bootstrap.onrender.com",
    description: "Employee time tracking web application",
    details: `Application developed during my internship at Newtron Informática in 2025 for managing employee time tracking in companies. 
              It allows users to register the start and end of the workday, as well as breaks, and generate exportable reports in various formats. 
              It includes an email system for invitations and join requests, plus Stripe integration for managing subscriptions and payments as a SaaS solution. 
              The backend is developed with PHP and Laravel, and the frontend uses Bootstrap, HTML, CSS, and JavaScript with jQuery. 
              The database is MySQL and hosted on Alwaysdata, while the app is deployed on Render.com. 
              It includes a test button that creates a fictitious company with several employees, allowing exploration of all features without registration.`,
    images: [
      "assets/img/projects/Timelink1.PNG",
      "assets/img/projects/Timelink2.PNG",
      "assets/img/projects/Timelink3.PNG",
      "assets/img/projects/Timelink4.PNG",
      "assets/img/projects/Timelink5.PNG",
      "assets/img/projects/Timelink6.PNG",
      "assets/img/projects/Timelink7.PNG",
      "assets/img/projects/Timelink8.PNG",
      "assets/img/projects/Timelink9.PNG",
      "assets/img/projects/Timelink10.PNG",
    ]
  },

  gotopadel: {
    title: "GoToPádel",
    category: "Android Application",
    client: "Final Project of the Multiplatform Application Development Degree",
    startDate: "09/15/2023",
    endDate: "04/20/2024",
    // url: "https://github.com/usuario/gotopadel",
    description: "Android app for organizing padel matches",
    details: `Mobile app developed as the Final Project of the Multiplatform Application Development Degree (DAM) during the 2023/2024 academic year, with a final grade of 10. 
              GoToPádel allows users to create and manage padel matches, register, receive local notifications, and manage users through an authentication system. 
              Developed using Android Studio, Java, and SQLite for local storage.`,
    images: [
      "assets/img/projects/gotopadel1.PNG",
      "assets/img/projects/gotopadel2.PNG",
      "assets/img/projects/gotopadel3.PNG",
      "assets/img/projects/gotopadel4.PNG",
      "assets/img/projects/gotopadel5.PNG",
      "assets/img/projects/gotopadel6.PNG",
      "assets/img/projects/gotopadel7.PNG",
      "assets/img/projects/gotopadel8.PNG",
      "assets/img/projects/gotopadel9.PNG",
      "assets/img/projects/gotopadel10.PNG",
      "assets/img/projects/gotopadel11.PNG",
      "assets/img/projects/gotopadel12.PNG"
    ]
  },

  // diwtarea6: {
  //   title: "DIW Task 6",
  //   category: "Web Application",
  //   client: "Class Assignment",
  //   startDate: "05/03/2024",
  //   endDate: "05/09/2024",
  //   url: "https://drbarranco78.github.io/Tarea6DIW2024/",
  //   description: "Interactive web application",
  //   details: `A simple interactive web application project that allows users to interact with different elements on the page, manipulating the DOM dynamically with jQuery.`,
  //   images: [
  //     "assets/img/projects/Tarea6DIW1.PNG",
  //     "assets/img/projects/Tarea6DIW2.PNG",
  //   ]
  // },

  weather: {
    title: "Weather App",
    category: "Web Application",
    client: "Class Assignment",
    startDate: "04/30/2024",
    endDate: "05/02/2024",
    url: "https://drbarranco78.github.io/DWEC6_Weather/",
    description: "Weather forecast web application",
    details: `A class project of a weather forecast web app that uses the OpenStreetMap and VisualCrossing APIs to obtain real-time weather data. Users can search by city and view the weather forecast.`,
    images: [
      "assets/img/projects/dwectarea6_1.PNG",
      "assets/img/projects/dwectarea6_2.PNG",
    ]
  },

  music: {
    title: "Music Box",
    category: "Web Application",
    client: "Class Assignment",
    startDate: "04/19/2024",
    endDate: "04/23/2024",
    url: "https://drbarranco78.github.io/DWEC5_Music/",
    description: "Class assignment on DOM manipulation and sound",
    details: `A web application that allows users to interact with different elements on the page by dynamically manipulating the DOM using jQuery. Includes a music player and sound effects.`,
    images: [
      "assets/img/projects/dwectarea5_1.PNG",
    ]
  },

  super: {
    title: "Supermarket",
    category: "Android Application",
    client: "Class Assignment",
    startDate: "12/07/2022",
    endDate: "12/17/2022",
    // url: "https://drbarranco78.github.io/DWEC5_Music/",
    description: "Mobile app for supermarket stock management",
    details: `A simple mobile application project that allows users to manage supermarket stock by adding, deleting, and updating products using CRUD operations on a SQLite database. Includes search and filter features.`,
    images: [
      "assets/img/projects/super1.PNG",
      "assets/img/projects/super2.PNG",
      "assets/img/projects/super3.PNG",
      "assets/img/projects/super4.PNG",
      "assets/img/projects/super5.PNG",
    ]
  },

  burguer: {
    title: "Burger Shop",
    category: "Android Application",
    client: "Class Assignment",
    startDate: "10/14/2022",
    endDate: "10/27/2022",
    // url: "https://drbarranco78.github.io/DWEC5_Music/",
    description: "Mobile app for ordering at a burger restaurant",
    details: `An academic mobile app project that allows users to place orders at a burger restaurant by adding, deleting, and updating products.`,
    images: [
      "assets/img/projects/burguer1.PNG",
      "assets/img/projects/burguer2.PNG",
      "assets/img/projects/burguer3.PNG",
      "assets/img/projects/burguer4.PNG",
      "assets/img/projects/burguer5.PNG",
      "assets/img/projects/burguer6.PNG"
    ]
  },
  padelweb: {
    title: "GoToPadel web",
    category: "Web Application",
    client: "Final Project of the Advanced Web Application Development Cycle",
    startDate: "09/15/2024",
    endDate: "03/10/2025",
    // url: "https://drbarranco78.github.io/DWEC5_Music/",
    description: "Web application for managing padel court reservations",
    details: `Application developed as the Final Project of the Web Application Development Cycle (DAW), graded with a 10.
            Allows users to register, log in, create and join padel matches, cancel participation, and receive notifications.
            Administrators can archive or cancel matches, manage users, and view relevant information.
            Integrates external APIs to show padel-related news and available courts by city, using a JSON file of Spanish cities to filter results.
            The backend is developed with Spring Boot, using Hibernate and JPA for data access, and exposes a REST API.
            The frontend is implemented with HTML5, CSS3, JavaScript, and jQuery.`,
    images: [
      "assets/img/projects/padelweb1.PNG",
      "assets/img/projects/padelweb2.PNG",
      "assets/img/projects/padelweb3.PNG",
      "assets/img/projects/padelweb4.PNG",
      "assets/img/projects/padelweb5.PNG",
      "assets/img/projects/padelweb6.PNG",
      "assets/img/projects/padelweb7.PNG",
      "assets/img/projects/padelweb8.PNG",
      "assets/img/projects/padelweb9.PNG",
      "assets/img/projects/padelweb10.PNG",
      "assets/img/projects/padelweb11.PNG",
      "assets/img/projects/padelweb12.PNG",
    ]
  },

  maps: {
    title: "Map Weather",
    category: "Mobile Application",
    client: "Class Assignment",
    startDate: "04/19/2023",
    endDate: "04/21/2023",
    // url: "https://drbarranco78.github.io/DWEC5_Music/",
    description: "Mobile application for weather consultation based on location",
    details: `Class project consisting of a mobile application that allows users to check the weather based on their location,
  using the Google Maps API and the device's sensors.`,
    images: [
      "assets/img/projects/pmdm6.PNG",
    ]
  },


};
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projects[projectId];

if (project) {
  // Fill general info
  document.querySelector(".portfolio-info h3").textContent = `Project: ${project.title}`;

  let infoHTML = `
    <li><strong>Category</strong>: ${project.category}</li>
    <li><strong>Client</strong>: ${project.client}</li>
    <li><strong>Start Date</strong>: ${project.startDate}</li>
    <li><strong>End Date</strong>: ${project.endDate}</li>
  `;

  if (project.url) {
    infoHTML += `
      <li><strong>URL</strong>: <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.url}</a></li>
    `;
  }

  document.querySelector(".portfolio-info ul").innerHTML = infoHTML;
  document.querySelector(".portfolio-description h2").textContent = project.description;
  document.querySelector(".portfolio-description p").textContent = project.details;



  // Rellenar imágenes del slider
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const extraStyle = (projectId === "gotopadel" || projectId === "super" || projectId === "burguer" || projectId === "maps") ? 'style="width: 300px; max-width: 100%; margin-left:32%"' : "";

  swiperWrapper.innerHTML = project.images.map(src => `
      <div class="swiper-slide">
        <img src="${src}" alt="" ${extraStyle}>
      </div>
    `).join('');
} else {
  // document.querySelector("#portfolio-details").innerHTML = "<p>Proyecto no encontrado.</p>";
}
