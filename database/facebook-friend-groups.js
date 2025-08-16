          // Example data array
          const products = [
            { name: "Mumbai Friends", link: "https://www.facebook.com/groups/mumbaionlinefriends/", members: 1 },
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