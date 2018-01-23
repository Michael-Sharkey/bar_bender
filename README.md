# README
## Preamble
If you are anything like me - and, if you're here checking out a Rails app designed specifically for meatheads, then you most likely are something like me - you've heard some version of this old saw:

> Only two kinds of people keep journals in the gym: rank beginners and seasoned experts.

I don't consider myself an expert, necessarily, but I've always kept a log book.  The problem is that once I wrote things down, I never looked at them.  Lots of data.  No analysis.  Not so good.

None of the myriad, readily available fitness apps provided what I need.  They're all designed for aerobic pursuits.  Those that do include a mechanism for tracking gym activities do so as an afterthought.

Enter Bar Bender.  The key features I wanted it to include were:
1. Add and remove sets on the fly. I'm past the point of rigidly programmed templates (e.g. 5 x 5).  I didn't want to have to try and predict all of my workout parameters beforehand.
2. Simple data visualizations for tracking the three variables that are, in my humble opinion, most important:
* Daily training maxes:  Is the maximum amount of weight that I'm able to handle with a given exercise, for a given amount of repetitions, on a given day increasing over time?
* Overall training volume:  Am I balancing the amount of volume (weight x repetitions) that I'm doing across the five basic patterns of human movement:
1. Pushing
2. Pulling
3. Squatting
4. Hinging (Hip Extension)
5. Core Stabiliazation

The app also includes a simple mechanism for tracking food intake.  I like simple.

## Technical Stuff
    Ruby version 2.4.2

## System dependencies
Bar Bender relies upon a handful of exogenous dependencies, from the following sources:
 **source 'https://rubygems.org'
 
	gem 'jquery-rails'
	gem "paperclip", git: "git://github.com/thoughtbot/paperclip.git"
	gem 'devise'
	gem 'simple_form'
	gem "cocoon"
	gem 'font-awesome-sass'
    
**source 'https://rails-assets.org'

	gem 'rails-assets-chartjs'
	gem 'rails-assets-momentjs'
	gem 'rails-assets-select2' 
	gem 'rails-assets-hopscotch'

### Configuration

**Getting Started

From your project folder, clone the git repository:
	git clone https://github.com/Michael-Sharkey/bar_bender.git

Open the project folder:
	cd final-group-project
	
Install all dependencies:
	bundle install

Create and seed the database:
	rake db:migrate
	rake db:seed

Run the application:
	rails server

To see the application in action, open a browser window and navigate to [http://localhost:3000](http://localhost:3000).

**Database

Barbender uses PostgreSQL instead of the default SQLite3.  This makes it easier when it comes time to deploy, but shouldn't materially affect your use of Active Record in the development environment.

I'm still learning about the powers of Postgres myself, so unfortunately, I can't offer much more insight at this point.  To learn more, visit
[https://www.postgresql.org/docs/
]()

**Demo Mode

Before signing up, please click on 'Demo' to take a guided tour of the app.


## Acknowledgements

In addition to gem-specific documentation, and the standard menu of reliable resources 

* 	MDN Documentation
* 	W3Schools Documentation
* 	Stack Overflow
* 	Rails Documentation
	
I'd like to point out a handful of posts that helped me through particularly difficult challenges I had while developing Bar Bender:

* [https://davidwalsh.name/event-delegate]() - Beautifully succinct explanation of conditional event delegation.  
* [http://www.overfitted.com/blog/?p=302	]() & [http://gregpark.io/blog/live-d3-rails-plot/]() - Though I used ChartsJS instead of D3, these tutorials did a great job of explaining how to structure an AJAX request.  JQuery and AJAX were covered only very minimally in the coding bootcamp I attended, so these posts taught me a lot.
* [https://www.justinweiss.com/articles/search-and-filter-rails-models-without-bloating-your-controller/]() - I didn't use anything resembling the level of sophistication laid out in this post, but it provided a lot of context to the Rails Guides on scoping and class methods.  I still am not sure I understand all the nuance here, but reading through the article and the comments thread definitely made some lightbulbs go off vis-a-vis M-V-C.
* https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres - Wonderfully lucid and succinct how-to on setting up a new Rails app with PostgreSQL from the get-go (something I will likely do from now on).
