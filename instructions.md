# Steps to reproduce

1. Run the server by `npm run dev` command. And check output icons are working fine.

2. Go to the `public` folder and add the following new symbol `ui-icons.svg` or uncomment the commented code there.

```xml
<symbol id="bookmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
</symbol>
```

3. Go to `src/views/HomeView.vue` page component and uncomment the commented code or add this.

```vue
<bek-icon icon="/ui-icons.svg#bookmark" />
```

4. Now, go to the running server page and check that if the icon is available. Expected to see the icon transparently.

5. Go back to the `HomeView.vue` component and change the beginning of icon path form `/` to `/public/`.

6. Go and check if the icon is available now. Expected to see it and working.

7. Go back to the `HomeView.vue` component and revert fro `/public/` to `/`.

8. Go and check if now it is working with `/` too. Expected to see working with `/` now.

NOW MY QUESTION: IF THIS IS NOT A BUG THEN WHY IT DOESN'T WORK FOR THE FIRST TIME WITH `/`? THEN, IT IS A BUG? OF COURSE.
PLEASE, FIX IT ASAP. I AM EAGER TO SEE THIS FIX AND USE IT ASAP. THANK YOU FOR ALL. :)
