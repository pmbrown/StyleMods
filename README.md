# StyleMods <br>https://stylemods.com

### A collection of cohesively designed style sheets setup as Sass modules that can be included individually or together in custom SCSS files using Sass mixins.

The website docs attempt to provide consistent information about using and customizing StyleMods but please note they're an ongoing work-in-progress still evolving organically with the project build.

In general StyleMods has been developed under the following principals:

1. All styles must be self-contained documents that work independently.
2. All styles can be used and customized in a consistent manner.
3. All styles must be cohesively designed to work together if required.

Some of the methods used are a bit unorthodox but nothing new in how CSS and Sass are designed to be used:

- The styles and CSS variables are all setup as Sass `@mixin` for selective inclusion in custom SCSS.
- The default property styles are designed using fallback values for CSS variables without preset tokens.


The overall use of Sass functionality varies from module to module but could roughly be summarised as follows:

- Content styles and components use Sass variables to enable customizing with overrides.
- Layout, icons and utility modules use Sass variables and maps to help generate the styles.


The following provides an overview of the common principals used when writing the styles.

- Each module is a standalone SCSS file with all the CSS and Sass functionality self-contained within the same document.
- Common style properties included (e.g. backgrounds and borders) use consistent values to ensure they work together if required.
- Non-generated styles are written as regular CSS (i.e. without Sass nesting) so what you see in the source code is what's compiled.
- Sass variables and maps use consistent language and structures to provide continuity if customizing or expanding the styles.
- All Sass and CSS variable names are unique but follow a consistent naming convention to keep them simple for customizing.

Feedback is welcomed, email to philbrown.canberra@gmail.com is preferred.
