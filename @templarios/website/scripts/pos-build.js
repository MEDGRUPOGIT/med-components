import replace from "replace-in-file";
import copy from "recursive-copy";

const options = {
  files: "dist/**/*.html",

  from: [
    /<!-- .\/core -->/g,
    /<!-- ..\/core -->/g,
    /<!-- .\/main.js -->/g,
    /<!-- ..\/main.js -->/g,
    /href="\/(?!templarios\/website)/g,
    /href="(?!(http|https|\/|#|\.))/g,
    /src="\/(?!templarios\/website)/g,
    /src="(?!(http|https|\/|#|\.))/g,
  ],
  to: [
    '<script type="module" src="./core/dist/ionic/ionic.esm.js"></script>',
    '<script type="module" src="../core/dist/ionic/ionic.esm.js"></script>',
    '<script type="module" src="./main.js"></script>',
    '<script type="module" src="../main.js"></script>',
    'href="/templarios/website/',
    'href="/templarios/website/',
    'src="/templarios/website/',
    'src="/templarios/website/',
  ],
};

replace(options)
  .then((results) => {
    console.log("Replacement results:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

copy("node_modules/@ionic/core", "dist/core")
  .then(function (results) {
    console.info("Copied " + results.length + " files");
  })
  .catch(function (error) {
    console.error("Copy failed: " + error);
  });

copy("scripts/main", "dist")
  .then(function (results) {
    console.info("Copied " + results.length + " files");
  })
  .catch(function (error) {
    console.error("Copy failed: " + error);
  });
