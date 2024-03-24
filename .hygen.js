module.exports = {
  helpers: {
    humanize: s => s.replace(/-([a-z])/g, function(match, group1) {
      return group1.toUpperCase();
    }).replace(/^[a-z]/, function(match) {
      return match.toUpperCase();
    })
  }
}
