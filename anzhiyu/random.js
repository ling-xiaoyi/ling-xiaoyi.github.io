var posts=["2023/10/11/android/","2023/10/10/hello-world/","2023/10/11/title/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};