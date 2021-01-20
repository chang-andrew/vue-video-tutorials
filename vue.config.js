/*
  The publicPath determines where Vue will try to access JS, CSS, and image files.
  By default the publicPath is '/'.
  Our default GitHub pages url is "https://<USERNAME>.github.io/<REPO-NAME>/",
  so we will need to set public path to '/<REPO-NAME>/'.
*/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-video-tutorials/'
    : '/'
}
