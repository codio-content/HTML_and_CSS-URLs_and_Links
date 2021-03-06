In this section we will do a little gallery with images from the web.

We will first visit Flickr in order to find some pictures, using this link you can do a search on Flickr for "car" pictures with an unrestricted licence to use : https://www.flickr.com/search/?text=car&license=7%2C9%2C10

After clicking the link above you will land on a Flickr page with a lot of pictures of cars ! In order to use any of those pictures, just click on it to go to the details pages for that picture then click on the right the little "share" icon :

![](.guides/img/flickr_share1.png)

That should open a popup windown like this :

![](.guides/img/flickr_share2.png)

You have to click first "HTML Embed" then copy paste the code that is shown in Image 2.

This code will look something like this :

```html
<a data-flickr-embed="true" data-header="true" data-footer="true"  href="https://www.flickr.com/photos/mustangjoe/6882115276/in/photolist-bu9D6W-77tDce-hTzPJy-c8uhES-aQwySt-oBhE5M-cV8N69-7GA8BB-7vxEWo-7vxEM1-ahfgNt-bCMZNH-pJsTfh-aBJDAP-s4dxPR-dhZq55-ah2cjo-cVHdow-fgYQbA-tGPjJq-6r9V59-ffdMDU-cE7TuN-e4ro17-sE6FGD-mpB7aR-fQ8kCo-6r5JRr-sHfY9q-fJupQH-b7bGpV-sqTin6-fPQTAc-rEX6bR-tHhgM8-apo6Jq-rK3qkX-ecAC47-ouJi2q-shbssh-e9B45Z-bqCWTB-fJv5yX-uMRF4N-oTLq72-rTXRm5-fNDYd3-sDZeqU-fJtpRe-sUeoFm" title="1957 Chevrolet 150 Police Car"><img src="https://farm8.staticflickr.com/7251/6882115276_301d6459a6_z.jpg" width="640" height="374" alt="1957 Chevrolet 150 Police Car"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
```
Now that you now how to get the code for a picture from flickr ... Let's do a little challenge

{Check It!|assessment}(test-1186719088)

|||guidance

Solution :

The individual solution of each student might varies but here is an example :

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<h1>My photo gallery</h1>

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/miwok/11085448856/in/photolist-hTzPJy-aQwySt-oBhE5M-cV8N69-7GA8BB-7vxEWo-7vxEM1-bCMZNH-aBJDAP-s4dxPR-dhZq55-ah2cjo-cVHdow-c8uhES-ahfgNt-pJsTfh-fgYQbA-cE7TuN-e4ro17-sE6FGD-mpB7aR-fQ8kCo-sHfY9q-wGctUd-fJupQH-b7bGpV-fPQTAc-apo6Jq-ecAC47-ouJi2q-shbssh-w6ebHZ-6r9V59-ffdMDU-6r5JRr-wWn7Lp-sqTin6-rEX6bR-rK3qkX-w5PztR-w5bpTj-v8WUqH-w5b8kQ-w5NMrv-e9B45Z-nQFnXc-bqCWTB-fJv5yX-oTLq72-v8NRdY" title="Citroën 2CV"><img src="https://farm3.staticflickr.com/2807/11085448856_e03b17df3a_z.jpg" width="640" height="361" alt="Citroën 2CV"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<p>Explanation Text</p>

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/statelibraryofnsw/6456366655/in/photolist-hTzPJy-aQwySt-oBhE5M-cV8N69-7GA8BB-7vxEWo-7vxEM1-bCMZNH-aBJDAP-s4dxPR-dhZq55-ah2cjo-cVHdow-c8uhES-ahfgNt-pJsTfh-fgYQbA-cE7TuN-e4ro17-sE6FGD-mpB7aR-fQ8kCo-sHfY9q-wGctUd-fJupQH-b7bGpV-fPQTAc-apo6Jq-ecAC47-ouJi2q-shbssh-w6ebHZ-6r9V59-ffdMDU-6r5JRr-wWn7Lp-sqTin6-rEX6bR-rK3qkX-w5PztR-w5bpTj-v8WUqH-w5b8kQ-w5NMrv-e9B45Z-nQFnXc-bqCWTB-fJv5yX-oTLq72-v8NRdY/" title="Woman with her new Maxwell car and dog, Shoalhaven, ca. 1920 / photographer Cyrus S. Moss"><img src="https://farm8.staticflickr.com/7028/6456366655_32597d1d7d_z.jpg" width="640" height="471" alt="Woman with her new Maxwell car and dog, Shoalhaven, ca. 1920 / photographer Cyrus S. Moss"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<p>More Explanation Text</p>

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/usnationalarchives/4272498450/in/photolist-hTzPJy-aQwySt-oBhE5M-cV8N69-7GA8BB-7vxEWo-7vxEM1-bCMZNH-aBJDAP-s4dxPR-dhZq55-ah2cjo-cVHdow-c8uhES-ahfgNt-pJsTfh-fgYQbA-cE7TuN-e4ro17-sE6FGD-mpB7aR-fQ8kCo-sHfY9q-wGctUd-fJupQH-b7bGpV-fPQTAc-apo6Jq-ecAC47-ouJi2q-shbssh-w6ebHZ-6r9V59-ffdMDU-6r5JRr-wWn7Lp-sqTin6-rEX6bR-rK3qkX-w5PztR-w5bpTj-v8WUqH-w5b8kQ-w5NMrv-e9B45Z-nQFnXc-bqCWTB-fJv5yX-oTLq72-v8NRdY/" title="After Hours in a Gasoline Line a Driver Could Arrive at the Pumps and Find Out That the Car Ahead of Him Was the Last to Get Fuel. So Many Stations, Such as This One in Portland, Began Using a &quot;Sorry&quot; Sign on the Last Car to Get Gas 12/1973"><img src="https://farm5.staticflickr.com/4056/4272498450_c40495d830_z.jpg" width="640" height="435" alt="After Hours in a Gasoline Line a Driver Could Arrive at the Pumps and Find Out That the Car Ahead of Him Was the Last to Get Fuel. So Many Stations, Such as This One in Portland, Began Using a &quot;Sorry&quot; Sign on the Last Car to Get Gas 12/1973"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<p>And More Explanation Text</p>

</body>
</html>
```

|||
