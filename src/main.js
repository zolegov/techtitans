import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  openOnInit: [0],
});

//aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
