'use strict'

chrome.devtools.panels.elements.createSidebarPane(
  "Ractive Dataz",
  function(sidebar) {
    function update() {
      sidebar.setExpression(
        "(typeof Ractive !== 'undefined'" +
          " ? (ractive_infoz = Ractive.getNodeInfo($0)).ractive" +
            " ? ractive_infoz.ractive.get(ractive_infoz.keypath)" +
            " : {'!info!': 'select an element'}" +
          " : {'!info!': 'Ractive global not present in this website'}" +
        ")"
      )
    }

    update()
    chrome.devtools.panels.elements.onSelectionChanged.addListener(update)
  }
)
