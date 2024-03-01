### Rivet components for IUL
##### Lightweight set of assets for specific components (HTML, CSS, JS) adapted from IU's Rivet Design System. Use to install up-to-date branding and other Rivet-based components in already exising applications. 

#### DIST directory
- Updated to Rivet v.2.6
- Use **"dist" components** for plug-n-play HTML (more components will be added as needed)      
- Add relevant "css" file to your application's "head". This CSS uses a "rvt" prefix on classes and is designed so that it will NOT override any other application components.  
- Add Rivet javascript to your code (usually just before the closing "body" tag). Be sure to include 'Rivet.init' as shown. 
```  
  <script src="local/path/to/javascript/rivet-header.min.js"></script>
  <script>Rivet.init();</script>
```
In most cases do not use Rivet-provided CDN URLs for CSS & JS. This will risk collision with other elements in your application. 
      
##### For an interactive view of seperate components, see https://rivet.iu.edu/components/
- Header https://rivet.iu.edu/components/header/
- Footer https://rivet.iu.edu/components/footer/
- Card https://rivet.iu.edu/components/card/
- Tabs https://rivet.iu.edu/components/tabs/

##### Fonts
- UPDATE: each stylesheet includes IU spec fonts 

#### CSS
##### Examples of build details using NPM 'rivet-source' SASS
NPM package at https://www.npmjs.com/package/rivet-core
```
// header.css compiled from  
@use 'header-system';  
@use 'grid';
@use 'disclosure';    
@use 'dropdown';  

// footer.css compiled from
@use 'footer-system';   
@use 'grid';   

// card.css compiled from
@use 'card';
@use 'grid';

```
#### JS
##### Examples of build details using NPM 'rivet-source' JS
Download and NPM install https://github.com/indiana-university/rivet-source
```    
// header-rivet.min.js
import Disclosure from './components/disclosure'
import Dropdown from './components/dropdown'

// sidenav-rivet.min.js     
import Disclosure from './components/disclosure'    
import Dropdown from './components/dropdown'    
import Sidenav from './components/sidenav'    
```    
#### PROD directory        
Dist components (e.g., header, footer) with prepopulated links and content to be used as "universal" branding components across IUL websites.   

#### SRC directory     
- "src" is a clone of source files from the active Rivet repository https://github.com/indiana-university/rivet-source/
- uncompiled javascript, for example, can be found in '/src/js/components'


