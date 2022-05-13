<template>
  <div id="twitter-project">  
    <router-view/>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",
};
</script>

<style>
/* 引入字體 */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");

/* css reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
@font-face {
  font-family: "Montserrat";
  src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
  unicode-range: U+30-39;
}
body {
  line-height: 1;
  /* 字體設定 */
  font-family: "Noto Sans TC", "Montserrat", sans-serif;
  font-size: 16px;
}
h1 {
  font-size: 68px;
  font-weight: bold;
  line-height: 78px;
}
h2 {
  font-size: 42px;
  font-weight: bold;
  line-height: 52px;
}
h3 {
  font-size: 28px;
  font-weight: bold;
  line-height: 26px;
}
h4 {
  font-size: 24px;
  font-weight: bold;
  line-height: 26px;
}
h5 {
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

h1 {
  font-size: 68px;
  font-weight: bold;
  line-height: 78px;
}
h2 {
  font-size: 42px;
  font-weight: bold;
  line-height: 52px;
}
h3 {
  font-size: 28px;
  font-weight: bold;
  line-height: 26px;
}
h4 {
  font-size: 24px;
  font-weight: bold;
  line-height: 26px;
}
h5 {
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
}
</style>