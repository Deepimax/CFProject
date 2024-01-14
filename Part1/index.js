export default {
  async fetch(request) {
    let html_content = "";
    let html_style =
      "body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}";

      html_content += "<p> Colo: " + request.cf.colo + "</p>";
      html_content += "<p> Country: " + request.cf.country + "</p>";
      html_content += "<p> City: " + request.cf.city + "</p>";
      html_content += "<p> Continent: " + request.cf.continent + "</p>";
      html_content += "<p> Latitude: " + request.cf.latitude + "</p>";
      html_content += "<p> Longitude: " + request.cf.longitude + "</p>";
      html_content += "<p> PostalCode: " + request.cf.postalCode + "</p>";
      html_content += "<p> MetroCode: " + request.cf.metroCode + "</p>";
      html_content += "<p> Region: " + request.cf.region + "</p>";
      html_content += "<p> RegionCode: " + request.cf.regionCode + "</p>";
      html_content += "<p> Timezone: " + request.cf.timezone + "</p>";
    
    const countrycode = request.cf.country;
    const countryLink = `<a href="https://tunnel.tzeyiproject.shop/secure/${countrycode}">${countrycode}</a>`;
    const email = request.headers.get('Cf-Access-Authenticated-User-Email');
    const timestamp = Date.now(); // Get the current timestamp
    const readableTime = new Date(timestamp).toLocaleString(); // Convert to readable format

    let html = `<!DOCTYPE html>
      <head>
        <title> Geolocation: Hello World </title>
        <style> ${html_style} </style>
      </head>
      <body>
        <h1>Connection Success!</h1>
        ${email} authenticated at ${readableTime} from ${countryLink}
        <p>Details of the user:</p>
        ${html_content}
      </body>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });
  },
};
