if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisPostFastOptionCopyLink",["fbt","IGCoreDialog","PolarisClipboard","PolarisLogger","PolarisPostModalContext","PolarisPostShareUtils","PolarisPostTypeUtils","Polarisods","PolarisuseAnalyticsContext","PolarisuseShowToast","gkx","react"],(function(a,b,c,d,e,f,g,h){var i=d("react"),j=h._(/*FBT_CALL*/"Link copied to clipboard."/*FBT_CALL*/),k=h._(/*FBT_CALL*/"Copy link"/*FBT_CALL*/);function a(a){var b=a.onClose;a=a.post;var e=d("PolarisPostModalContext").useSetPostModal(),f=c("PolarisuseShowToast")(),g=c("PolarisuseAnalyticsContext")(),h=d("PolarisPostTypeUtils").getPostType(a),l=d("PolarisPostShareUtils").getCopyUrl(a);if(a.owner==null)return null;a=d("PolarisPostShareUtils").getIsShareable(a,a.owner);if(!a)return null;a=function(){if(!d("PolarisClipboard").canCopy()){e("copy");return}var a=d("PolarisClipboard").copy(l);c("gkx")("4909")||d("PolarisLogger").logAction_DEPRECATED("postLinkCopy",{source:g,type:h});c("Polarisods").incr("web.post_options.post_link_copy");a?(f({text:j}),b()):e("copy")};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:k})}a.displayName=a.name+" [from "+f.id+"]";g.LINK_COPIED_PROMPT=j;g.COPY_LINK_TEXT=k;g.PostFastOptionCopyLink=a}),98);
__d("PolarisIGBloksApp",["PolarisBloksAppContext","PolarisIGBloksRenderer","PolarisIGCoreBox","PolarisIGCoreSpinner","PolarisuseBloksApp","react"],(function(a,b,c,d,e,f,g){var h=d("react");function a(a){var b=a.appId,e=a.fallback,f=a.options,g=a.onCloseConsentFlow,i=a.params;i=i===void 0?{}:i;a=a.props;a=a===void 0?{}:a;b=c("PolarisuseBloksApp")(b,i,a,f);i=b.appData;a=i.manifest;i=i.node;b=b.isReady;return i==null||!b?e!=null?e:h.jsx(c("PolarisIGCoreBox"),{height:"100%",width:"100%",children:h.jsx(c("PolarisIGCoreSpinner"),{position:"absolute"})}):h.jsx(d("PolarisBloksAppContext").BloksAppContextProvider,{context:{layout:{},manifest:a},children:h.jsx(c("PolarisIGBloksRenderer"),{appGetOptions:f,node:i,onCloseConsentFlow:g})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);