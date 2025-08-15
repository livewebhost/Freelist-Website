const products = [
    { name: "Buy & Sell", link: "facebook-buy-and-sell-groups.html", groups: 19 },
    { name: "Digital Marketing", link: "facebook-digital-marketing-groups.html", groups: 12 },
    { name: "Jobs", link: "facebook-jobs-groups.html", groups: 25 },
    { name: "Influencers", link: "facebook-influencers-groups.html", groups: 8 }
    // ...baaki categories
  ];

  const container = document.getElementById("catagories-sec-inner");

  // Remove duplicates by link
  const uniqueProducts = products.filter(
    (product, index, self) =>
      index === self.findIndex(p => p.link === product.link)
  );

  // Sort by groups (descending)
  uniqueProducts.sort((a, b) => b.groups - a.groups);

  // Append HTML blocks
  uniqueProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "i-box-s1";
    div.innerHTML = `
      <div class="thumb">
        <img src="assets/images/categoryicons/facebook_groups_category.png" alt="" />
      </div>
      <div class="content">
        <h3>${product.name} (${product.groups})</h3>
        <a href="${product.link}" class="f-btn">View All<i class="fa-solid fa-arrow-right"></i></a>
      </div>
    `;
    container.appendChild(div);
  });