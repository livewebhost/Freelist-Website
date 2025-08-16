          // Example data array
          const products = [
            { name: "Digital Marketing", link: "https://www.facebook.com/groups/bestdigitalmarketingindia/", members: 1 },
            { name: "SEO And Digital Marketing Hub", link: "https://www.facebook.com/groups/digitalmarketingandseohub/", members: 30 },
            { name: "Google Ads Expert And Facebook Ads", link: "https://www.facebook.com/groups/googleadsandfacebookadsexpert/", members: 34 },
            { name: "Instagram Digital Marketing", link: "https://www.facebook.com/groups/instagramdigitalmarketing/", members: 35 },
            { name: "Google Ads Support", link: "https://www.facebook.com/groups/googleadssupport.india/", members: 108 },
            { name: "Digital Marketing Agency in Indore 7024881776", link: "https://www.facebook.com/groups/digitalmarketingagencyinindore/", members: 93 },
            { name: "Digital Marketing Professionals", link: "https://www.facebook.com/groups/digital.marketingprofessionals.facebook/", members: 22 },
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