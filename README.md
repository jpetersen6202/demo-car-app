# demo-car-app

React-Native with expo demo app for practicing with UI. Deployment can be found here:
https://expo.dev/@jpetersen6202/democarapp


### What would you have done differently if you could restart the challenge?
 - Maybe spend less time on styling to get functionality in first. But I do feel it's still important to get basic styling in so you can have a bit of a visualization of how your page will look in a completed state. I'd also like to say spend less time browsing documentation for react-native, but I'm still fairly new to it, so it's a little unavoidable at this stage.

### If you had another hour, what else would you work on? And if you had another day? What about another week?
- If I had another hour, I'd probably spend it trying to complete the video background, mostly based on recency bias. In a more realistic work setting, I'd spend much more time polishing the cart feature, and make sure that was in a good place before moving on to the next big feature.
- With another day, I would want to get the account login screen / mock functionality completed, as well as re-do how I'm handling cart info. I think It'd be better to use a react context, or set up redux instead of deep prop drilling. I went with prop drilling originally because in an assesment environment, I didn't want to use too much time on redux documentation making sure I got it set up right.
- With another week, I'd want to get a slight polish on the full list of additional features, so that there are at least fully functional. After, I'd look into moving assets into a data store to reduce bloat, as well as moving my hardcoded data into some sort of external DB.

### We've released a beta product to approximately 30 people, and you mentally have the following list of things to do. There's never enough time to complete them all. Which three things would you tackle, and why?
- I think I'd start with a staging setup. Changes being pushed straight to prod seems especially dangerous, and a good way to lose the faith of users if catastrophic issues make it through. This could effect all users on a very high level.
- Another one I'd probably want to work on is early testers reporting long load times. This sounds like it would be an issue that effects all of our users, and could likely drive many users away right off the bat.
- Finally I'd probably prioritize the comment feature. Seems like this could be a relatively simple fix, and if multiple users in the small test pool are noticing it and reporting it, it's likely hurting the user experience. This one could also effect all users.

### How much time did you end up taking in total on the assignment? And what took you more time than you anticipated?
- I ended up using pretty much the entire two hours. I got to a stopping point with the cart feature, wanted to see if I could get a video background in quick, but once it seemed like it might take longer than time, I stopped. Reading documentation took a lot of time, but I don't think it's longer than I anticipated. Being new to react-native, I expected to be doing a lot of reading to get things to work how I'd like. Styling took a little longer than expected, as I'm still working on my css skils.
