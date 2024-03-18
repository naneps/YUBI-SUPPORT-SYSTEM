import moment from 'moment';

export default {
  install(app) {
    // This function will convert the string to kebab-case
    app.config.globalProperties.$toKebabCase = (string) => {
      return string.replace(/\s+/g, '-').toLowerCase();
    };

    // This function will convert the string to PascalCase
    app.config.globalProperties.$toPascalCase = (string) => {
      return string.replace(/(\w)(\w*)/g, function(g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
    };

    // This function will convert the string to camelCase
    app.config.globalProperties.$toCamelCase = (string) => {
      return string.replace(/(\w)(\w*)/g, function(g0, g1, g2) {
        return g1.toLowerCase() + g2.toLowerCase();
      });
    };

    // This function will convert the string to snake_case
    app.config.globalProperties.$toSnakeCase = (string) => {
      return string.replace(/\s+/g, '_').toLowerCase();
    };

    // formatter date
    app.config.globalProperties.$formatDate = (date) => {
      return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    };

    // time from now
    app.config.globalProperties.$timeFromNow = (date) => {
      return moment(date).fromNow();
    };
  }
};
