// // Creates a new paragraph element and adds it to the DOM.
// "use strict";
// //
var p = document.createElement('p');
document.body.appendChild(p);

// Creates a shadow root on an the paragraph.
p.createShadowRoot();

// Sets the paragraph's shadow root's HTML contents.
p.shadowRoot.innerHTML = 'Sweet <em>sweet</em> contents here...';
//
//
// function foo () {
//   "use strict";
//   console.log('works');
// // Creates a MediaObjectElement class that extends HTMLElement.
//   class MediaObjectElement extends HTMLElement {
//     createdCallback() {
//       console.log('callback');
//       var shadowRoot = this.createShadowRoot();
//       shadowRoot.innerHTML = 'Shadow DOM contents yy tt ...';
//     }
//   }
//
// // Registers the `<media-object>` element for use.
// document.registerElement('media-object', MediaObjectElement);
// }
//
// foo();


//  this is a test

var pageFunctions = {
    intialize: function () {
      console.log('works');
      var self=this;
      this.intializeWatchers(); //listens for clicks
      this.foo();
    },
    intializeWatchers: function () {


    },
    foo: function () {
      console.log('foo');
    // Creates a MediaObjectElement class that extends HTMLElement.
      class MediaObjectElement extends HTMLElement {
        createdCallback() {
          console.log('callback');
          var shadowRoot = this.createShadowRoot();
          shadowRoot.innerHTML = 'Shadow DOM contents yy tt ...';
        }
      }
    }
  };
