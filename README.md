# e2e-testing
End-to-End Testing with Nightwatch and Cucumber


### Step 1

Install all dependencies

```
$ npm install
```

or shorter


```
$ yarn
```

### Step 2

Install selenium

```
$ npm run selenium-install
```

or shorter

```
$ yarn selenium-install
```

### Step 3

Try existing scripts

```
$ npm run nightwatch-chrome
$ npm run nightwatch-firefox
$ npm run nightwatch-chrome-firefox
$ npm run cucumber-chrome
$ npm run cucumber-firefox
$ npm run nightwatch-cucumber-chrome
$ npm run nightwatch-cucumber-firefox
$ npm run nightwatch-cucumber-chrome-firefox
```

or shorter


```
$ yarn nightwatch-chrome
$ yarn nightwatch-firefox
$ yarn nightwatch-chrome-firefox
$ yarn cucumber-chrome
$ yarn cucumber-firefox
$ yarn nightwatch-cucumber-chrome
$ yarn nightwatch-cucumber-firefox
$ yarn nightwatch-cucumber-chrome-firefox
```

### Tips

Edit *.conf.js files (look out for commented out lines) to allow for:
- parallel runs of tests/features
- manual start of selenium server

Manually start selenium (if desired) can be done using

```
$ npm run selenium
```

or shorter

```
$ yarn selenium
```
