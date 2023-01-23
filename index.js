class CascadeSelect {
    constructor(selector) {
        this.select = document.querySelector(selector);
        this.options = {};
    }

    init() {
        this.collectOptions();
        this.createSelects();
    }

    collectOptions() {
        /*otpgroup labels & options into object
        @returns obj
        example {"4-legged pets": Array(3) [ "hamster", "dog", "cat" ],
        "Flying pets": Array(3) [ "parrot", "macaw", "albatross" ]} */
        this.options = [...this.select.querySelectorAll('optgroup')].reduce((acc, optgroup) => {
            if (optgroup.label) {
                acc[optgroup.label] = [...optgroup.children].map(opt => opt.value);
            }
            return acc;
        }, {});
    }


    createSelectElement()
    {
        return document.createElement('select');
    }

    createSelects() {
        this.selectGroup = this.createSelectElement();
        this.selectOptions = this.createSelectElement();
        this.select.insertAdjacentElement('afterend', this.selectGroup);
        this.selectGroup.insertAdjacentElement('afterend',this.selectOptions);

        this.createSelectOptions(this.selectGroup, Object.keys(this.options));
        this.selectGroup.selectedIndex = 0;
        this.updateOptions();

        //everytime selectGroup is changed we update options
        //have to use bind/arrowfunct or "this" will refer to event target
        this.selectGroup.addEventListener("change", this.updateOptions.bind(this));

        //hiding the initial select
        this.select.style.display = "none";
    }

    updateOptions()
    {
        this.createSelectOptions(this.selectOptions,this.options[this.selectGroup.value]);
    }

    createSelectOptions(select,options)
    {
        select.innerHTML = options.map((option)=>{return `<option value="${option}">${option}</option>`});
    }

}

const cascadeSelect = new CascadeSelect('select');
cascadeSelect.init();
