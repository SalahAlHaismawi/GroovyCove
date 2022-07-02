if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisStoryMediaLayout",["cx","PolarisResponsiveBlock","PolarisStoriesContext","PolarisUA","PolarisdisplayPropertiesSelectors","Polarisinvariant","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){var i=d("react"),j=1.3,k=1;b=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={height:0,width:0},c.$2=function(a,b){var d=c.props.intrinsicDimensions,e=c.$1()?k:j;a=a;b=b;var f=a/b;d=d.width/d.height;f/d>e||d/f>e?f>d?a=b*d:b=a/d:f>d?b=a/d:a=b*d;c.setState({height:b,width:a});c.context.updateStoriesContext({mediaDimensions:{width:a,height:b}})},b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.$1=function(){var a=this.props.isTallDevice;return a&&d("PolarisUA").isMobile()};e.render=function(){var a=this.props.children;typeof a==="function"||c("Polarisinvariant")(0,51418);var b=this.state,e=b.width;b=b.height;var f=null;if(e!==0&&b!==0){var g={className:"_aa63",layoutWidth:e,layoutHeight:b};f=i.jsx("div",{className:"_aa64",style:{width:e,height:b},children:a(g)})}return i.jsx(c("PolarisResponsiveBlock"),{className:"_aa65"+(d("PolarisUA").isDesktop()?" _aa66":""),onResize:this.$2,children:f})};return b}(i.Component);b.contextType=d("PolarisStoriesContext").StoriesContext;function a(a){return{isTallDevice:d("PolarisdisplayPropertiesSelectors").getIsTallDevice(a)}}e=d("react-redux-wwwig").connect(a)(b);g["default"]=e}),98);
__d("PolarisStoryMediaPrefetcher",["cx","PolarisDataSaverConfig","PolarisFeedActionTypes","PolarisIGLiteHelpers","PolarisMediaPrefetchContainer","PolarisMediaPrefetcher","PolarisStoryMediaLayout","Polarisnullthrows","PolarisstorySelectors","PolariswithDataSaver","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){var i=d("react"),j="storyMedia",k=function(a){return function(a,b){if(d("PolarisstorySelectors").isReelItemExpired(a.expiringAt,b))return null;b=Boolean(a.src!=null&&a.dimensions!=null);return b&&a.isVideo===!1&&a.displayResources?{type:d("PolarisMediaPrefetcher").PREFETCHED_IMAGE,id:a.id,src:c("Polarisnullthrows")(a.src),srcSet:c("Polarisnullthrows")(a.displayResources),intrinsicDimensions:c("Polarisnullthrows")(a.dimensions)}:null}};function l(a){var b=a.children;a=a.resource;return i.jsx(c("PolarisStoryMediaLayout"),{intrinsicDimensions:a.intrinsicDimensions,children:function(a){a=a.className;return i.jsx("div",{className:a,children:b})}})}l.displayName=l.name+" [from "+f.id+"]";e=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.componentDidMount=function(){var a=babelHelpers["extends"]({},this.props.prefetchLogExtras,{dataSaver:this.props.isDataSaverMode,preload:this.props.preload});d("PolarisIGLiteHelpers").logIgLiteAction({event_name:"storiesPrefetchAttempt",extras:a});this.props.preload!==d("PolarisDataSaverConfig").PRELOAD_AUTO&&this.props.onLoadComplete()};e.render=function(){return this.props.preload===d("PolarisDataSaverConfig").PRELOAD_AUTO&&i.jsx("div",{className:"_aag2",children:i.jsx(c("PolarisMediaPrefetchContainer"),{getResourceFromPost:k(this.props.prefetchContext),layoutWrapper:l,onLoadComplete:this.props.onLoadComplete,postIds:this.props.postIds.toArray(),viewKey:j})})};return b}(i.Component);function a(a,b){b=d("PolarisstorySelectors").getPrefetchablePostIds(a,b.prefetchContext);a=d("PolarisstorySelectors").getPrefetchLogExtras(a,b);return{postIds:b,prefetchLogExtras:a}}function b(a,b){return{onLoadComplete:function(){b.prefetchContext==="feed"&&a({type:d("PolarisFeedActionTypes").FEED_PAGE_STORY_PREFETCH_COMPLETE})}}}h=d("react-redux-wwwig").connect(a,b)(c("PolariswithDataSaver")(e));g["default"]=h}),98);
__d("PolarisStoryStrings",["fbt"],(function(a,b,c,d,e,f,g,h){a=function(a){return h._(/*FBT_CALL*/"Reply to {username}..."/*FBT_CALL*/,[h._param("username",a)])};b=function(a){return h._(/*FBT_CALL*/"Story by {username}, not seen"/*FBT_CALL*/,[h._param("username",a)])};c=function(a){return h._(/*FBT_CALL*/"Story by {username}, seen"/*FBT_CALL*/,[h._param("username",a)])};g.directReplyPlaceholder=a;g.unseenStoryTrayItemAriaLabel=b;g.seenStoryTrayItemAriaLabel=c}),98);