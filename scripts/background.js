const environment = chrome || browser;

console.log(environment);

function openTab() {
  console.log("called");
  var newTab = environment.tabs.create(
    {
      url: "https://twitter.com/official__ceo",
      active: true,
    },
    (tab) => {
      console.log(tab);
    }
  );

  console.log("done");
}

// openTab();

// environment.action.onClicked.addListener(openTab);
