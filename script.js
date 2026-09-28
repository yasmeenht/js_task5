fetch("menu.json")
    .then(response => response.json())
    .then(data =>{
        let dic = {};

            data.forEach(item => {
                let card = document.createElement("div");
                card.innerHTML += 
                `
                <p>${item.mealName}</p>
                <div class="features">
                    <div>${item.price}</div>
                    <div>${item.availability}</div>
                </div>
                `

                items.appendChild(card);

                dic[item.mealName] = item.price;
            });
            localStorage.setItem("menu", JSON.stringify(dic));

    })

let items = document.querySelector(".items");