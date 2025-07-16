## FABFDEV Landing Page
Uma landing page rodando React Native através do EXPO

### Passo a passo para nova build
1. npx expo export --platform web
2. node fix_paths.js
3. cp -r dist/* .
4. Commit


AppConverter | Transforme seu site em um aplicativo nativo

Meta pixel
```
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1740909806795906');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1740909806795906&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```