document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log("Fetched Data:", data);


            const updateSection = (id, category) => {
                const sectionData = data.find(item => item.category === category);
                if (sectionData) {
                    const section = document.querySelector(`#${id}`);
                    section.querySelector("img").src = sectionData.icon;
                    section.querySelector(".stat-text p").innerText = sectionData.category;

                    section.querySelector(".stat-numbers").innerHTML = `
                    <p> 
                        <span class="dark-text">${sectionData.score}</span>
                        <span class="ligh-text">/100</span>
                    </p>
                `;
                
                }
            };

    
            updateSection("reaction", "Reaction");
            updateSection("Memory", "Memory");
            updateSection("Verbal", "Verbal");
            updateSection("Visual", "Visual");
        })
    
});
