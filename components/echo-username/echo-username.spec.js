describe("when using echo-username", function() {
  let element;

  beforeEach(function(done) {
    let link = document.createElement("link");
    link.rel = "import";
    link.href = "components/echo-username/index.html";

    document.getElementsByTagName("head")[0].appendChild(link);

    let scriptLoaded = setInterval(() => {
      if (window.customElements.get("echo-username")) {
        clearInterval(scriptLoaded);
        element = document.createElement("echo-username");
        done();
      }
    }, 10);
  });

  afterEach(function() {
    document.body.removeChild(element);
  });

  it("should just say Hi", function() {
    // arrange
    // act
    document.body.appendChild(element);

    // assert
    expect("<div>Hi</div>").toBe(element.innerHTML);
  });

  it("should say Hi <username>", function() {
    // arrange
    let username = document.createAttribute("username");
    username.value = "Jag";
    element.setAttributeNode(username);

    // act
    document.body.appendChild(element);

    // assert
    expect("<div>Hi Jag</div>").toBe(element.innerHTML);
  });

  it("can change username", function() {
    // arrange
    document.body.appendChild(element);
    let username = document.createAttribute("username");
    username.value = "JagV3";

    // act
    element.setAttributeNode(username);

    // assert
    expect("<div>Hi JagV3</div>").toBe(element.innerHTML);
  });
});
