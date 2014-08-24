var $itemsElement;
var tags = ["Network", "Internet", "Database", "ORM", "Dependency", "Injection", "Image", "Animation", "Fragment", "Action Bar", "REST", "API", "Asynchronous", "Task", "View", "Scroll", "Picker", "Adapter View", "Graph", "Sample App", "Tool", "Cache", "Test", "Widget", "Time", "Progress", "Navigation", "Rating", "Barcode", "Bus", "Utility", "Parse", "Notification", "Map", "Dialog", "Media", "Showcase", "Resources", "Library Collection", "Plugin", "Learning Resources"];
var items = [
	{
		"title": "Android Asynchronous Http Client",
		"tags": ["network", "internet", "asynchronous"],
		"author": "James Smith",
		"description": "An asynchronous callback-based Http client for Android built on top of Apache’s HttpClient libraries. All requests are made outside of your app’s main UI thread, but any callback logic will be executed on the same thread as the callback was created using Android’s Handler message passing. You can also use it in Service or background thread, library will automatically recognize in which context is ran.",
		"home_url": "http://loopj.com/android-async-http/",
		"github_url": "https://github.com/loopj/android-async-http/"
	},
	{
		"title": "Volley",
		"tags": ["network", "internet", "api", "asynchronous", "cache", "rest"],
		"author": "Google",
		"description": "Volley is an HTTP library that makes networking for Android apps easier and most importantly, faster. Volley is available through the open AOSP repository.",
		"home_url": "http://developer.android.com/training/volley/index.html",
		"google_url": "https://android.googlesource.com/platform/frameworks/volley"
	},
	{
		"title": "Picasso",
		"tags": ["network", "internet", "image", "asynchronous", "cache"],
		"author": "Square",
		"description": "A powerful image downloading and caching library for Android. Images add much-needed context and visual flair to Android applications. Picasso allows for hassle-free image loading in your application—often in one line of code!",
		"home_url": "http://square.github.io/picasso/",
		"github_url": "https://github.com/square/picasso"
	},
	{
		"title": "Glide",
		"tags": ["network", "internet", "image", "asynchronous"],
		"author": "Bump Technologies",
		"description": "An image loading and caching library for Android focused on smooth scrolling",
		"github_url": "https://github.com/bumptech/glide"
	},
	{
		"title": "Retrofit",
		"tags": ["network", "internet", "rest", "api"],
		"author": "Square",
		"description": "A type-safe REST client for Android and Java",
		"home_url": "http://square.github.io/retrofit/",
		"github_url": "https://github.com/square/retrofit"
	},
	{
		"title": "OkHttp",
		"tags": ["network", "internet", "asynchronous"],
		"author": "Square",
		"description": "An HTTP & SPDY client for Android and Java applications. HTTP is the way modern applications network. It’s how we exchange data & media. Doing HTTP efficiently makes your stuff load faster and saves bandwidth.",
		"home_url": "http://square.github.io/okhttp/",
		"github_url": "https://github.com/square/okhttp"
	},
	{
		"title": "RoboSpice",
		"tags": ["network", "internet", "asynchronous", "task", "rest"],
		"author": "Stéphane Nicolas",
		"description": "RoboSpice is a modular android library that makes writing asynchronous long running tasks easy. It is specialized in network requests, supports caching and offers REST requests out-of-the box using extension modules.",
		"home_url": "",
		"github_url": "https://github.com/stephanenicolas/robospice"
	},
	{
		"title": "Ion",
		"tags": ["network", "internet", "asynchronous"],
		"author": "Koushik Dutta",
		"description": "Android Asynchronous Networking and Image Loading",
		"home_url": "",
		"github_url": "https://github.com/koush/ion"
	},
	{
		"title": "Sugar ORM",
		"tags": ["database", "orm"],
		"author": "Satya Narayan",
		"description": "Insanely easy way to work with Android Databases.",
		"home_url": "http://satyan.github.io/sugar/",
		"github_url": "https://github.com/satyan/sugar"
	},
	{
		"title": "greenDAO",
		"tags": ["database", "orm"],
		"author": "greenrobot",
		"description": "greenDAO is a light & fast ORM solution for Android that maps objects to SQLite databases. Being highly optimized for Android, greenDAO offers great performance and consumes minimal memory.",
		"home_url": "http://greendao-orm.com/",
		"github_url": "https://github.com/greenrobot/greenDAO"
	},
	{
		"title": "Sprinkles",
		"tags": ["database", "orm"],
		"author": "Emil Sjölander",
		"description": "Sprinkles is a boiler-plate-reduction-library for dealing with databases in android applications. Some would call it a kind of ORM but I don't see it that way. Sprinkles lets SQL do what it is good at, making complex queries. SQL however is a mess (in my opinion) when is comes to everything else. This is why sprinkles helps you with things such as inserting, updating, and destroying models. Sprinkles will also help you with the tedious task of unpacking a cursor into a model.",
		"github_url": "https://github.com/emilsjolander/sprinkles"
	},
	{
		"title": "ActiveAndroid",
		"tags": ["database", "orm"],
		"author": "Michael Pardo",
		"description": "ActiveAndroid is an active record style ORM (object relational mapper). What does that mean exactly? Well, ActiveAndroid allows you to save and retrieve SQLite database records without ever writing a single SQL statement. Each database record is wrapped neatly into a class with methods like save() and delete().",
		"home_url": "http://www.activeandroid.com",
		"github_url": "https://github.com/pardom/ActiveAndroid"
	},
	{
		"title": "OrmLite",
		"tags": ["database", "orm"],
		"author": "Gray",
		"description": "Object Relational Mapping Lite (ORM Lite) provides some simple, lightweight functionality for persisting Java objects to SQL databases while avoiding the complexity and overhead of more standard ORM packages.",
		"home_url": "http://ormlite.com/",
		"github_url": "https://github.com/j256/ormlite-android"
	},
	{
		"title": "SQLiteAssetHelper",
		"tags": ["database"],
		"author": "Jeff Gilfelt",
		"description": "An Android helper class to manage database creation and version management using an application's raw asset files.",
		"home_url": "http://jgilfelt.github.io/android-sqlite-asset-helper/",
		"github_url": "http://github.com/jgilfelt/android-sqlite-asset-helper"
	},
	{
		"title": "storm-gen",
		"tags": ["database", "orm"],
		"author": "David Chandler",
		"description": "Simple ORM for Android SQLite",
		"github_url": "https://github.com/turbomanage/storm-gen",
		"google_url": "https://code.google.com/p/storm-gen"
	},
	{
		"title": "Dagger",
		"tags": ["dependency", "injection"],
		"author": "Square",
		"description": "A fast dependency injector for Android and Java.",
		"home_url": "http://square.github.io/dagger",
		"github_url": "https://github.com/square/dagger"
	},
	{
		"title": "Butterknife",
		"tags": ["dependency", "injection", "view"],
		"author": "Jake Wharton",
		"description": "View 'injection' library for Android which uses annotation processing to generate boilerplate code for you.",
		"home_url": "http://jakewharton.github.io/butterknife/",
		"github_url": "https://github.com/JakeWharton/butterknife"
	},
	{
		"title": "AndroidAnnotations",
		"tags": ["dependency", "injection"],
		"author": "excilys",
		"description": "AndroidAnnotations is an Open Source framework that speeds up Android development. It takes care of the plumbing, and lets you concentrate on what's really important. By simplifying your code, it facilitates its maintenance.",
		"home_url": "http://androidannotations.org",
		"github_url": "https://github.com/excilys/androidannotations"
	},
	{
		"title": "Android View Animations",
		"tags": ["animation", "view"],
		"author": "Daimajia",
		"description": "Cute view animation collection.",
		"github_url": "https://github.com/daimajia/AndroidViewAnimations"
	},
	{
		"title": "Rebound",
		"tags": ["animation"],
		"author": "Facebook",
		"description": "Rebound is a Java library that models spring dynamics. Rebound spring models can be used to create animations that feel natural by introducing real world physics to your application.",
		"home_url": "http://facebook.github.io/rebound",
		"github_url": "https://github.com/facebook/rebound"
	},
	{
		"title": "Nine Old Androids",
		"tags": ["animation", "compat"],
		"author": "Jake Wharton",
		"description": "Android library for using the Honeycomb (Android 3.0) animation API on all versions of the platform back to 1.0!<br><br>Animation prior to Honeycomb was very limited in what it could accomplish so in Android 3.x a new API was written. With only a change in imports, we are able to use a large subset of the new-style animation with exactly the same API.<br><br>This library also includes support for animating rotation, translation, alpha, and scale on platforms prior to Honeycomb!",
		"home_url": "http://nineoldandroids.com/",
		"github_url": "https://github.com/JakeWharton/NineOldAndroids"
	},
	{
		"title": "Refresh Menu Item",
		"tags": ["animation", "action bar"],
		"author": "Nicolas Jafelle",
		"description": "RefreshMenuItem is a Menu item that shows an indeterminate progress in the Android ActionBar. It is simple to use, lightweight, scalable and uses intuitive methods names.",
		"github_url": "https://github.com/nicolasjafelle/RefreshMenuItem"
	},
	{
		"title": "FragmentTransactionExtended",
		"tags": ["animation", "fragment"],
		"author": "Antonio Corrales",
		"description": "FragmentTransactionExtended is a library which provide us a set of custom animations between fragments.",
		"github_url": "https://github.com/DesarrolloAntonio/FragmentTransactionExtended"
	},
	{
		"title": "PagingListView",
		"tags": ["view", "adapter view"],
		"author": "Nicolas Jafelle",
		"description": "PagingListView is a ListView with the ability to add more items on it when reaches the end of the list.",
		"github_url": "https://github.com/nicolasjafelle/PagingListView"
	},
	{
		"title": "PagingGridView",
		"tags": ["view", "adapter view"],
		"author": "Nicolas Jafelle",
		"description": "PagingGridView has the ability to add more items on it like PagingListView does. Basically is a GridView with the ability to add more items on it when reaches the end of the list.",
		"github_url": "https://github.com/nicolasjafelle/PagingGridView"
	},
	{
		"title": "SizeAdjustingTextView",
		"tags": ["view"],
		"author": "Elliott Chenger",
		"description": "This is based on an open source autosizing textview for Android I found a few weeks ago. The initial approach didn't resize multiple lines and wasn't maintained to keep up with changes in Android. I decided to go ahead and create this as a place to preserve the auto sizing text view as well as giving it a platform for some change and to possibly add some features and functionality.",
		"github_url": "https://github.com/erchenger/SizeAdjustingTextView"
	},
	{
		"title": "Shimmer for Android",
		"tags": ["view", "animation"],
		"author": "Romain Piel",
		"description": "Shimmer-android is an Android port of Facebook Shimmer library for iOS.",
		"github_url": "https://github.com/RomainPiel/Shimmer-android"
	},
	{
		"title": "FreeFlow",
		"tags": ["view", "scroll", "adapter view"],
		"author": "Comcast",
		"description": "A layout engine for Android that decouples layouts from the View containers that manage scrolling and view recycling. FreeFlow makes it really easy to create custom layouts and beautiful transition animations as data and layouts change",
		"github_url": "https://github.com/Comcast/FreeFlow"
	},
	{
		"title": "android-wheel",
		"tags": ["view", "picker"],
		"author": "Yuri",
		"description": "The wheel widget for Android.",
		"google_url": "https://code.google.com/p/android-wheel"
	},
	{
		"title": "IconicTextView",
		"tags": ["view"],
		"author": "akramfares",
		"description": "IconicTextView is an extension of Android TextView class which provides support for some iconic fonts.",
		"github_url": "https://github.com/akramfares/IconicTextView"
	},
	{
		"title": "PhotoView",
		"tags": ["view", "image"],
		"author": "Chris Banes",
		"description": "Implementation of ImageView for Android that supports zooming, by various touch gestures.",
		"github_url": "https://github.com/chrisbanes/PhotoView"
	},
	{
		"title": "AnyTextView",
		"tags": ["view"],
		"author": "Hans Petter Eide",
		"description": "An extension of Android's TextView and EditText that let's you use the font of your choice",
		"github_url": "https://github.com/hanspeide/anytextview"
	},
	{
		"title": "JazzyViewPager",
		"tags": ["view", "animation"],
		"author": "Jeremy Feinstein",
		"description": "An easy to use ViewPager that adds an awesome set of custom swiping animations. Just change your ViewPagers to JazzyViewPagers, two more steps, and you're good to go!",
		"github_url": "https://github.com/jfeinstein10/JazzyViewPager"
	},
	{
		"title": "6Wunderkinder SlidingLayer for Android",
		"tags": ["view", "animation"],
		"author": "6Wunderkinder",
		"description": "A library that provides an easy way to include an autonomous layer/view that slides from the side of your screen and which is fully gesture ready, the same way as our detail view in Wunderlist 2 does. This pattern can also be seen in Google+’s notification center or in Basecamp’s detail view.",
		"github_url": "https://github.com/6wunderkinder/android-sliding-layer-lib"
	},
	{
		"title": "TimesSquare for Android",
		"tags": ["view", "picker", "time"],
		"author": "Square",
		"description": "Standalone Android widget for picking a single date from a calendar view.",
		"github_url": "https://github.com/square/android-times-square"
	},
	{
		"title": "android-process-button",
		"tags": ["view", "animation"],
		"author": "Dmytro Danylyk",
		"description": "Android Buttons With Built-in Progress Meters.",
		"github_url": "https://github.com/dmytrodanylyk/android-process-button"
	},
	{
		"title": "circular-progress-button",
		"tags": ["view", "animation"],
		"author": "Dmytro Danylyk",
		"description": "Android Button which can morph to Circular Progress",
		"github_url": "https://github.com/dmytrodanylyk/circular-progress-button"
	},
	{
		"title": "Android Image Slider",
		"tags": ["view", "image", "animation"],
		"author": "Daimajia",
		"description": "An amazing and convenient Android image slider.",
		"github_url": "https://github.com/daimajia/AndroidImageSlider"
	},
	{
		"title": "TokenAutoComplete",
		"tags": ["view"],
		"author": "splitwise",
		"description": "TokenAutoComplete is a Android Gmail style token auto-complete text field and filter. It's designed to have an extremely simple API to make it easy for anyone to implement this functionality while still exposing enough customization to let you make it awesome.",
		"github_url": "https://github.com/splitwise/TokenAutoComplete"
	},
	{
		"title": "Android PagerSlidingTabStrip",
		"tags": ["view"],
		"author": "Andreas Stütz",
		"description": "An interactive indicator to navigate between the different pages of a ViewPager",
		"github_url": "https://github.com/astuetz/PagerSlidingTabStrip"
	},
	{
		"title": "PanesLibrary",
		"tags": ["view"],
		"author": "Kenrick Rilee",
		"description": "This library makes it ridiculously easy to make native Android apps with multi-pane tablet layouts. On the phone, the app appears as a conventional app with a sliding menu and a content pane where fragments are stacked on top of each other. On the tablet, the menu and all other fragments appear in dynamically added panes of varying sizes.",
		"github_url": "https://github.com/cricklet/Android-PanesLibrary"
	},
	{
		"title": "Tablelayout",
		"tags": ["view"],
		"author": "Esoteric Software",
		"description": "Table-based layout for Java UI toolkits: libgdx, Swing, Android, TWL",
		"github_url": "https://github.com/EsotericSoftware/tablelayout"
	},
	{
		"title": "ParallaxViewPager",
		"tags": ["view"],
		"author": "andraskindler",
		"description": "An easy-to-use ViewPager subclass with parallax background effect for Android apps.",
		"github_url": "https://github.com/andraskindler/parallaxviewpager"
	},
	{
		"title": "ParallaxScrollView",
		"tags": ["view", "scroll"],
		"author": "Christopher Jenkins",
		"description": "A Parallax ScrollView which takes a background and foreground view, in the ParallexScrollView.",
		"github_url": "https://github.com/chrisjenx/ParallaxScrollView"
	},
	{
		"title": "Calligraphy",
		"tags": ["view"],
		"author": "Christopher Jenkins",
		"description": "Custom fonts in Android the easy way.<br><br>Are you fed up of Custom views to set fonts? Or traversing the ViewTree to find TextViews? Yeah me too.",
		"github_url": "https://github.com/chrisjenx/Calligraphy"
	},
	{
		"title": "Paralloid",
		"tags": ["view", "scroll"],
		"author": "Christopher Jenkins",
		"description": "Paralloid - (Pah-rah-loid) The Android Parallax library.",
		"github_url": "https://github.com/chrisjenx/Paralloid"
	},
	{
		"title": "StaggeredGridView",
		"tags": ["view", "adapter view"],
		"author": "Maurycy Wojtowicz",
		"description": "This is a modified version of Android's experimental StaggeredGridView. The StaggeredGridView allows the user to create a GridView with uneven rows similar to how Pinterest looks. Includes own OnItemClickListener and OnItemLongClickListener, selector, and fixed position restore.",
		"github_url": "https://github.com/maurycyw/StaggeredGridView"
	},
	{
		"title": "GraphView",
		"tags": ["view", "graph"],
		"author": "Jonas Gehring",
		"description": "GraphView is a library for Android to programmatically create flexible and nice-looking diagramms. It is easy to understand, to integrate and to customize it.",
		"github_url": "https://github.com/jjoe64/GraphView",
		"home_url": "http://android-graphview.org/"
	},
	{
		"title": "ChartDroid",
		"tags": ["view", "graph"],
		"author": "kostmo",
		"description": "ChartDroid is an Intent-based 'library application' for static chart and graph generation on Android. It can graph/plot/display numerical data in many representations. As a developer, you need only to have your users install the library, then implement a Content Provider according to this simple specification.",
		"google_url": "https://code.google.com/p/chartdroid/"
	},
	{
		"title": "ChartView",
		"tags": ["view", "graph"],
		"author": "nadavfima",
		"description": "Chart view for android.",
		"github_url": "https://github.com/nadavfima/ChartView/"
	},
	{
		"title": "AChartEngine",
		"tags": ["view", "graph"],
		"author": "4viewsoft",
		"description": "This is a charting software library for Android applications. Mobile phones, tablets and other gadgets running Android will probably benefit of this charting library.",
		"home_url": "http://www.achartengine.org/"
	},
	{
		"title": "AndroidPlot",
		"tags": ["view", "graph"],
		"author": "AndroidPlot",
		"description": "AndroidPlot is an API for creating dynamic and static charts within your Android application. It's designed from the ground up for the Android platform, ...",
		"home_url": "http://androidplot.com",
		"bitbucket_url": "https://bitbucket.org/androidplot/androidplot"
	},
	{
		"title": "HoloGraphLibrary",
		"tags": ["view", "graph"],
		"author": "Daniel Nadeau",
		"description": "Graph library for android.",
		"bitbucket_url": "https://bitbucket.org/danielnadeau/holographlibrary"
	},
	{
		"title": "Flot Android Chart",
		"tags": ["view", "graph"],
		"author": "ylinfo2, jxmei2",
		"description": "Flot Android chart is a free charting system making flot works on Android Platform.",
		"google_url": "https://code.google.com/p/flot-android-chart/"
	},
	{
		"title": "EazeGraph",
		"tags": ["view", "graph"],
		"author": "Paul Cech",
		"description": "EazeGraph is an Android library for creating beautiful and fancy charts. Its main goal was to create a lighweight library which is easy to use and highly customizeable with an 'up-to-date'-look.",
		"github_url": "https://github.com/blackfizz/EazeGraph"
	},
	{
		"title": "Android Saripaar",
		"tags": ["validation"],
		"author": "Ragunath Jawahar",
		"description": "Android Saripaar is a simple, yet powerful rule-based UI validation library for Android. It is the SIMPLEST validation library available for Android.",
		"github_url": "https://github.com/ragunathjawahar/android-saripaar"
	},
	{
		"title": "ValidationKomensky for Android",
		"tags": ["validation"],
		"author": "Inmite s.r.o.",
		"description": "A simple library for validating user input in forms using annotations.",
		"github_url": "https://github.com/inmite/android-validation-komensky"
	},
	{
		"title": "Android-Validator",
		"tags": ["validation"],
		"author": "Benjamin Besse",
		"description": "Form Validator Library for Android",
		"github_url": "https://github.com/throrin19/Android-Validator"
	},
	{
		"title": "Adjacent Fragment Pager Sample",
		"tags": ["fragment"],
		"author": "Jake Wharton",
		"description": "Demonstrates how to manage two fragments where portrait displays them in a ViewPager and landscape displays them side-by-side.",
		"github_url": "https://github.com/JakeWharton/adjacent-fragment-pager-sample"
	},
	{
		"title": "Hansel And Gretel",
		"tags": ["fragment"],
		"author": "Jake Wharton",
		"description": "Android library providing bread crumbs to the support library fragments.",
		"github_url": "https://github.com/JakeWharton/HanselAndGretel"
	},
	{
		"title": "Swipe-to-dismiss + NineOldAndroids",
		"tags": ["animation", "adapter view"],
		"author": "Jake Wharton",
		"description": "Port of Roman Nurik's Swipe-to-dismiss sample code to work on all API levels using NineOldAndroids.",
		"github_url": "https://github.com/JakeWharton/SwipeToDismissNOA"
	},
	{
		"title": "ActionBarSherlock",
		"tags": ["action bar"],
		"author": "Jake Wharton",
		"description": "Action bar implementation which uses the native action bar on Android 4.0+ and a custom implementation on pre-4.0 through a single API and theme.",
		"github_url": "https://github.com/JakeWharton/ActionBarSherlock",
		"home_url": "http://actionbarsherlock.com/"
	},
	{
		"title": "Android ViewPagerIndicator",
		"tags": ["animation", "view", "fragment"],
		"author": "Jake Wharton",
		"description": "Paging indicator widgets compatible with the ViewPager from the Android Support Library and ActionBarSherlock. Originally based on Patrik Åkerfeldt's ViewFlow.",
		"github_url": "https://github.com/JakeWharton/Android-ViewPagerIndicator",
		"home_url": "http://viewpagerindicator.com/"
	},
	{
		"title": "Disk LRU Cache",
		"tags": ["cache"],
		"author": "Jake Wharton",
		"description": "Java implementation of a Disk-based LRU cache which specifically targets Android compatibility.",
		"github_url": "https://github.com/JakeWharton/DiskLruCache",
		"home_url": "http://jakewharton.github.io/DiskLruCache/"
	},
	{
		"title": "U+2020",
		"tags": ["dependency", "injection", "sample app"],
		"author": "Jake Wharton",
		"description": "A sample Android app which showcases advanced usage of Dagger among other open source libraries.",
		"github_url": "https://github.com/JakeWharton/u2020"
	},
	{
		"title": "Timber",
		"tags": ["tool", "utility"],
		"author": "Jake Wharton",
		"description": "A logger with a small, extensible API which provides utility on top of Android's normal Log class.",
		"github_url": "https://github.com/JakeWharton/timber",
		"home_url": "http://jakewharton.github.io/timber/"
	},
	{
		"title": "Scalpel",
		"tags": ["test"],
		"author": "Jake Wharton",
		"description": "A surgical debugging tool to uncover the layers under your app.",
		"github_url": "https://github.com/JakeWharton/scalpel"
	},
	{
		"title": "Double Espresso",
		"tags": ["test"],
		"author": "Jake Wharton",
		"description": "A pure Gradle port of the Espresso testing utility for Android!",
		"github_url": "https://github.com/JakeWharton/double-espresso"
	},
	{
		"title": "Paraphrase",
		"tags": ["tool", "plugin"],
		"author": "Jake Wharton",
		"description": "An experimental Gradle plugin which generates compile-safe format string builders.",
		"github_url": "https://github.com/JakeWharton/paraphrase"
	},
	{
		"title": "AndroidStaggeredGrid",
		"tags": ["adapter view", "view"],
		"author": "Atsy, Inc.",
		"description": "An Android staggered grid view which supports multiple columns with rows of varying sizes.<br><br>The StaggeredGridView was developed due to requirements for the Etsy app not met by any existing Android libraries. Namely a stable implementation with the ability to have a different number of columns in landscape & portrait, to sync grid position across orientation changes and support for headers & footers.",
		"github_url": "https://github.com/etsy/AndroidStaggeredGrid"
	},
	{
		"title": "StickyListHeaders",
		"tags": ["adapter view", "scroll"],
		"author": "Emil Sjölander",
		"description": "StickyListHeaders is an Android library that makes it easy to integrate section headers in your ListView. These section headers stick to the top like in the new People app of Android 4.0 Ice Cream Sandwich. This behavior is also found in lists with sections on iOS devices. This library can also be used without the sticky functionality if you just want section headers.",
		"github_url": "https://github.com/emilsjolander/StickyListHeaders"
	},
	{
		"title": "DragSortListView",
		"tags": ["adapter view", "animation", "scroll"],
		"author": "Carl A. Bauer",
		"description": "Android ListView with drag and drop reordering.",
		"github_url": "https://github.com/bauerca/drag-sort-listview"
	},
	{
		"title": "ListViewAnimations ",
		"tags": ["adapter view", "animation", "scroll"],
		"author": "Niek Haarman",
		"description": "An Android library which allows developers to easily add animations to ListView items",
		"github_url": "https://github.com/nhaarman/ListViewAnimations"
	},
	{
		"title": "TwoWayGridView",
		"tags": ["adapter view", "scroll", "view"],
		"author": "Jess Anders",
		"description": "An Android GridView that can be configured to scroll horizontally or vertically.",
		"github_url": "https://github.com/jess-anders/two-way-gridview"
	},
	{
		"title": "JazzyListView",
		"tags": ["adapter view", "view"],
		"author": "Two Toasters",
		"description": "JazzyListView is an extension of ListView designed to animate list item views as they become visible. There are a number of pre-built, bundled effects that can be used by setting the effect in code or an XML layout attribute. Also, it is possible to use a custom effect by implementing a JazzyEffect.",
		"github_url": "https://github.com/twotoasters/JazzyListView"
	},
	{
		"title": "Android QuickReturn Listview",
		"tags": ["adapter view", "scroll"],
		"author": "Lars Werkman",
		"description": "This is an implementation of the QuickReturn UI developed by Roman Nurik and Nick Butcher for a listview.",
		"github_url": "https://github.com/LarsWerkman/QuickReturnListView"
	},
	{
		"title": "Pull To Refresh Views for Android",
		"tags": ["action bar", "adapter view"],
		"author": "Chris Banes",
		"description": "This project aims to provide a reusable Pull to Refresh widget for Android. It was originally based on Johan Nilsson's library (mainly for graphics, strings and animations), but these have been replaced since.",
		"github_url": "https://github.com/chrisbanes/Android-PullToRefresh"
	},
	{
		"title": "Android-BitmapCache",
		"tags": ["cache", "image"],
		"author": "Chris Banes",
		"description": "Android-BitmapCache is a specialised cache, for use with Android Bitmap objects.",
		"github_url": "https://github.com/chrisbanes/Android-BitmapCache"
	},
	{
		"title": "PinnedHeaderListView",
		"tags": ["adapter view", "scroll"],
		"author": "Jimi Smith",
		"description": "A ListView with pinned section headers for Android",
		"github_url": "https://github.com/JimiSmith/PinnedHeaderListView"
	},
	{
		"title": "pinned-section-listview",
		"tags": ["adapter view", "scroll"],
		"author": "Sergej Shafarenka",
		"description": "Easy to use ListView with pinned sections for Android. Pinned section is a header view which sticks to the top of the list until at least one item of that section is visible.",
		"github_url": "https://github.com/beworker/pinned-section-listview"
	},
	{
		"title": "SlideExpandableListView for Android",
		"tags": ["adapter view"],
		"author": "Tjerk Wolterink",
		"description": "Not happy with the Android ExpandableListView android offers? Want something like the Spotify app. This library allows you to have custom listview in wich each list item has an area that will slide-out once the users clicks on a certain button.",
		"github_url": "https://github.com/tjerkw/Android-SlideExpandableListView"
	},
	{
		"title": "Android Swipe-to-Dismiss Sample Code",
		"tags": ["sample app", "adapter view"],
		"author": "Roman Nurik",
		"description": "Android swipe-to-dismiss mini-library and sample code",
		"github_url": "https://github.com/romannurik/Android-SwipeToDismiss",
		"home_url": "https://plus.google.com/+RomanNurik/posts/Fgo1p5uWZLu"
	},
	{
		"title": "Muzei Live Wallpaper",
		"tags": ["sample app"],
		"author": "Roman Nurik",
		"description": "A living museum for your Android home screen.<br><br>Muzei is a live wallpaper that gently refreshes your home screen each day with famous works of art. It also recedes into the background, blurring and dimming artwork to keep your icons and widgets in the spotlight. Simply double touch the wallpaper or open the Muzei app to enjoy and explore the artwork in its full glory.",
		"github_url": "https://github.com/romannurik/muzei"
	},
	{
		"title": "Android Month Calendar Widget Demo",
		"tags": ["sample app", "widget"],
		"author": "Roman Nurik",
		"description": "A simple example of a responsive Month Calendar app widget for Android 4.1+.",
		"github_url": "https://github.com/romannurik/Android-MonthCalendarWidget"
	},
	{
		"title": "Android WizardPager Sample Code",
		"tags": ["sample app", "fragment"],
		"author": "Roman Nurik",
		"description": "Android pager-style wizard flow sample code",
		"github_url": "https://github.com/romannurik/Android-WizardPager",
		"home_url": "https://plus.google.com/+RomanNurik/posts/6cVymZvn3f4"
	},
	{
		"title": "Android Asset Studio",
		"tags": ["tool"],
		"author": "Roman Nurik",
		"description": "A web-based set of tools for generating graphics and other assets that would eventually be in an Android application's res/ directory.",
		"github_url": "https://github.com/romannurik/AndroidAssetStudio",
		"home_url": "http://romannurik.github.io/AndroidAssetStudio/"
	},
	{
		"title": "ExtendedCalendarView",
		"tags": ["time", "view"],
		"author": "tyczj",
		"description": "Currently there is no easy way of showing a calendar with the ability to display events on days, ExtendedCalendarView is meant to solve that problem.",
		"github_url": "https://github.com/tyczj/ExtendedCalendarView"
	},
	{
		"title": "Discrollview",
		"tags": ["view", "scroll"],
		"author": "Flavien Laurent",
		"description": "Regularly, I am pleasantly surprised by websites using a pattern I called the discrollver pattern. I'm sure you already know what I'm talking about but if not, http://vimeo.com/player is a good example. When you scroll, widgets appear from nowhere by fade, translation or scale.<br><br>With DiscrollView, I wanted to import this pattern on Android. This is an 0.0.1 alpha version because you have to do all the transformation work (fade, translation, scale etc) yourself base on a ratio value. I'm going to add some transformation presets (translation from left to right + fade in for example) to make the library more ready to use for lazy developers.",
		"github_url": "https://github.com/flavienlaurent/discrollview"
	},
	{
		"title": "DateTimePicker",
		"tags": ["time", "view"],
		"author": "Flavien Laurent",
		"description": "DateTimePicker is a library which contains the beautiful DatePicker and TimePicker that can be seen in the new Google Agenda app.",
		"github_url": "https://github.com/flavienlaurent/datetimepicker"
	},
	{
		"title": "No boring ActionBar",
		"tags": ["action bar", "sample app"],
		"author": "Flavien Laurent",
		"description": "News Stand app makes the ActionBar not boring!",
		"github_url": "https://github.com/flavienlaurent/NotBoringActionBar",
		"home_url": "http://flavienlaurent.com/blog/2013/11/20/making-your-action-bar-not-boring/"
	},
	{
		"title": "MultiChoiceAdapter",
		"tags": ["adapter view"],
		"author": "ManuelPeinado",
		"description": "MultiChoiceAdapter is an implementation of ListAdapter which adds support for modal multiple choice selection as in the native Gmail app.",
		"github_url": "https://github.com/ManuelPeinado/MultiChoiceAdapter"
	},
	{
		"title": "android-amazing-listview",
		"tags": ["adapter view", "scroll"],
		"author": "yukuku",
		"description": "Adds new features to Android's ListView widget: section headers (e.g. the one used in built-in Contacts applications showing the list of names), item pagination (loading of next page of items) (e.g. the list of applications on Android Market, the list of emails on Gmail app).",
		"google_url": "https://code.google.com/p/android-amazing-listview/"
	},
	{
		"title": "ListBuddies",
		"tags": ["adapter view", "scroll"],
		"author": "Javier Pardo de Santayana Gómez",
		"description": "Android library to achieve in an easy way, the behaviour of the home page in the Expedia app, with a pair of auto-scroll circular parallax ListViews.",
		"github_url": "https://github.com/jpardogo/ListBuddies"
	},
	{
		"title": "FlabbyListView",
		"tags": ["adapter view", "scroll"],
		"author": "Javier Pardo de Santayana Gómez",
		"description": "Android library to display a ListView whose cells are not rigid but flabby and react to ListView scroll.",
		"github_url": "https://github.com/jpardogo/FlabbyListView"
	},
	{
		"title": "GoogleProgressBar",
		"tags": ["view", "progress"],
		"author": "Javier Pardo de Santayana Gómez",
		"description": "Android library to display progress like google does in some of his services.",
		"github_url": "https://github.com/jpardogo/GoogleProgressBar"
	},
	{
		"title": "EasyAdapter For Android",
		"tags": ["adapter view"],
		"author": "ribot",
		"description": "Using AdapterViews has never been so easy. Inspired by the view holder design pattern, this library provides an easier way of linking AdapterViews and the underlying data for that view without having to implement your own Adapter. The EasyAdapter will do the tedious work for you.",
		"github_url": "https://github.com/ribot/easy-adapter"
	},
	{
		"title": "SuperListview",
		"tags": ["adapter view", "progress"],
		"author": "Quentin DOMMERC",
		"description": "This library is making listview way more easy to use. No need to embed the listview in a framelayout to add the progressbar or the emptyview. It's all right here.",
		"github_url": "https://github.com/dommerq/SuperListview"
	},
	{
		"title": "SherlockNavigationDrawer",
		"tags": ["view", "navigation"],
		"author": "Nicolas Jafelle",
		"description": "SherlockNavigationDrawer is the implementation of the latest Google UX component, Navigation Drawer. It should work exactly as Google Drive plus!! It works with ActionBarSherlock and devices with pre HC.",
		"github_url": "https://github.com/nicolasjafelle/SherlockNavigationDrawer"
	},
	{
		"title": "RateMeMaybe",
		"tags": ["rating", "dialog"],
		"author": "Kopfgeldjaeger",
		"description": "Asks the user if (s)he wants to open the Play Store to rate your application when certain requirements are met (see below). This can and should be configured to be very cautious. Don't annoy your users!",
		"github_url": "https://github.com/Kopfgeldjaeger/RateMeMaybe"
	},
	{
		"title": "AppRater",
		"tags": ["rating", "dialog"],
		"author": "CodeChimp.org",
		"description": "AppRater is a library for Android designed to facilitate easy prompting of users to rate your app within the Google Play store or Amazon App Store. It won't prompt until at least 3 days or 7 uses of the app has passed and if the user chooses to rate later the count will start again.",
		"github_url": "https://github.com/codechimp-org/AppRater"
	},
	{
		"title": "AppRate",
		"tags": ["rating", "dialog"],
		"author": "Timothée Jeannin",
		"description": "A friendly library to prompt your users to rate your app.",
		"github_url": "https://github.com/TimotheeJeannin/AppRate"
	},
	{
		"title": "Android library to show 'Rate this app' dialog",
		"tags": ["rating", "dialog"],
		"author": "Keisuke Kobayashi",
		"description": "Android-RateThisApp is an library to show 'Rate this app' dialog.",
		"github_url": "https://github.com/kskkbys/Android-RateThisApp"
	},
	{
		"title": "Gson",
		"tags": ["json", "parse"],
		"author": "Google",
		"description": "Gson is a Java library that can be used to convert Java Objects into their JSON representation. It can also be used to convert a JSON string to an equivalent Java object. Gson can work with arbitrary Java objects including pre-existing objects that you do not have source-code of.",
		"google_url": "https://code.google.com/p/google-gson/"
	},
	{
		"title": "Jackson JSON Processor",
		"tags": ["json", "parse"],
		"author": "FasterXML, LLC",
		"description": "Inspired by the quality and variety of XML tooling available for the Java platform (StAX, JAXB, etc.), the Jackson is a multi-purpose Java library for processing JSON data format. Jackson aims to be the best possible combination of fast, correct, lightweight, and ergonomic for developers.",
		"github_url": "https://github.com/FasterXML/jackson",
		"home_url": "http://wiki.fasterxml.com/JacksonHome"
	},
	{
		"title": "Joda-Time",
		"tags": ["time"],
		"author": "Joda.org",
		"description": "Joda-Time provides a quality replacement for the Java date and time classes. The design allows for multiple calendar systems, while still providing a simple API. The 'default' calendar is the ISO8601 standard which is used by XML. The Gregorian, Julian, Buddhist, Coptic, Ethiopic and Islamic systems are also included, and we welcome further additions. Supporting classes include time zone, duration, format and parsing.",
		"github_url": "https://github.com/JodaOrg/joda-time",
		"home_url": "http://www.joda.org/joda-time/"
	},
	{
		"title": "DATE4J",
		"tags": ["time"],
		"author": "Hirondelle Systems",
		"description": "It's an alternative to Date, Calendar, and related Java classes. The JDK's treatment of dates is likely the single most suctorial aspect of the Java core libraries.",
		"github_url": "https://github.com/IanDarwin/date4j",
		"home_url": "http://www.date4j.net/"
	},
	{
		"title": "Android Empty Layout",
		"tags": ["progress", "adapter view"],
		"author": "Raquib-ul-Alam Kanak",
		"description": "A library for showing different types of layouts when a list view is empty. These layouts can be shown when: the list is loading, the list has no item to display, an error occured trying to load items. Loading animation is also supported.",
		"github_url": "https://github.com/alamkanak/Android-Empty-Layout"
	},
	{
		"title": "ZXing ",
		"tags": ["barcode"],
		"author": "ZXing project",
		"description": "ZXing ('zebra crossing') is an open-source, multi-format 1D/2D barcode image processing library implemented in Java, with ports to other languages.",
		"github_url": "https://github.com/zxing/zxing"
	},
	{
		"title": "OnBarcode",
		"tags": ["barcode"],
		"author": "OnBarcode.com",
		"description": "Barcode SDKs that acceletate IT automation.",
		"github_url": "http://www.onbarcode.com/"
	},
	{
		"title": "EventBus",
		"tags": ["bus"],
		"author": "greenrobot",
		"description": "Android optimized event bus that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality.",
		"github_url": "https://github.com/greenrobot/EventBus"
	},
	{
		"title": "androidquery",
		"tags": ["asynchronous", "task"],
		"author": "Peter Liu",
		"description": "Android-Query (AQuery) is a light-weight library for doing asynchronous tasks and manipulating UI elements in Android. Our goal is to make Android coding simpler, easier, and more fun!",
		"github_url": "https://github.com/androidquery/androidquery",
		"google_url": "https://code.google.com/p/android-query/"
	},
	{
		"title": "Keyczar",
		"tags": ["security"],
		"author": "Steve Weis and Arkajit Dey",
		"description": "Keyczar is an open source cryptographic toolkit designed to make it easier and safer for developers to use cryptography in their applications. Keyczar supports authentication and encryption with both symmetric and asymmetric keys.",
		"home_url": "http://www.keyczar.org/",
		"google_url": "https://code.google.com/p/keyczar/"
	},
	{
		"title": "Android Priority Job Queue",
		"tags": ["asynchronous", "task"],
		"author": "Path",
		"description": "A Job Queue specifically written for Android to easily schedule jobs (tasks) that run in the background, improving UX and application stability.",
		"github_url": "https://github.com/path/android-priority-jobqueue"
	},
	{
		"title": "Guava",
		"tags": ["utility", "cache"],
		"author": "Google",
		"description": "The Guava project contains several of Google's core libraries that we rely on in our Java-based projects: collections, caching, primitives support, concurrency libraries, common annotations, string processing, I/O, and so forth.",
		"google_url": "https://code.google.com/p/guava-libraries/"
	},
	{
		"title": "Otto",
		"tags": ["bus"],
		"author": "Square",
		"description": "Otto is an event bus designed to decouple different parts of your application while still allowing them to communicate efficiently.<br><br>Forked from Guava, Otto adds unique functionality to an already refined event bus as well as specializing it to the Android platform.",
		"github_url": "http://github.com/square/otto",
		"home_url": "http://square.github.io/otto/"
	},
	{
		"title": "Guice",
		"tags": ["dependency", "injection"],
		"author": "Google",
		"description": "Guice (pronounced 'juice') is a lightweight dependency injection framework for Java 6 and above, brought to you by Google.",
		"github_url": "https://github.com/google/guice",
		"google_url": "https://code.google.com/p/google-guice/"
	},
	{
		"title": "Spring Framework",
		"tags": ["dependency", "injection", "rest"],
		"author": "Spring",
		"description": "The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. A key element of Spring is infrastructural support at the application level: Spring focuses on the 'plumbing' of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.",
		"github_url": "https://github.com/spring-projects/spring-framework",
		"home_url": "http://projects.spring.io/spring-framework/"
	},
	{
		"title": "jsoup: Java HTML Parser",
		"tags": ["parse"],
		"author": "Jonathan Hedley",
		"description": "jsoup is a Java library for working with real-world HTML. It provides a very convenient API for extracting and manipulating data, using the best of DOM, CSS, and jquery-like methods.<br><br>jsoup implements the WHATWG HTML5 specification, and parses HTML to the same DOM as modern browsers do.",
		"home_url": "http://jsoup.org"
	},
	{
		"title": "OAK Android Kit",
		"tags": ["utility", "adapter view", "view", "tool"],
		"author": "WillowTree Apps, Inc.",
		"description": "Library to address common hurdles in Android development.",
		"github_url": "https://github.com/willowtreeapps/OAK",
		"home_url": "http://willowtreeapps.github.io/OAK",
	},
	{
		"title": "StandOut",
		"tags": ["view"],
		"author": "Mark Wei",
		"description": "StandOut lets you easily create floating windows in your Android app.",
		"github_url": "https://github.com/pingpongboss/StandOut",
		"home_url": "http://pingpongboss.github.io/StandOut"
	},
	{
		"title": "Crouton",
		"tags": ["notification"],
		"author": "Benjamin Weiss",
		"description": "Context sensitive notifications for Android",
		"github_url": "https://github.com/keyboardsurfer/Crouton"
	},
	{
		"title": "SuperToasts",
		"tags": ["notification"],
		"author": "John Persano",
		"description": "A library that extends the Android toast framework.",
		"github_url": "https://github.com/JohnPersano/SuperToasts"
	},
	{
		"title": "ShowcaseView",
		"tags": ["view", "showcase"],
		"author": "Alex Curran",
		"description": "Highlight the best bits of your app to users quickly, simply, and cool...ly",
		"github_url": "https://github.com/amlcurran/Showcaseview",
		"home_url": "http://amlcurran.github.io/ShowcaseView"
	},
	{
		"title": "RoboDemo",
		"tags": ["view", "showcase"],
		"author": "Stéphane Nicolas",
		"description": "RoboDemo is a ShowCase library for Android to demonstrate to users how a given Activity works.",
		"github_url": "https://github.com/stephanenicolas/RoboDemo"
	},
	{
		"title": "BoundBox",
		"tags": ["test"],
		"author": "Stéphane Nicolas",
		"description": "BoundBox provides an easy way to test an object by accessing all its fields, constructor and methods, public or not. BoundBox breaks encapsulation.",
		"github_url": "https://github.com/stephanenicolas/boundbox"
	},
	{
		"title": "aFileChooser",
		"tags": ["view", "media"],
		"author": "Paul Burke",
		"description": "Android library that provides a file explorer to let users select files on external storage.",
		"github_url": "https://github.com/iPaulPro/aFileChooser"
	},
	{
		"title": "MapNavigator",
		"tags": ["map"],
		"author": "tyczj",
		"description": "Easy to use library to get and display driving directions on Google Maps v2 in Android",
		"github_url": "https://github.com/tyczj/MapNavigator"
	},
	{
		"title": "Android StackBlur",
		"tags": ["image"],
		"author": "Enrique López Mañas",
		"description": "Android StackBlur is a library that can perform a blurry effect on a Bitmap based on a gradient or radius, and return the result. The library is based on the code of Mario Klingemann.",
		"github_url": "https://github.com/kikoso/android-stackblur"
	},
	{
		"title": "Swipeable cards: Tinder-like cards ",
		"tags": ["view"],
		"author": "Enrique López Mañas",
		"description": "A native library providing a Tinder-like cards effect. A card can be constructed using an image and displayed with animation effects, dismiss-to-like and dismiss-to-unlike, and use different sorting mechanisms.",
		"github_url": "https://github.com/kikoso/Swipeable-Cards"
	},
	{
		"title": "NewQuickAction",
		"tags": ["view", "dialog"],
		"author": "Lorensius W. L. T",
		"description": "NewQuickAction is a small android library to create QuickAction dialog.",
		"github_url": "https://github.com/lorensiuswlt/NewQuickAction",
		"home_url": "http://www.londatiga.net/it/how-to-create-quickaction-dialog-in-android/"
	},
	{
		"title": "RefreshActionItem",
		"tags": ["action bar", "progress"],
		"author": "ManuelPeinado",
		"description": "An action bar item which acts both as a refresh button and as a progress indicator.",
		"github_url": "https://github.com/ManuelPeinado/RefreshActionItem"
	},
	{
		"title": "FadingActionBar",
		"tags": ["action bar"],
		"author": "ManuelPeinado",
		"description": "Android library implementing a fading effect for the action bar, similar to the one found in the Play Music app.",
		"github_url": "https://github.com/ManuelPeinado/FadingActionBar"
	},
	{
		"title": "GlassActionBar",
		"tags": ["action bar"],
		"author": "ManuelPeinado",
		"description": "A library that adds a glass-like effect to the action bar.",
		"github_url": "https://github.com/ManuelPeinado/GlassActionBar"
	},
	{
		"title": "Icepick",
		"tags": ["inject", "utility"],
		"author": "Frankie Sardo",
		"description": "Icepick is an Android library that simplifies the lifecycle of save and restore instance state. It uses annotation processing to generate code that does bundle manipulation and key generation, removing lots of boilerplate from your classes.",
		"github_url": "https://github.com/frankiesardo/icepick"
	},
	{
		"title": "StyledDialogs",
		"tags": ["notification", "dialog"],
		"author": "Inmite s.r.o.",
		"description": "A simple library for styling Android dialogs in the Holo theme. It also removes boilerplate code for displaying simple dialogs.",
		"github_url": "https://github.com/inmite/android-styled-dialogs"
	},
	{
		"title": "Update Checker",
		"tags": ["dialog"],
		"author": "Pietro Rampini",
		"description": "UpdateChecker is a class that can be used by Android Developers to increase the number of their apps' updates by showing a 'New update available' Notification or Dialog.<br><br>It checks for new updates downloadable parsing the Store desktop page of your app.",
		"github_url": "https://github.com/rampo/UpdateChecker"
	},
	{
		"title": "GmailLikePullToRefresh",
		"tags": ["action bar", "progress"],
		"author": "learnNcode",
		"description": "Gmail like pull to refresh implementation.",
		"github_url": "https://github.com/learnNcode/GmailLikePullToRefresh"
	},
	{
		"title": "Media Chooser",
		"tags": ["media"],
		"author": "learnNcode",
		"description": "Library to browse & select videos and images from disk.",
		"github_url": "https://github.com/learnNcode/MediaChooser"
	},
	{
		"title": "C2Call",
		"tags": ["media"],
		"author": "C2Call",
		"description": "C2Call empowers your apps' communication with its cutting-edge, cross-platform 7-way Group Video Calling, Voice and Instant Messaging featured technology for Mobiles, Tablets and Desktops.",
		"home_url": "http://www.c2call.com"
	},
	{
		"title": "ImageLayout",
		"tags": ["image", "view"],
		"author": "ManuelPeinado",
		"description": "A layout that arranges its children in relation to a background image. The layout of each child is specified in image coordinates (pixels), and the conversion to screen coordinates is performed automatically.",
		"github_url": "https://github.com/ManuelPeinado/ImageLayout"
	},
	{
		"title": "EdgeEffectOverride",
		"tags": ["scroll"],
		"author": "AndroidAlliance",
		"description": "EdgeEffectOverride is library designed to help override the blue overscroll_edge and overscroll_glow effects used by the the EdgeEffect class.",
		"github_url": "https://github.com/AndroidAlliance/EdgeEffectOverride"
	},
	{
		"title": "HoloAccent",
		"tags": ["view"],
		"author": "Borja Lopez Urkidi",
		"description": "Android library to customize the Holo theme with a custom accent color. The color can even be set programmatically, allowing the UI to change dynamically.",
		"github_url": "https://github.com/negusoft/holoaccent"
	},
	{
		"title": "SuperToolTips ",
		"tags": ["view", "showcase"],
		"author": "Niek Haarman",
		"description": "SuperToolTips is an Open Source Android library that allows developers to easily create Tool Tips for views. Feel free to use it all you want in your Android apps provided that you cite this project and include the license in your app.",
		"github_url": "https://github.com/nhaarman/supertooltips"
	},
	{
		"title": "Ergo",
		"tags": ["asynchronous", "task"],
		"author": "Niek Haarman",
		"description": "Ergo is an Android library for easily executing tasks using IntentServices. Feel free to use it all you want in your Android apps provided that you cite this project and include the license in your app.",
		"github_url": "https://github.com/nhaarman/Ergo"
	},
	{
		"title": "Mizuu - media indexer for Android",
		"tags": ["sample app", "media"],
		"author": "Michell Bak",
		"description": "Popular media indexer app for Android.",
		"github_url": "https://github.com/MizzleDK/Mizuu",
		"home_url": "http://mizuu.tv/"
	},
	{
		"title": "Googe I/O",
		"tags": ["sample app"],
		"author": "Google",
		"description": "Google I/O is a developer conference held each year with two days of deep technical content featuring technical sessions and hundreds of demonstrations from developers showcasing their technologies.<br><br>This project is the Android app for the conference. The app supports devices running Android 4.0+, and is optimized for phones and tablets of all shapes and sizes. It also contains an Android Wear integration.",
		"github_url": "https://github.com/google/iosched/"
	},
	{
		"title": "Philm",
		"tags": ["sample app"],
		"author": "Chris Banes",
		"description": "Movie collection and information app for Android.",
		"github_url": "https://github.com/chrisbanes/philm"
	},
	{
		"title": "PhotoProcessing",
		"tags": ["image"],
		"author": "Chris Banes",
		"description": "A demo of how you can process photos leveraging the ndk.",
		"github_url": "https://github.com/chrisbanes/PhotoProcessing"
	},
	{
		"title": "SeriesGuide Show Manager",
		"tags": ["sample app"],
		"author": "Uwe Trottmann",
		"description": "Manage (re)watching your favorite TV shows on your Android devices.",
		"github_url": "https://github.com/UweTrottmann/SeriesGuide"
	},
	{
		"title": "SlidingMenu",
		"tags": ["navigation"],
		"author": "Jeremy Feinstein",
		"description": "SlidingMenu is an Open Source Android library that allows developers to easily create applications with sliding menus like those made popular in the Google+, YouTube, and Facebook apps. Feel free to use it all you want in your Android apps provided that you cite this project and include the license in your app.",
		"github_url": "https://github.com/jfeinstein10/SlidingMenu"
	},
	{
		"title": "DominantColors",
		"tags": ["image"],
		"author": "Jeremy Feinstein",
		"description": "Android, k-means clustering based class for pulling out the dominant colors of an image. Doing other useful things with those colors.",
		"github_url": "https://github.com/jfeinstein10/DominantColors"
	},
	{
		"title": "RESTProvider ",
		"tags": ["rest", "network", "internet", "database", "cache"],
		"author": "Novoda",
		"description": "The RESTProvider aims to make it easy to access REST service (or any online data format through mainly HTTP calls) and cache it locally into a SQLite database. It permits offline usage and some sort of syncing mechanism against a snapshot of user data.",
		"github_url": "https://github.com/novoda/RESTProvider"
	},
	{
		"title": "ImageLoader",
		"tags": ["image", "network", "cache", "internet"],
		"author": "Novoda",
		"description": "ImageLoader is a simple library that makes it easy to download, display and cache remote images in Android apps. Image download happens off the UI thread and the images are cached with a two-level in-memory/SD card cache.",
		"github_url": "https://github.com/novoda/ImageLoader"
	},
	{
		"title": "droidQuery",
		"tags": ["animation", "network", "database", "utility"],
		"author": "Phil Brown",
		"description": "droidQuery is an Android port of jQuery, and is designed to be as syntactically alike as possible in Java.",
		"github_url": "https://github.com/phil-brown/droidQuery",
		"home_url": "http://phil-brown.github.io/droidQuery/"
	},
	{
		"title": "enroscar",
		"tags": ["asynchronous", "task"],
		"author": "Stanfy",
		"description": "A set of Android tools that facilitate apps development",
		"github_url": "https://github.com/stanfy/enroscar"
	},
	{
		"title": "Device Art Generator",
		"tags": ["tool"],
		"author": "Google",
		"description": "The device art generator enables you to quickly wrap app screenshots in real device artwork. This provides better visual context for your app screenshots on your website or in other promotional materials.",
		"home_url": "http://developer.android.com/distribute/tools/promote/device-art.html"
	},
	{
		"title": "Device Frame Generator",
		"tags": ["tool"],
		"author": "Prateek Srivastava",
		"description": "The device art generator allows you to quickly wrap your app screenshots in real device artwork. This provides better visual context for your app screenshots on your web site or in other promotional materials.<br><br>This is a port of the webapp Device Frame Generator by +Roman Nurik, developed to run natively on Android.",
		"home_url": "http://f2prateek.com/android-device-frame-generator/",
		"github_url": "https://github.com/f2prateek/android-device-frame-generator"
	},
	{
		"title": "ProgressButton",
		"tags": ["progress", "view"],
		"author": "Prateek Srivastava",
		"description": "ProgressButton is a custom progress indicator with a tiny footprint. The default implementation provides a pin progress button as seen on the Android design site.",
		"github_url": "https://github.com/f2prateek/progressbutton"
	},
	{
		"title": "Placeit",
		"tags": ["tool"],
		"author": "Freshout",
		"description": "Send an img or url to go@placeit.net ⇆ get design comps.",
		"home_url": "https://placeit.net/"
	},
	{
		"title": "Android Snippets",
		"tags": ["tool"],
		"author": "Android Snippets",
		"description": "AndroidSnippets is a community driven website for finding, exploring, sharing and improving source code snippets for Android.",
		"home_url": "http://www.androidsnippets.com/"
	},
	{
		"title": "Android Drawable Factory",
		"tags": ["tool", "image"],
		"author": "Tiziano Basile",
		"description": "An application to create appropriate Drawable resources for you Android app.",
		"github_url": "https://github.com/tizionario/AndroidDrawableFactory"
	},
	{
		"title": "Android Dev Tools",
		"tags": ["tool"],
		"author": "KP BIRD",
		"description": "Collection of android tools.",
		"home_url": "http://www.kpbird.com/p/android-dev-tools.html"
	},
	{
		"title": "jsonschema2pojo",
		"tags": ["tool", "parse"],
		"author": "Joe Littlejohn",
		"description": "Generate Plain Old Java Objects from JSON or JSON-Schema.",
		"github_url": "https://github.com/joelittlejohn/jsonschema2pojo",
		"home_url": "http://www.jsonschema2pojo.org/"
	},
	{
		"title": "Get Localization",
		"tags": ["tool"],
		"author": "Get Localization Ltd.",
		"description": "Smartest way to translate your app, website or documents.",
		"home_url": "http://www.getlocalization.com/"
	},
	{
		"title": "JSON Generator",
		"tags": ["tool", "parse"],
		"author": "Vazha Omanashvili",
		"description": "We've all faced the problem of lack of information in our app. All interfaces seem lifeless and empty. Debugging with no data is also not simple.<br><br>I think that each of us has at least once in their lives created a bunch of files with JSON data, but they were just one object propagated without unique fields. JSON Generator was created in order to help with this. It provides an opportunity generate any data and in any quantity. Edit template, click 'Generate' and you're done.",
		"home_url": "http://www.json-generator.com/",
	},
	{
		"title": "lorempixel",
		"tags": ["tool", "image"],
		"author": "a tiny free service by ",
		"description": "Placeholder Images for every case. Webdesign or Print. It's simple and absolutely free!",
		"home_url": "http://lorempixel.com/"
	},
	{
		"title": "TinyPNG",
		"tags": ["tool", "image"],
		"author": "TinyPNG",
		"description": "Shrink PNG files. Advanced lossy compression for PNG images that preserves full alpha transparency.",
		"home_url": "https://tinypng.com/"
	},
	{
		"title": "Android Button Maker",
		"tags": ["tool"],
		"author": "Angrytools",
		"description": "Android Button Maker is online tool to generate buttons code for Android Apps. Android API provide Drawable Resources where XML file defines geometric shape, including colors, border and gradients.<br><br>These button is generating based on shape drawable XML code which load faster compare to normal png buttons. You can customize button properties in setting panel and get source code.",
		"home_url": "http://angrytools.com/android/button/"
	},
	{
		"title": "Android Layout Finder",
		"tags": ["tool"],
		"author": "Jesper Borgstrup",
		"description": "The Android Layout Finder helps you create the code that ties your Android UI and Java code together.<br><br>It's real easy! Just paste your Android XML layout code in the first text field, pick the views that you need, and your code is automatically generated for you.<br><br>No more typing out all those nearly identical findViewById() and findFragmentById() calls in your activities or fragments whenever you change your Android layouts.",
		"home_url": "https://www.buzzingandroid.com/tools/android-layout-finder/"
	},
	{
		"title": "Android DPI Calculator",
		"tags": ["tool"],
		"author": "martincohen",
		"description": "Enter values for the source dpi and the utility will fill in others. The second row is for your convenience.",
		"home_url": "http://coh.io/adpi/"
	},
	{
		"title": "Android Icons",
		"tags": ["tool", "resources"],
		"author": "Guenther Beyer and Opoloo",
		"description": "250 icons in 5 sizes and 14 colors. Handcrafted, pixel perfect.<br><br>Optimized for Ice Cream Sandwich, Jelly Bean & the Web.<br><br>250 developer icons that work perfectly in your Android app, mobile interface, or website – in 5 sizes and 14 colors, including vector sources and a friendly license.",
		"home_url": "http://www.androidicons.com/"
	},
	{
		"title": "Free Design Resources",
		"tags": ["resources"],
		"author": "Taylor Ling",
		"description": "Inspiration source for Android Designers and Developers.",
		"home_url": "http://androiduiux.com/free-design-resources/"
	},
	{
		"title": "Pencil Project",
		"tags": ["tool"],
		"author": "Evolus",
		"description": "An open-source GUI prototyping tool that's available for ALL platforms.<br><br>Pencil is built for the purpose of providing a free and open-source GUI prototyping tool that people can easily install and use to create mockups in popular desktop platforms.",
		"home_url": "http://pencil.evolus.vn/",
	},
	{
		"title": "ButterKnifeZelezny",
		"tags": ["tool"],
		"author": "Inmite s.r.o.",
		"description": "Android Studio plug-in for generating ButterKnife injections from selected layout XML.",
		"github_url": "https://github.com/inmite/android-butterknife-zelezny"
	},
	{
		"title": "Fluid UI",
		"tags": ["tool"],
		"author": "Fluid software",
		"description": "Fast and friendly mobile prototyping.",
		"home_url": "http://fluidui.com"
	},
	{
		"title": "Android Cheatsheet for Graphic Designers",
		"tags": ["tool"],
		"author": "Petr Nohejl",
		"description": "Graphic designers aren't programmers and sometimes don't know how to properly prepare graphic assets for developers. This simple cheatsheet should help them to do their job better, and to simplify developers' lives.",
		"github_url": "https://github.com/petrnohejl/Android-Cheatsheet-For-Graphic-Designers/",
		"home_url": "http://petrnohejl.github.io/Android-Cheatsheet-For-Graphic-Designers/"
	},
	{
		"title": "AndroidDesign.Tips",
		"tags": ["tool"],
		"author": "Tim Green and Ben Scott",
		"description": "Android design tips.",
		"home_url": "http://www.androiddesign.tips"
	},
	{
		"title": "SmoothReviews",
		"tags": ["tool"],
		"author": "SmoothMobile",
		"description": "Get unlimited free reviews for your app by reviewing other apps.",
		"home_url": "http://smoothreviews.com"
	},
	{
		"title": "Smooth Localize",
		"tags": ["tool"],
		"author": "SmoothMobile",
		"description": "Increase your app’s audience by 280% in just 10 minutes.",
		"home_url": "http://smoothlocalize.com/"
	},
	{
		"title": "Libraries for developers",
		"tags": ["library collection"],
		"author": "Desarrollo Droide",
		"description": "This application provides a collection of third party libraries, as a developer this application is essential for you.<br><br>You will have information about the author, captures, license, description, links of the library and you can try a working example within the application.<br><br>Recently it has added a tab with SNIPPETS that will be updated constantly.<br><br>In order to collect the largest possible number of libraries the version of the application is ICS.<br><br>Most applications are listed on github, others are from google code and bitbucket.<br><br>From this application we want to thank all the developers who publish their libraries for the benefit of others.<br><br>We hope that developers might find it useful.",
		"github_url": "",
		"home_url": "https://play.google.com/store/apps/details?id=com.desarrollodroide.repos",
		"google_url": ""
	},
	{
		"title": "AppBrain Development Tools",
		"tags": ["library collection"],
		"author": "AppBrain",
		"description": "Collection of development tools.",
		"home_url": "http://www.appbrain.com/stats/libraries/dev"
	},
	{
		"title": "The Android Arsenal",
		"tags": ["library collection"],
		"author": "Vladislav Bauer",
		"description": "A categorized directory of free libraries and tools for Android",
		"home_url": "http://android-arsenal.com",
	},
	{
		"title": "DevDrawer",
		"tags": ["library collection"],
		"author": "OwenTech",
		"description": "DevDrawer is a widget based app for developers who are constantly installing / uninstalling / clearing data on their projects.<br><br>I find myself searching through the appdrawer everytime I re-install an application. With this widget you provide a package filter, when an app is installed and it matches the package filter the app will be automatically added to the widget.",
		"home_url": "https://play.google.com/store/apps/details?id=com.owentech.DevDrawer"
	},
	{
		"title": "DevAppsDirect - Demo Market",
		"tags": ["library collection"],
		"author": "inAppSquared",
		"description": "Developer Apps Direct is a large and growing collection of library demos. We make it fast and easy for app developers to discover great libraries and run their demo with the press of a button. No more hunting down apks or downloading and compiling source code. You can try dozens of libraries in just a few minutes!<br><br>Stop making your job as an app developer harder by re-inventing the wheel. Browse our great collection of library demos and discover tools to make your app great in less time.",
		"home_url": "https://play.google.com/store/apps/details?id=com.inappsquared.devappsdirect"
	},
	{
		"title": "AndroidLibs",
		"tags": ["library collection"],
		"author": "AlexMahrt",
		"description": "Collection of android libraries.",
		"home_url": "http://android-libs.com"
	},
	{
		"title": "Awesome Android",
		"tags": ["library collection"],
		"author": "Jürgen Stumpp",
		"description": "A curated list of awesome Android packages and resources.",
		"github_url": "https://github.com/JStumpp/awesome-android"
	},
	{
		"title": "android-security-awesome",
		"tags": ["library collection"],
		"author": "ashishb",
		"description": "A collection of android security related resources.",
		"github_url": "https://github.com/ashishb/android-security-awesome"
	},
	{
		"title": "Android Libraries and Resources",
		"tags": ["library collection"],
		"author": "Raquib-ul-Alam (Kanak)",
		"description": "List of awesome libraries, tools and other resources for android app development. Organized and categorized for filtering and searching.",
		"github_url": "https://github.com/alamkanak/android-libraries-and-resources",
		"home_url": "http://alamkanak.github.io/android-libraries-and-resources"
	},
	{
		"title": "CircularFloatingActionMenu",
		"tags": ["view"],
		"author": "Oğuz Bilgener",
		"description": "An animated, customizable circular floating menu for Android, inspired by Path app.",
		"github_url": "https://github.com/oguzbilgener/CircularFloatingActionMenu"
	},
	{
		"title": "FloatingActionButton",
		"tags": ["view"],
		"author": "Melnykov Oleksandr",
		"description": "Android Google+ like floating action button.",
		"github_url": "https://github.com/makovkastar/FloatingActionButton"
	},
	{
		"title": "Magnet",
		"tags": ["view"],
		"author": "Prem",
		"description": "A library that makes it very simple to create a window icon, similar to Facebooks chat icon.",
		"github_url": "https://github.com/premnirmal/Magnet"
	},
	{
		"title": "CircleView",
		"tags": ["view"],
		"author": "Pavlos-Petros Tournaris",
		"description": "A Circle View containing Title and Subtitle.",
		"github_url": "https://github.com/pavlospt/CircleView"
	},
	{
		"title": "Tape",
		"tags": ["task"],
		"author": "Square",
		"description": "Tape is a collection of queue-related classes for Android and Java by Square, Inc.<br><br>QueueFile is a lightning-fast, transactional, file-based FIFO. Addition and removal from an instance is an O(1) operation and is atomic. Writes are synchronous; data will be written to disk before an operation returns. The underlying file is structured to survive process and even system crashes and if an I/O exception is thrown during a mutating change, the change is aborted.<br><br>An ObjectQueue represents an ordering of arbitrary objects which can be backed either by the filesystem (via QueueFile) or in memory only.<br><br>TaskQueue is a special object queue which holds Tasks, objects which have a notion of being executed. Instances are managed by an external executor which prepares and executes enqueued tasks.",
		"home_url": "http://square.github.io/tape",
		"github_url": "https://github.com/square/tape"
	},
	{
		"title": "AssertJ Android",
		"tags": ["test"],
		"author": "Square",
		"description": "A set of AssertJ assertions geared toward testing Android.<br><br>Writing tests is not the most glamorous part of developing an Android application but it is an invaluable one. Using libraries like JUnit and AssertJ provide a great starting point for writing tests.<br><br>This library is an extension of AssertJ which aims to make it even easier to test Android.",
		"home_url": "http://square.github.io/assertj-android",
		"github_url": "https://github.com/square/assertj-android"
	},
	{
		"title": "Spoon",
		"tags": ["test"],
		"author": "Square",
		"description": "Distributing instrumentation tests to all your Androids.",
		"home_url": "http://square.github.io/spoon",
		"github_url": "https://github.com/square/spoon"
	},
	{
		"title": "Seismic",
		"tags": ["utility"],
		"author": "Square",
		"description": "Android device shake detection.",
		"github_url": "https://github.com/square/seismic"
	},
	{
		"title": "FlipView",
		"tags": ["view"],
		"author": "Emil Sjölander",
		"description": "A small, easy to use android library for implementing flipping between views as seen in the popular Flipboard application.",
		"github_url": "https://github.com/emilsjolander/android-FlipView"
	},
	{
		"title": "android-flip",
		"tags": ["view"],
		"author": "OpenAphid-Engine",
		"description": "A component for flip animation on Android, which is similar to the effect in Flipboard iPhone/Android.",
		"home_url": "http://openaphid.github.io/",
		"github_url": "https://github.com/openaphid/android-flip"
	},
	{
		"title": "Gradle, please",
		"tags": ["tool", "library collection"],
		"author": "Chris Broadfoot",
		"description": "Get gradle dependency statements of any library.",
		"home_url": "http://gradleplease.appspot.com"
	},
	{
		"title": "SelectorChapek for Android",
		"tags": ["tool", "plugin"],
		"author": "Inmite s.r.o.",
		"description": "Android Studio plugin which automatically generates drawable selectors from appropriately named resources.",
		"github_url": "https://github.com/inmite/android-selector-chapek"
	},
	{
		"title": "CodePath Android Cliffnotes",
		"tags": ["library collection", "learning resources"],
		"author": "CodePath",
		"description": "Extensive Open-Source Guides for Android Developers.",
		"home_url": "http://guides.thecodepath.com/",
		"github_url": "https://github.com/thecodepath/android_guides"
	},
	{
		"title": "GitHub Android App",
		"tags": ["sample app"],
		"author": "Github",
		"description": "GitHub Android App.",
		"github_url": "https://github.com/github/android"
	},
	{
		"title": "Astrid - Task Management Done Right",
		"tags": ["sample app"],
		"author": "todoroo",
		"description": "Astrid strives to be a simple and effective organization tool for Google Android phones. It comes with features like reminders, tagging, widgets, and integration with online synchronization services.",
		"home_url": "http://www.astrid.com",
		"github_url": "https://github.com/todoroo/astrid"
	},
	{
		"title": "mobileorg-android",
		"tags": ["sample app"],
		"author": "Matthew Jones",
		"description": "An implementation of MobileOrg for the Android platform",
		"home_url": "http://wiki.github.com/matburt/mobileorg-android/",
		"github_url": "https://github.com/matburt/mobileorg-android"
	},
	{
		"title": "Gaug.es Android App",
		"tags": ["sample app"],
		"author": "Fastest Forward",
		"description": "Gaug.es Android App.",
		"github_url": "https://github.com/fastestforward/gauges-android"
	},
	{
		"title": "tumblrsnap",
		"tags": ["sample app"],
		"author": "CodePath",
		"description": "A fun photos app built on Tumbr.",
		"github_url": "https://github.com/thecodepath/tumblrsnap/tree/portfolio"
	},
	{
		"title": "VLC media player",
		"tags": ["sample app"],
		"author": "VideoLAN",
		"description": "VLC is a popular libre and open source media player and multimedia engine,
used by a large number of individuals, professionals, companies and
institutions. Using open source technologies and libraries, VLC has been
ported to most computing platforms, including GNU/Linux, Windows, Mac OS X,
BSD, iOS and Android.",
		"home_url": "http://www.videolan.org/vlc",
		"github_url": "https://github.com/videolan/vlc"
	},
	{
		"title": "RoboGuice",
		"tags": ["tool", "injection"],
		"author": "RoboGuice",
		"description": "RoboGuice 2 smoothes out some of the wrinkles in your Android development experience and makes things simple and fun. Do you always forget to check for null when you getIntent().getExtras()? RoboGuice 2 will help you. Think casting findViewById() to a TextView shouldn’t be necessary? RoboGuice 2 is on it.",
		"github_url": "https://github.com/roboguice/roboguice"
	},
	{
		"title": "RoundedImageView",
		"tags": ["image", "view"],
		"author": "Vince Mi",
		"description": "A fast ImageView (and Drawable) that supports rounded corners (and ovals or circles) based on the original example from Romain Guy.",
		"github_url": "https://github.com/vinc3m1/RoundedImageView"
	},
	{
		"title": "Satellite Menu",
		"tags": ["view", "dialog"],
		"author": "Siyamed SINIR",
		"description": "'Path' has a very attractive menu sitting on the left bottom corner of the screen. Satellite Menu is the open version of this menu.",
		"github_url": "https://github.com/siyamed/android-satellite-menu/"
	},
	{
		"title": "ArcMenu",
		"tags": ["view", "dialog"],
		"author": "daCapricorn",
		"description": "An android custom view which looks like the menu in Path 2.0 (for iOS).",
		"github_url": "https://github.com/daCapricorn/ArcMenu"
	},
	{
		"title": "AndroidCharts",
		"tags": ["view", "graph"],
		"author": "HackPlan",
		"description": "An easy-to-use Android charts library with animation.",
		"github_url": "https://github.com/HackPlan/AndroidCharts"
	},
	{
		"title": "Barcode Scanner",
		"tags": ["barcode"],
		"author": "Dushyanth Maguluru",
		"description": "Barcode Scanner Libraries for Android.",
		"github_url": "https://github.com/dm77/barcodescanner"
	},
	{
		"title": "android-quick-response-code",
		"tags": ["barcode"],
		"author": "Justin Wetherell",
		"description": "This is a port of the ZXing (version 2.1) project but reduced in size and scope. It can be used as a direct call from any Android project instead of using the ZXing Intents mechanism.",
		"google_url": "https://code.google.com/p/android-quick-response-code/"
	},
	{
		"title": "Android Libs",
		"tags": ["library collection"],
		"author": "androidlibs.org",
		"description": "Android Libs Org is a place to gather all open source Android UI Views, Android Libraries, Android Tools and Plugins.",
		"home_url": "http://androidlibs.org",
	},
	{
		"title": "Android Weekly",
		"tags": ["library collection", "learning resources"],
		"author": "Android Weekly",
		"description": "Free weekly Android development newsletter.",
		"home_url": "http://androidweekly.net/"
	},
	{
		"title": "robolectric",
		"tags": ["test"],
		"author": "",
		"description": "Test-Drive Your Android Code. Running tests on an Android emulator or device is slow! Building, deploying, and launching the app often takes a minute or more. That’s no way to do TDD. There must be a better way.",
		"home_url": "http://robolectric.org/",
		"github_url": ""
	},
	{
		"title": "Android-ActionItemBadge",
		"tags": ["action bar"],
		"author": "Mike Penz",
		"description": "ActionItemBadge is a library which offers a simple and easy to use method to add a badge to your action item!",
		"home_url": "http://mikepenz.github.io/Android-ActionItemBadge",
		"github_url": "https://github.com/mikepenz/Android-ActionItemBadge"
	},
	{
		"title": "https://github.com/mikepenz/AboutLibraries",
		"tags": ["library collection"],
		"author": "Mike Penz",
		"description": "AboutLibraries is a library to offer you all the information you need of your libraries!",
		"home_url": "http://mikepenz.github.io/AboutLibraries",
		"github_url": "https://github.com/mikepenz/AboutLibraries"
	},
	{
		"title": "Discreet App Rate",
		"tags": ["rating", "notification"],
		"author": "Nicolas POMEPUY",
		"description": "A lightweight non intrusive app rate reminder for Android.",
		"home_url": "http://nicolaspomepuy.fr/non-intrusive-app-rate",
		"github_url": "https://github.com/PomepuyN/discreet-app-rate"
	},
	{
		"title": "FButton",
		"tags": ["view"],
		"author": "Le Van Hoang",
		"description": "FButton is a custom Button of Android with 'Flat UI' concept. FButton's design get inspiration from designmono. This library is very small and highly customizable.",
		"github_url": "https://github.com/hoang8f/android-flat-button"
	},
	{
		"title": "QuickReturn",
		"tags": ["adapter view", "scroll"],
		"author": "Etienne Lawlor",
		"description": "QuickReturn is a library which showcases the QuickReturn UI pattern. It can be used for header views, footer views, or both header views and footer views.",
		"github_url": "https://github.com/lawloretienne/QuickReturn"
	},
	{
		"title": "Android Sliding Up Panel",
		"tags": ["navigation", "view"],
		"author": "Umano",
		"description": "This library provides a simple way to add a draggable sliding up panel (popularized by Google Music, Google Maps and Rdio) to your Android application.",
		"github_url": "https://github.com/umano/AndroidSlidingUpPanel"
	},
	{
		"title": "Cupboard",
		"tags": ["database"],
		"author": "Qbus",
		"description": "Cupboard for Android is simple persistence that gets out of your way and is easy to add to your existing code base.",
		"bitbucket_url": "https://bitbucket.org/qbusict/cupboard"
	},
	{
		"title": "SmoothProgressBar",
		"tags": ["progress", "view"],
		"author": "Antoine Merle",
		"description": "A small Android library allowing you to have a smooth and customizable horizontal indeterminate ProgressBar.",
		"github_url": "https://github.com/castorflex/SmoothProgressBar"
	},
	{
		"title": "HorizontalListView",
		"tags": ["adapter view", "scroll"],
		"author": "MeetMe",
		"description": "HorizontalListView is an Android ListView widget which scrolls in a horizontal manner (in contrast with the SDK-provided ListView which scrolls vertically).",
		"github_url": "https://github.com/MeetMe/Android-HorizontalListView"
	},
	{
		"title": "Horizontal Variable ListView",
		"tags": ["adapter view", "scroll"],
		"author": "Alessandro Crugnola",
		"description": "Horizontal list view for Android which allows variable items widths.",
		"github_url": "https://github.com/sephiroth74/HorizontalVariableListView"
	},
	{
		"title": "ignition",
		"tags": ["network", "image", "view", "internet", "cache"],
		"author": "Matthias Käppler",
		"description": "Kick-starts Android application development.",
		"github_url": "https://github.com/mttkay/ignition"
	},
	{
		"title": "RxJava",
		"tags": ["asynchronous", "network", "task"],
		"author": "Netflix",
		"description": "Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM.",
		"github_url": "https://github.com/Netflix/RxJava"
	},
	{
		"title": "davdroid",
		"tags": ["sample app"],
		"author": "rfc2822",
		"description": "CalDAV/CardDAV synchronization for Android 4+ devices",
		"home_url": "http://davdroid.bitfire.at",
		"github_url": "https://github.com/rfc2822/davdroid"
	},
	{
		"title": "ImageViewTouch",
		"tags": ["view", "image"],
		"author": "Alessandro Crugnola",
		"description": "ImageViewTouch is an android ImageView widget with zoom and pan capabilities. This is an implementation of the ImageView widget used in the Gallery app of the Android opensource project.",
		"github_url": "https://github.com/sephiroth74/ImageViewZoom"
	},
	{
		"title": "SimpleNoSQL",
		"tags": ["database"],
		"author": "Colin Miller",
		"description": "A simple NoSQL client for Android. Meant as a document store using key/value pairs and some rudimentary querying. Useful for avoiding the hassle of SQL code.",
		"github_url": "https://github.com/Jearil/SimpleNoSQL"
	},
	{
		"title": "Android Checkout Library",
		"tags": ["internet"],
		"author": "Sergey Solovyev",
		"description": "Checkout is a library for Android In-App Billing (v3). The main goal is to reduce work which should be done by developers who want to integrate in-app purchases in their products. The project is inspired by Volley library and is designed to be easy to use, fast and flexible.",
		"github_url": "https://github.com/serso/android-checkout"
	},
	{
		"title": "Pixel Dungeon",
		"tags": ["sample app"],
		"author": "Watabou",
		"description": "Traditional roguelike game with pixel-art graphics and simple interface.",
		"github_url": "https://github.com/watabou/pixel-dungeon"
	},
	{
		"title": "Lint Cleaner Plugin",
		"tags": ["tool"],
		"author": "Marco Rodriguez-Suarez",
		"description": "A Gradle Plugin for removing unused resources in Android projects.",
		"github_url": "https://github.com/marcoRS/lint-cleaner-plugin"
	}

];


$(document).ready(function() {
	addAllTags();
	addAllItems();
	setupIsotope();
	setupFilter();
	setupSearch();
});

addAllTags = function(){
	tags.sort();
	for (var i = 0; i < tags.length; i++) {
		$(".filters").append('<button class="btn btn-filter" type="button" data-filter="'+tags[i].replace(/\s/g, "-").toLowerCase()+'">'+tags[i]+'</button>');
	};
}

addAllItems = function(){
	// Sort the array.
	items.sort(function(a,b) { 
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
		return 0;
	});

	for (var i = 0; i < items.length; i++) {

		// Prepare button urls.
		buttonsString = "";
		if (items[i].home_url) buttonsString+= '<a href="'+items[i].home_url+'" class="btn btn-primary"><i class="fa fa-home"></i> Homepage</a>';
		if (items[i].github_url) buttonsString+= '<a href="'+items[i].github_url+'" class="btn btn-primary"><i class="fa fa-github-alt"></i> Github</a>';
		if (items[i].google_url) buttonsString+= '<a href="'+items[i].google_url+'" class="btn btn-primary"><i class="fa fa-google"></i> Google Code</a>';
		if (items[i].bitbucket_url) buttonsString+= '<a href="'+items[i].bitbucket_url+'" class="btn btn-primary"><i class="fa fa-bitbucket"></i> Bitbucket</a>';

		// Prepare author html.
		userString = "";
		if (items[i].author) userString = '<div class="author meta"><i class="fa fa-user"></i> <span class="author">'+items[i].author+'</span></div>';

		// Prepare tags.
		tagsString = "";
		tagsData = "";
		if (items[i].tags && items[i].tags.length>0) {
			for (var j = 0; j < items[i].tags.length; j++) {
				tagsString += items[i].tags[j];
				tagsData += items[i].tags[j].replace(/\s/g, "-");
				if (j < items[i].tags.length-1) {
					tagsString += ", ";
					tagsData += " ";
				}
			}
		}

		// Append the html.
		$("#items").append(
			'<section class="item mix" data-group="'+tagsData+'">'+
				'<a href="'+(items[i].home_url?items[i].home_url:(items[i].github_url?items[i].github_url:items[i].google_url))+'" class="item-title"><h3>'+items[i].title+'</h3></a>'+
				userString+
				'<div class="tags-container meta"><i class="fa fa-tag"></i> <span class="tags">'+tagsString+'</span></div>'+
				'<div class="description">'+items[i].description+'</div>'+
				'<div class="buttons-container">'+buttonsString+'</div>'+
			'</section>'
		);
	};
}


setupIsotope = function(){
	$itemsElement = $('#items');
	$itemsElement.isotope({
		itemSelector: ".item",
		layoutMode: "masonry"
	});
}


setupFilter = function(){
	$('.btn-filter').on('click', function(){

		// Remove anything that is on the search box.
		$(".search-input").val("");

		// Check if this button is active or not.
		isActive = $(this).hasClass("active");
		if (!isActive) group = $(this).data('filter');
		else group = '*';

		// Untoggle other buttons.
		if (!isActive) {
			$('.filters .active').removeClass('active');
		}

		// Activate this button.
		$(this).button('toggle');

		// Filter items based on this button.
		if (group != "*") {
			$itemsElement.isotope({
				filter: function(){
					groups = $(this).data("group");
					return groups.indexOf(group) !== -1;
				}
			});
		}
		else {
			$itemsElement.isotope({
				filter: group
			});
		}
	})
}


setupSearch = function(){
	$('.search-input').on('keyup change', function() {

		// Get typed string.
		var val = this.value.toLowerCase();

		// Untoggle any button that is active.
		$('.btn-filter').each(function(){
			if ($(this).hasClass("active"))
				$(this).button('toggle');
		});

		// Filter items based on search string.
		$itemsElement.isotope({filter: function(){
			var text1 = $.trim($(this).find('.item-title').text()).toLowerCase();
			var text2 = $.trim($(this).find('.tags').text()).toLowerCase();
			var text3 = $.trim($(this).find('.description').text()).toLowerCase();
			var text4 = $.trim($(this).find('.author').text()).toLowerCase();
			return text1.indexOf(val) !== -1 || text2.indexOf(val) !== -1 || text3.indexOf(val) !== -1 || text4.indexOf(val) !== -1;
		}});
	});
}