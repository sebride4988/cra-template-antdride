module.exports = function (Handlebars) {
  /**
   * @link https://stackoverflow.com/questions/15088215/handlebars-js-if-block-helper
   */
  Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a == b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
  });
}
