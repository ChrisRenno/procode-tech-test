# Procode Tech Test

Please create a TODO List application, in React, which users can use to add, view and delete TODO items (called “TODOs”). Example TODOs in the list might be:

•        Wash the car
•        Mow the lawn
•        Do the washing-up 
 
When starting the application, the list should be empty. There should be a form for adding new TODOs, somewhere to view all TODOs, and a way to tick off (i.e. remove) TODOs. 
 
This project is intended to be a way for you to demonstrate your coding abilities, and your ability to create user interfaces. The code and the UI do not need to be complicated, and this should take under 3 hours. If you can, please use TypeScript. Similarly, if you can, use Redux to store the TODOs. 

# Developer Notes

Not super polished as I wanted to make sure that I had something in place as I hadn't previously set up a redux store, so I made sure I had an app working with useState first in case I ran into issues in the timeframe. 

I did get copilot to assist (heavily) with the refactor to redux - using the chat functionality which is becoming more and more part of my workflow, but ensured I had time to read up on the patterns while inmplementing this.

Used vite/react-ts template to get up and running sharpish. Had a look at the react-redux one but it had a lot more to strip out so started with a nice clean vite one.

File naming convention is a bit ugly, I tried not to get too bogged down in the detail and keep working.

Not sure how you guys like styles in react. I like the modules, but find dynamic styles a bit ugly without a library like classnames. I would normally use sass on a standalone project where I decide on setup as I like the syntax particularly when following a BEM pattern, but again, simple app so didn't worry about making it perfect for me.
