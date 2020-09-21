*a very simple searchbar component for reactjs*

### Props

Prop name | type | default | description
--------- | ---- | -------- |---------
hideClearIcon | boolean | false | to not show X button
showSearchButton | boolean | false | to show search button
searchFromArray | array | [] | array of strings from where to search
getResults | function | () => {} | returns the searched results from searchFromArray based on input
