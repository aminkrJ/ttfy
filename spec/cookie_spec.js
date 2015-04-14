describe("cookie", function() {

  it("stores a string", function() {
    Cookies.raw = true;
    Cookies.set('name', 'value', {expires: 7, path: '/'});
    expect(Cookies.get('name')).toBe('value');
    Cookies.remove('name');
  });

  it("stores an array of hashes", function() {
    Cookies.json = true;
    Cookies.set('name', [{flight: 'jetstar'}, {flight: 'airasia'}]);
    expect(JSON.parse(Cookies.get('name'))[0].flight).toBe('jetstar');
    expect(JSON.parse(Cookies.get('name'))[1].flight).toBe('airasia');
    Cookies.remove('name');
  });

});

