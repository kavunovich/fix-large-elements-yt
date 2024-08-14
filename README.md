# Fix Large Elements YouTube
I came across this just recently, I didn’t find a humane solution, and I was even surprised that the problem was more than 5 years old, but everyone said it was a bug. Well I decided to solve this.

![Screenshot 2024-08-14 161922](https://github.com/user-attachments/assets/8c369641-9c59-4c97-a0c1-443ce30439b9)

### Instructions for solution
1. Download the [Resource Override](https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii) browser extension.
2. Open it and enter the URL in the Tab URL as in the photo below
3. Click on Add Rule and select Inject File
4. Make all the settings as shown below and click on Edit File
5. Paste this code into the input:
```js
new Promise(a=>{let b=setInterval(()=>{let c=document.querySelector("ytd-rich-item-renderer");if(c){document.head.insertAdjacentHTML("beforeend","<style>ytd-rich-item-renderer {--ytd-rich-grid-items-per-row: 6;}#contents.ytd-rich-shelf-renderer {--ytd-rich-grid-slim-items-per-row: 9;justify-content: center;}</style>"),clearInterval(b),a(0)}},1e3)});
```

You can also change it your way by taking the [source code](https://github.com/kavunovich/fix-large-elements-yt/blob/main/script.js)

![image](https://github.com/user-attachments/assets/992484df-228d-415f-9fa9-4b68827a0ec1)

### Result
![image](https://github.com/user-attachments/assets/34c96dd4-fad3-4b28-abec-23a7fd62bf6e)
