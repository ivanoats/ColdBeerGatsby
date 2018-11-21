module.exports = {
  siteTitle: "Cold Enough For Beer Outside?", // Site title.
  siteTitleShort: "ColdOut.Beer", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Cold Enough for Beer Outside", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://coldout.beer", // Domain of your website without pathPrefix.
  pathPrefix: "/", // DO NOT REMOVE EVEN IF EMPTY
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription:
    "Tells you whether it is cold enough to store your beer outside, or not", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Ivan Storck", // Username to display in the author segment.
  userTwitter: "ivanoats", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Seattle, WA, USA", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://facebook.com/coldenoughbeeroutside",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/ivanoats",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:ivanoats+coldout@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Sustainable Websites LLC dba Good Paddle" // Copyright string for the footer of the website and RSS feed.
}
