#  JSON-Q
Simplie CLI program to query a (particular!) json object.

![Scren Shot of App](https://s3.amazonaws.com/wibbed/uploads/Screenshot+from+2018-05-16+11-24-11.png)

#### About project:
Although I've worked with Node.js, I'd never really got to do any CLI programs, and was excited by the process.  I did some intial research, reading articales, and gather info.  I did my best to componentize my functions.  Many times that was not possible, but with a few tweaks, particulatly the process section could be used for querys of a different sort.



Technologies used:
- Node.js

Dependencies:
- "chalk" - Add some color to output in terminal
- "clear" - Clear the terminal line - styling
- "es6-promise" - Just to be sure we're using es6 promies
- "figlet" - Styling text.. only used for title
- "inquirer" - Used for comman line interface
- "isomorphic-fetch" - my preferred means of HTTP reqeusts, fetch

Setup:
-  Clone or download.
-  In repo, run `npm install -g` to install globally
- Use `json-q` to run - there is an optional string paramter which can either be local directory or URL.
- For help using, in program type `-help`



Credit:
Thank you [Dan Prince @sitepoint](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/).  Article was comprehensive, and a great start for my project.
