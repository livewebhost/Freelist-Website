          // Example data array
          const products = [
            { name: "Mumbai Business Group", link: "https://www.facebook.com/groups/mumbaibusinessgroupindia/", members: 1 },
            { name: "Fashion clothes for Boys", link: "https://www.facebook.com/groups/fashionclothesforboys/", members: 836 },
            { name: "Marketplace", link: "https://www.facebook.com/groups/fb.facebookmarketplace/", members: 21 },
            { name: "Buy & Sell", link: "https://www.facebook.com/groups/buysellonline.india/", members: 4 },
            { name: "Men's Top Quality Clothes", link: "https://www.facebook.com/groups/menstopqualityclothes/", members: 37 },
            { name: "Men's Fashion World", link: "https://www.facebook.com/groups/mensfashionworld.india/", members: 10 },
            { name: "Mens and boys clothes", link: "https://www.facebook.com/groups/mensandboysclothes/", members: 39 },
            { name: "Men's clothing", link: "https://www.facebook.com/groups/mensclothing.india/", members: 438 },
            { name: "Delhi ladies group", link: "https://www.facebook.com/groups/delhiladiesgroup/", members: 157 },
            { name: "Marketplace", link: "https://www.facebook.com/groups/free.marketplace.india/", members: 260 },
            { name: "Bangalore Marketplace", link: "https://www.facebook.com/groups/bangaloremarketplace.india/", members: 79 },
            { name: "Delhi Marketplace", link: "https://www.facebook.com/groups/delhi.marketplace.india/", members: 44 },
            { name: "Mumbai Marketplace", link: "https://www.facebook.com/groups/marketplacemumbaiindia/", members: 154 },
            { name: "Marketplace", link: "https://www.facebook.com/groups/marketplace.fb.india/", members: 1606 },
            { name: "Marketplace", link: "https://www.facebook.com/groups/indiamarketplacegroup/", members: 7275 },
            { name: "Marketplace - Buy and Sell", link: "https://www.facebook.com/groups/marketplacebuyandsell.india/", members: 6522 },
            { name: "Meesho online shopping group", link: "https://www.facebook.com/groups/meeshoonlineshoppinggroup/", members: 256 },
            { name: "Online Shopping Group", link: "https://www.facebook.com/groups/facebook.onlineshoppinggroup/", members: 1261 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Online Shopping Lucknow", link: "https://www.facebook.com/groups/onlineshoppinglucknow.india/", members: 394 },
            { name: "Pune marketplace", link: "https://www.facebook.com/groups/punemarketplace.india/", members: 5408 },
            { name: "Marketplace", link: "https://www.facebook.com/groups/indiamarketplace1/", members: 19528 },
            { name: "Online Shopping Ujjain", link: "https://www.facebook.com/groups/onlineshoppingujjain/", members: 8087 },
            { name: "Pune Online Shopping", link: "https://www.facebook.com/groups/puneshoppingindia/", members: 30170 },
            { name: "Online Shopping Kolkata", link: "https://www.facebook.com/groups/onlineshoppinginkolkata/", members: 10220 },
            { name: "Mumbai Marketplace", link: "https://www.facebook.com/groups/mumbaimarketplaceindia/", members: 14541 },
            { name: "Online Shopping", link: "https://www.facebook.com/groups/onlineshopping.facebook/", members: 16402 },
            { name: "Online Shopping Nagpur", link: "https://www.facebook.com/groups/onlineshoppingnagpurr/", members: 5530 },

            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
            { name: "Mumbai ladies group", link: "https://www.facebook.com/groups/mumbailadiesgroup/", members: 12241 },
          ];

          const tbody = document.getElementById("cart-products");

          // Remove duplicates by link
          const uniqueProducts = products.filter(
            (product, index, self) =>
              index === self.findIndex(p => p.link === product.link)
          );

          // Sort by members (descending)
          uniqueProducts.sort((a, b) => b.members - a.members);

          // Add sorted rows to table
          uniqueProducts.forEach((product, index) => {
            const tr = document.createElement("tr");
            tr.id = `product-id1`;

            tr.innerHTML = `
              <td>
                <h4 class="group_title">
                  ${index + 1}. <a href="${product.link}">${product.name}</a>
                </h4>
                <p>Total Members: ${product.members}+</p>
              </td>
            `;

            tbody.appendChild(tr);
          });