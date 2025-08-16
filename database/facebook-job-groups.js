          // Example data array
          const products = [
            { name: "Jobs for everyone", link: "https://www.facebook.com/groups/jobprofiles/", members: 17606 },
            { name: "Graphic Design Jobs", link: "https://www.facebook.com/groups/india.graphicdesignjobs/", members: 31 },
            { name: "Website Design Jobs", link: "https://www.facebook.com/groups/website.design.jobs/", members: 183 },
            { name: "SEO Projects and SEO Jobs", link: "https://www.facebook.com/groups/seo.projects.seo.jobs/", members: 38 },
            { name: "Indore Job Seekers", link: "https://www.facebook.com/groups/jobseekersindore/", members: 1 },
            { name: "Content Writing Jobs", link: "https://www.facebook.com/groups/jobs.content.writing/", members: 15972 },
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