# Rivet branding components for IUL

### Lightweight set of assets adapted from IU's Rivet Design System       
### Install up-to-date branding in IUL open source projects.

#### Installation
- Use "dist" components (e.g., header, footer) for plug-n-play HTML (more components will be added as needed)      
- Add relevant "css" file to your application's "head". This CSS uses a "rvt" prefix on classes and is designed so that it will NOT override any other application components.   
- Add Rivet javascript to your code (usually just before the closing "body" tag). 
```  
  <script src="https://unpkg.com/rivet-core@2.0.0-beta/js/rivet.min.js"></script>
  <script>Rivet.init();</script>
```       
- For an interactive view of Rivet components, see the components library https://v2.rivet.iu.edu/docs/components/
- Header https://v2.rivet.iu.edu/docs/components/header/
- Footer https://v2.rivet.iu.edu/docs/components/footer/

#### Fonts
- CSS is set up to "inherit" a site's default font. 
- To "inherit" IU fonts for a component add the following code to the top of the component CSS
```
@font-face {
  font-family: BentonSans;
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.iu.edu/fonts/benton-sans-regular.eot);
  src: url(https://fonts.iu.edu/fonts/benton-sans-regular.eot#iefix)
      format("embedded-opentype"),
    url(https://fonts.iu.edu/fonts/benton-sans-regular.woff) format("woff"),
    url(https://fonts.iu.edu/fonts/benton-sans-regular.ttf) format("truetype"),
    url(https://fonts.iu.edu/fonts/benton-sans-regular.svg#BentonSansRegular)
      format("svg");
  font-display: swap;
}
@font-face {
  font-family: BentonSans;
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.iu.edu/fonts/benton-sans-medium.eot);
  src: url(https://fonts.iu.edu/fonts/benton-sans-medium.eot#iefix)
      format("embedded-opentype"),
    url(https://fonts.iu.edu/fonts/benton-sans-medium.woff) format("woff"),
    url(https://fonts.iu.edu/fonts/benton-sans-medium.ttf) format("truetype"),
    url(https://fonts.iu.edu/fonts/benton-sans-medium.svg#BentonSansMedium)
      format("svg");
  font-display: swap;
}
@font-face {
  font-family: BentonSans;
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.iu.edu/fonts/benton-sans-bold.eot);
  src: url(https://fonts.iu.edu/fonts/benton-sans-bold.eot#iefix)
      format("embedded-opentype"),
    url(https://fonts.iu.edu/fonts/benton-sans-bold.woff) format("woff"),
    url(https://fonts.iu.edu/fonts/benton-sans-bold.ttf) format("truetype"),
    url(https://fonts.iu.edu/fonts/benton-sans-bold.svg#BentonSansRegular)
      format("svg");
  font-display: swap;
}
@font-face {
  font-family: GeorgiaPro;
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.iu.edu/fonts/georgia-pro-regular.eot);
  src: url(https://fonts.iu.edu/fonts/georgia-pro-regular.eot#iefix)
      format("embedded-opentype"),
    url(https://fonts.iu.edu/fonts/georgia-pro-regular.woff) format("woff"),
    url(https://fonts.iu.edu/fonts/georgia-pro-regular.ttf) format("truetype"),
    url(https://fonts.iu.edu/fonts/georgia-pro-regular.svg#GeorgiaProRegular)
      format("svg");
  font-display: swap;
}
@font-face {
  font-family: GeorgiaPro;
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.iu.edu/fonts/georgia-pro-italic.eot);
  src: url(https://fonts.iu.edu/fonts/georgia-pro-italic.eot#iefix)
      format("embedded-opentype"),
    url(https://fonts.iu.edu/fonts/georgia-pro-italic.woff) format("woff"),
    url(https://fonts.iu.edu/fonts/georgia-pro-italic.ttf) format("truetype"),
    url(https://fonts.iu.edu/fonts/georgia-pro-italic.svg#GeorgiaProItalic)
      format("svg");
  font-display: swap;
}
@font-face {
  font-family: GeorgiaPro;
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.iu.edu/fonts/georgia-pro-bold.eot);
  src: url(https://fonts.iu.edu/fonts/georgia-pro-bold.eot#iefix)
      format("embedded-opentype"),
    url(https://fonts.iu.edu/fonts/georgia-pro-bold.woff) format("woff"),
    url(https://fonts.iu.edu/fonts/georgia-pro-bold.ttf) format("truetype"),
    url(https://fonts.iu.edu/fonts/georgia-pro-bold.svg#GeorgiaProBold)
      format("svg");
  font-display: swap;
}
```
#### Source
- "src" is a clone of source files from the active Rivet repository https://github.com/indiana-university/rivet-source/ 
