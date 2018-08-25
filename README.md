# Contract-Out
A tool for automating contracting out workers.

This is a tool that can be used to send out contract bids to a public database of sub-contractors or a database of sub-contractors that you pick.
Once the user is logged in they will be able to create a "job" ticket that have diferent "tasks" that links up with the sub-contractors skills.
Contract-Out then sends an email and text to each user with a link that redirects to a page where they can accept or decline the bid. In addition to accept and decline a sub-contractor can also lower the price they aer willing to do the job for. This allows the contractor to contract out jobs and get sub-contractors competing for the job.

Getting Started:

%^%$* Twilio

Whoever has to setup Twilio I am so so sorry. Twilio is a service that allows you to have a phone number that you can use with node to send SMS messages (among other things like two factor authentication). Once installed and configured correctly Twilio is a breeze to use, but setting it up is not fun.

First, decide if you want all the computers to work with Twilio or just one computer (as twilio requires a lot of setup outside of the App). 

Lets get started!

[] Go to Twilio.com and create an account. It will force you to put in a credit card but you don't have to pay, although it's really cheap and it is almost neccessary. For the purpose of this project you can use the account that I setup. Come to me for login details.

[] Once you go to your homepage you should see a field in the top right with fields ACCOUNT SID and AUTH TOKEN. Save these numbers in a .env file 
under any variable name you want. DON'T FORGET TO ADD THE .env FILE TO GITIGNORE AS YOU DO NOT WANT TO POST THIS INFORMATION TO GITHUB Careful, .env files are formatted different;y from typical javascript files. Great! Now you have access to your passwords throughout the app.

[] Click on the phone number link in the phone numbers box on the bottom right to get your current phone number (you can also add new phone numbers in this menu). Save the phone number to the .env file just like you did previously.

[] Next you need to download and install Ngrok. Taken from Ngrok's website, "Ngrok exposes local servers behind NATs and firewalls to the public internet over secure tunnels." It allows you to connect to twilio from your computer. Ngrok has pretty good instructions but you will need to create an account. Luckily you can login with github!

[] You should start the Ngrok server using the same port that you app is listening on. That is about it now you can interact with twilio. You can send and recieve texts, phone calls etc. If you are using my account please inform me if you plan on doing anything :).


Stretch features we thought of:

[] Encrypt the username and password (not much of a stretch)

[] Add the ability for sub-contractors to signup to the public site so that they can create a profile diesplaying their skills and will get the approppriate contracs sent to them. 

[]  







