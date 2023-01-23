# Cascade Select (v1)

Cascade Select is a JavaScript library. It enables you to create a cascade select where the options in the second select element change based on the selected option in the first select element.

View live demo [here.](https://3l4x.github.io/cascade-select/)

## Getting started

 1. Include the index.js file in your HTML file
 2. Create a select element in your HTML file
    ``` javascript
    <select>
        <optgroup label="4-legged pets">
            <option value="hamster">Hamster</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
        </optgroup>
        <optgroup label="Flying pets">
            <option value="parrot">Parrot</option>
            <option value="macaw">Macaw</option>
            <option value="albatross">Albatross</option>
        </optgroup>
    </select>
    ```
 3. Create an instance of the CascadeSelect class. It takes 1 argument in its constructor, a selector for the select element.
    ```javascript
    const cascadeSelect = new CascadeSelect('select');
    cascadeSelect.init();
    ```

## Note

This project as not built using custom elements. There is an updated version that was made extending HTMLElement. You can check it out [here.](https://github.com/3l4x/cascade-select-HTMLElement)


## Contributing

If you have any suggestions or find any bugs, please open an issue or submit a pull request.
