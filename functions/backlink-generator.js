// Backlink sites template
let linkTemplates = [
  "http://www.builtwith.com/{{domain}}/",
  "http://validator.w3.org/check?uri={{domain}}",
  "http://whois.tools4noobs.com/info/{{domain}}",
  "http://www.alexa.com/siteinfo/{{domain}}",
  "http://www.alexa.com/data/details/?url={{domain}}",
  "http://www.aboutdomain.org/backlinks/{{domain}}/",
  "http://www.robtex.com/dns/{{domain}}.html",
  "http://www.quantcast.com/{{domain}}",
  "http://uptime.netcraft.com/up/graph?site={{domain}}",
  "http://www.pageheat.com/heat/{{domain}}",
  "http://www.aboutthedomain.com/{{domain}}",
  "http://websiteshadow.com/{{domain}}",
  "http://www.surcentro.com/en/info/{{domain}}",
  "http://www.onlinewebcheck.com/check.php?url={{domain}}",
  "http://websitevaluecalculator.org/{{domain}}",
  "http://statswebsites.com/{{domain}}",
  "http://whoisx.co.uk/{{domain}}",
  "http://www.websiteaccountant.nl/{{domain}}",
  "http://www.talkreviews.ro/{{domain}}",
  "http://www.listenarabic.com/search?q={{domain}}&sa=Search",
  "http://www.keywordspy.com/research/search.aspx?q={{domain}}&tab=domain-overview",
  "http://boardreader.com/linkinfo/{{domain}}",
  "http://www.websiteaccountant.be/{{domain}}",
  "http://www.consultanta-seo.ro/results/{{domain}}",
  "http://siteanalytics.compete.com/{{domain}}/",
  "http://wholinkstome.com/url/{{domain}}",
  "http://www.serpanalytics.com/#competitor/{{domain}}/summary/1",
  "http://www.pagerankplace.com/website/{{domain}}",
  "http://hosts-file.net/default.asp?s={{domain}}",
  "http://whois.domaintools.com/{{domain}}",
  "http://www.folkd.com/detail/{{domain}}",
  "http://script3.prothemes.biz/{{domain}}",
  "http://www.who.is/whois/{{domain}}",
  "http://www.websitedown.info/{{domain}}",
  "http://www.worthofweb.com/website-value/{{domain}}",
  "http://www.siteworthtraffic.com/report/{{domain}}",
  "http://hqindex.org/{{domain}}",
  "https://valueanalyze.com/show.php?url={{domain}}",
  "http://www.domainwhoisinfo.com/{{domain}}",
  "http://www.siteprice.org/website-worth/{{domain}}",
  "http://howmuchdomainnameworth.com/process.php?q={{domain}}",
  "http://toolbar.netcraft.com/site_report?url={{domain}}",
  "https://semrush.com/info/{{domain}}",
  "http://www.siteranker.com/TrankTrend.aspx?url={{domain}}",
  "https://website.ip-adress.com/{{domain}}",
  "http://web.horde.to/{{domain}}",
  "https://www.woorank.com/en/www/{{domain}}",
  "http://scamanalyze.com/check/{{domain}}",
  "http://www.infositeshow.com/sites/{{domain}}",
  "http://www.serpanalytics.com/sites/{{domain}}",
  "http://www.ultimate-rihanna.com/?url={{domain}}",
  "http://ranking.websearch.com/siteinfo.aspx?url={{domain}}",
  "https://deviantart.com/users/outgoing?{{domain}}",
  "https://proza.ru/go/{{domain}}",
  "https://webwiki.de/{{domain}}",
  "http://www.viewwhois.com/{{domain}}",
  "http://w3seo.info/WSZScore/{{domain}}",
  "http://www.talkreviews.com/{{domain}}",
  "http://archive.is/{{domain}}",
  "http://ranking.crawler.com/SiteInfo.aspx?url={{domain}}",
  "http://dig.do/{{domain}}",
  "http://web.archive.org/web/*/{{domain}}",
  "http://www.websitelooker.net/www/{{domain}}",
  "http://whois.phurix.co.uk/{{domain}}",
  "https://dnswhois.info/{{domain}}",
  "https://rbls.org/{{domain}}",
  "https://stuffgate.com/{{domain}}",
  "https://whois.de/{{domain}}",
  "https://statscrop.com/www/{{domain}}",
  "https://evi.com/q/{{domain}}",
  "https://similarto.us/{{domain}}",
  "https://mywot.com/en/scorecard/{{domain}}",
  "https://whoislookupdb.com/whois-{{domain}}",
  "http://website.informer.com/{{domain}}",
  "http://500v.net/site/{{domain}}",
  "http://websitedetailed.com/{{domain}}",
  "https://www.seoptimer.com/{{domain}}",
  "https://a.pr-cy.ru/{{domain}}",
  "https://be1.ru/stat/{{domain}}",
  "https://ibm.com/links/?cc=us&lc=en&prompt=1&url=//{{domain}}",
  "https://addtoany.com/share_save?linkname=&linkurl={{domain}}",
  "http://sitevaluefox.com/website-value-calculator/show.php?url={{domain}}",
  "https://spyfu.com/overview/domain?query={{domain}}",
  "https://transtats.bts.gov/exit.asp?url={{domain}}",
  "https://water.weather.gov/ahps2/nwsexit.php?url={{domain}}",
  "https://w3techs.com/sites/info/{{domain}}",
  "https://duckduckgo.com/{{domain}}?ia=web",
  "https://domainsigma.com/whois/{{domain}}",
  "https://search.com/search?q={{domain}}"
];

let links = [];
let completed = 0;

function create_backlink() {
  const inputUrl = document.getElementById("MyURL").value.trim();
  if (!inputUrl) {
    alert("Please enter a domain!");
    return;
  }

  // domain replace
  links = linkTemplates.map(t => t.replace(/{{domain}}/g, inputUrl));

  completed = 0;
  document.getElementById("show_results").innerHTML = "";
  updateProgress(0);

  // Start loading backlinks ek-ek karke
  loadNextLink(0);
}

function loadNextLink(index) {
  if (index >= links.length) return; // sab complete

  const url = links[index];
  const img = new Image();

  img.onload = img.onerror = function () {
    completed++;
    updateProgress((completed / links.length) * 100);

    // result show
    const div = document.createElement("div");
    div.innerHTML = `${completed}. <a href="${url}" target="_blank">${url}</a>`;
    document.getElementById("show_results").appendChild(div);

    // 🔥 Auto-scroll to latest result
    div.scrollIntoView({ behavior: "smooth", block: "end" });

    // next backlink load karo
    setTimeout(() => loadNextLink(index + 1), 300); // thoda delay natural lagne ke liye
  };

  img.src = url + "?rand=" + Math.random(); // cache bypass
}

function updateProgress(percent) {
  const bar = document.getElementById("show_progressbar");
  bar.innerHTML = `
    <div style="background:#4caf50;height:15px;line-height: 15px;font-size: 14px;width:${percent}%;color:#fff;text-align:center;">
      ${Math.floor(percent)}%
    </div>
  `;
}

function clear_all() {
  completed = 0;
  document.getElementById("show_results").innerHTML = "";
  document.getElementById("show_progressbar").innerHTML = "";
  document.getElementById("MyURL").value = "";
}